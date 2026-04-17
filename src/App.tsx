import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Search, ChevronRight, Menu, LogOut, Settings, 
  BookOpen, BrainCircuit, HeartHandshake, Smile, Users,
  BarChart2, Calendar, FileText, CheckCircle2, ChevronDown, Plus, Infinity,
  Activity, Database
} from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, doc, getDoc, setDoc, query, orderBy } from 'firebase/firestore';
import { db, auth, loginWithGoogle, logout } from './firebase';
import { handleFirestoreError, OperationType } from './lib/firestoreUtils';
import { ErrorBoundary } from './components/ErrorBoundary';
import { type Article, type Step, MOCK_ARTICLES } from './data/mockArticles';

// --- COMPONENTS ---

// 1. Sidebar Nav Item
const NavItem = ({ icon: Icon, label, active, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`px-4 py-2.5 rounded-xl cursor-pointer text-sm font-medium flex items-center gap-3 transition-all ${
      active 
      ? 'bg-brand-blue text-white shadow-[0_4px_12px_rgba(25,146,176,0.3)]' 
      : 'text-text-dark hover:bg-white/50'
    }`}
  >
    <Icon size={18} />
    {label}
  </div>
);

// 2. Banner for Expanded Article
const ExpandedBanner = ({ article }: { article: Article }) => (
  <div className={`h-48 rounded-2xl relative p-6 md:p-10 text-white flex flex-col justify-center overflow-hidden mb-6 shadow-md bg-gradient-to-br ${article.bannerGradient}`}>
    {/* Decorative element */}
    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-orange rounded-full opacity-60 z-0 blur-lg mix-blend-screen"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    
    <div className="relative z-10">
       <span className="inline-block px-4 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-full mb-3 shadow-[0_2px_10px_rgba(255,149,0,0.5)]">
         {article.category}
       </span>
       <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-2xl">{article.title}</h2>
    </div>
  </div>
);

// 3. Infographic Framework Builder
const ProcessFramework = ({ steps }: { steps: Step[] }) => (
  <div className="my-8 bg-white max-w-3xl border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
    <div className="flex items-center gap-2 mb-6">
      <Infinity size={24} className="text-brand-orange" />
      <h3 className="text-lg font-bold text-brand-blue uppercase tracking-wide">Quy Trình Hệ Thống Hóa</h3>
    </div>
    
    <div className="relative border-l-2 border-brand-blue/20 ml-4 md:ml-6 space-y-8">
       {steps.map((step, idx) => (
         <div key={idx} className="relative pl-8 md:pl-10">
           {/* Node Dot */}
           <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">
             {step.num}
           </div>
           
           <div className="bg-slate-50 p-4 md:p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
             <h4 className="font-semibold text-brand-blue text-base mb-2">{step.title}</h4>
             <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
           </div>
         </div>
       ))}
    </div>
  </div>
);

// 4. Expanded Article Content Area
const ArticleContent = ({ article }: { article: Article }) => (
  <div className="p-4 md:p-8 pt-0">
    <ExpandedBanner article={article} />
    
    <div className="max-w-4xl pb-4">
      <div className="text-base md:text-lg text-slate-700 leading-relaxed font-medium mb-8 markdown-body">
        <ReactMarkdown>{article.content.intro}</ReactMarkdown>
      </div>

      {/* Sơ đồ hóa Framework */}
      <h3 className="text-xl font-bold text-text-dark mt-10 mb-4 flex items-center gap-2">
        <Activity size={24} className="text-[#1992b0]" />
        Phần Thực Hành / Phương Pháp Trị Liệu
      </h3>
      <ProcessFramework steps={article.content.steps || []} />

      <h3 className="text-xl font-bold text-text-dark mt-10 mb-4 flex items-center gap-2">
        <CheckCircle2 size={24} className="text-brand-orange" />
        Kết Luận & Đo Lường
      </h3>
      <div className="text-base text-slate-600 leading-relaxed markdown-body">
        <ReactMarkdown>{article.content.conclusion}</ReactMarkdown>
      </div>
      
      <div className="mt-10 p-5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="font-medium text-brand-orange text-sm relative z-10 whitespace-pre-line text-center md:text-left">
           Bạn muốn đưa dữ liệu này vào Dashboard theo dõi cá nhân?
         </div>
         <button className="px-5 py-2.5 bg-brand-orange text-white rounded-lg text-sm font-semibold hover:bg-[#e68600] transition-colors whitespace-nowrap shadow-md">
           Mở Tracking Tool
         </button>
      </div>
    </div>
  </div>
);


// --- MAIN APP ENTRY ---

function AppContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Khuyến Nghị Nổi Bật');
  
  // Auth & Data State
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Auth Initialization & User Role fetching
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (!userDoc.exists()) {
             // Let's create the user profile if first time
             const role = currentUser.email === 'paultran190521@gmail.com' ? 'admin' : 'user';
             await setDoc(userDocRef, {
                uid: currentUser.uid,
                email: currentUser.email,
                role: role,
                createdAt: new Date().toISOString()
             });
             setIsAdmin(role === 'admin');
          } else {
             setIsAdmin(userDoc.data()?.role === 'admin');
          }
        } catch (e) {
             handleFirestoreError(e, OperationType.GET, 'users');
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  // Fetch Articles
  useEffect(() => {
    // Subscribe to articles collection
    const q = query(collection(db, 'articles'));
    const unsub = onSnapshot(q, (snapshot) => {
      const fetchedArticles: Article[] = [];
      snapshot.forEach((docSnap) => {
         const data = docSnap.data();
         let parsedSteps = [];
         try {
            parsedSteps = JSON.parse(data.contentSteps || '[]');
         } catch(e) {}

         fetchedArticles.push({
            id: docSnap.id,
            title: data.title,
            category: data.category,
            metaInfo: data.metaInfo,
            readTime: data.readTime,
            excerpt: data.excerpt,
            bannerGradient: data.bannerGradient,
            content: {
               intro: data.contentIntro,
               steps: parsedSteps,
               conclusion: data.contentConclusion
            },
            authorId: data.authorId,
            createdAt: data.createdAt
         });
      });
      // Sort to show newest or based on ID for our mock seeding
      fetchedArticles.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setArticles(fetchedArticles);
    }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'articles');
    });
    return unsub;
  }, [user]);

  // Seed Function (Admin Only)
  const handleSeedDatabase = async () => {
    if (!isAdmin || !user) return;
    
    try {
      for (const article of MOCK_ARTICLES) {
         const docRef = doc(db, 'articles', article.id);
         await setDoc(docRef, {
             title: article.title,
             category: article.category,
             metaInfo: article.metaInfo,
             readTime: article.readTime,
             excerpt: article.excerpt,
             bannerGradient: article.bannerGradient,
             contentIntro: article.content.intro,
             contentSteps: JSON.stringify(article.content.steps),
             contentConclusion: article.content.conclusion,
             authorId: user.uid,
             createdAt: new Date().toISOString(),
             updatedAt: new Date().toISOString()
         });
      }
      alert('Đã tải lên hệ thống 8 bài viết gốc thành công!');
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, 'articles');
    }
  };

  // Handle click to expand/collapse
  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  // Preloader
  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center"><Activity className="animate-spin text-brand-blue" /></div>;
  }

  // Determine which articles to show (Filter by Category)
  const displayArticles = activeTab === 'Khuyến Nghị Nổi Bật' || activeTab === 'Tất Cả Bài Viết'
      ? articles 
      : articles.filter(a => a.category === activeTab);

  const selectedArticleExpanded = articles.find(a => a.id === expandedId);

  return (
    <div className="h-screen w-full flex text-text-dark font-sans relative">
      
      {/* SIDEBAR (Desktop hidden on mobile for brevity) */}
      <div className="w-[260px] glass-panel h-full flex-col z-20 hidden md:flex border-y-0 border-l-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r-white/40">
        {/* Logo Area */}
        <div className="p-6 pb-4">
          <div className="font-extrabold text-xl font-sans tracking-tight text-brand-blue border-l-4 border-brand-orange pl-3 select-none flex flex-col uppercase">
            <span>Mind Sync</span>
            <span className="text-brand-orange -mt-1">Pro.</span>
          </div>
        </div>

        {/* Scrollable Nav Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 custom-scrollbar">
          
          <div>
            <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest px-2 mb-3">
              Danh Mục Bài Viết
            </div>
            <div className="space-y-1">
              <NavItem icon={BrainCircuit} label="Tất Cả Bài Viết" active={activeTab === 'Khuyến Nghị Nổi Bật'} onClick={() => setActiveTab('Khuyến Nghị Nổi Bật')} />
              <NavItem icon={Smile} label="Quản Trị Cảm Xúc" active={activeTab === 'Quản Trị Cảm Xúc'} onClick={() => setActiveTab('Quản Trị Cảm Xúc')} />
              <NavItem icon={BrainCircuit} label="Hệ Thống Tư Duy" active={activeTab === 'Hệ Thống Tư Duy'} onClick={() => setActiveTab('Hệ Thống Tư Duy')} />
              <NavItem icon={BookOpen} label="Tâm Lý Học Đường" active={activeTab === 'Tâm Lý Học Đường'} onClick={() => setActiveTab('Tâm Lý Học Đường')} />
              <NavItem icon={HeartHandshake} label="Mối Quan Hệ & Kết Nối" active={activeTab === 'Mối Quan Hệ & Kết Nối'} onClick={() => setActiveTab('Mối Quan Hệ & Kết Nối')} />
              <NavItem icon={Users} label="Quản Trị Nhân Sự" active={activeTab === 'Quản Trị Nhân Sự'} onClick={() => setActiveTab('Quản Trị Nhân Sự')} />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest px-2 mb-3">
              Công Cụ Hệ Thống
            </div>
            <div className="space-y-1">
              <NavItem icon={BarChart2} label="Biểu Đồ Theo Dõi" />
              <NavItem icon={Calendar} label="Lịch Tham Vấn" />
            </div>
          </div>
        </div>

        {/* Footer Settings */}
        <div className="p-4 border-t border-white/40 space-y-2">
           {isAdmin && (
             <div onClick={handleSeedDatabase} className="cursor-pointer px-4 py-3 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
               <Database size={16} /> Tải dữ liệu mẫu lên
             </div>
           )}
           {user ? (
             <div onClick={logout} className="cursor-pointer px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
                <LogOut size={16} /> Đăng xuất
             </div>
           ) : (
             <div onClick={loginWithGoogle} className="cursor-pointer px-4 py-2 text-brand-blue hover:bg-brand-blue/10 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
                <LogOut size={16} className="transform rotate-180" /> Đăng nhập Admin
             </div>
           )}
        </div>
      </div>

      {/* MAIN CONTENT VỈEW */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        
        {/* Top Header Bar */}
        <div className="h-20 px-6 md:px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 w-full max-w-md relative">
             <Search className="absolute left-4 text-text-muted" size={18} />
             <input 
               type="text" 
               placeholder="Tìm kiếm 50 bài viết chuyên sâu..." 
               className="w-full pl-11 pr-4 py-2.5 bg-white/60 backdrop-blur-md border border-white/60 rounded-full text-sm outline-none focus:border-brand-blue focus:bg-white transition-all shadow-sm"
             />
          </div>
          
          <div className="flex items-center gap-4 cursor-pointer">
             <div className="hidden sm:block text-sm font-semibold truncate max-w-[150px]">Chào {user?.displayName || user?.email?.split('@')[0]}</div>
             <div className="w-10 h-10 bg-gradient-to-tr from-brand-orange to-amber-300 rounded-full ring-2 ring-white shadow-sm flex items-center justify-center text-white font-bold overflow-hidden">
               {user?.photoURL ? <img src={user.photoURL} alt="Avatar" referrerPolicy="no-referrer" /> : (user?.displayName?.[0] || 'U')}
             </div>
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 pb-20 custom-scrollbar">
           
           {/* Section 1: Library List */}
           <div className="flex flex-col lg:flex-row gap-8 mt-2 h-full">
             
             <div className="flex-1 flex flex-col max-w-4xl">
                
                <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="text-brand-blue" />
                  Thư Viện Bài Viết Chuyên Sâu {activeTab !== 'Khuyến Nghị Nổi Bật' && `(${activeTab})`}
                </h1>

                {/* Render Article List with Accordion functionality */}
                <div className="flex flex-col gap-4">
                  
                  {articles.length === 0 && (
                     <div className="p-10 text-center glass-panel rounded-2xl flex flex-col items-center justify-center text-slate-500 border-white/50">
                        <BookOpen size={40} className="mb-4 opacity-50" />
                        <p>Chưa có dữ liệu bài viết nào trong Database.</p>
                        {isAdmin && (
                          <div className="mt-4 p-4 bg-brand-orange/10 rounded-xl border border-brand-orange/20 max-w-xs cursor-pointer" onClick={handleSeedDatabase}>
                             <p className="text-sm font-medium text-brand-orange flex items-center gap-2">
                               <Database size={16}/> Bấm vào đây hoặc nút "Tải dữ liệu mẫu lên" ở góc trái để seed data tự động.
                             </p>
                          </div>
                        )}
                        {!isAdmin && (
                          <p className="text-sm mt-2 text-slate-400">Các bài viết đang được Admin cập nhật.</p>
                        )}
                     </div>
                  )}

                  {displayArticles.map((article) => {
                    const isExpanded = expandedId === article.id;
                    const isFeatured = false; // Add specific logic for featuring if needed
                    return (
                      <div key={article.id} className="flex flex-col">
                        
                        {/* The Clickable Header Card */}
                        <div 
                          onClick={() => handleToggle(article.id)}
                          className={`
                            glass-panel px-6 py-5 rounded-2xl flex flex-col md:flex-row justify-between md:items-center cursor-pointer transition-all z-10 border relative overflow-hidden group
                            ${isExpanded ? 'border-brand-blue bg-white/95 shadow-md' : 'border-white/50 hover:bg-white/90 hover:border-brand-blue/50 shadow-sm'}
                          `}
                        >
                          {/* Featured left accent line */}
                          {isFeatured && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />}

                          <div className="flex flex-col gap-1.5 pr-4 flex-1">
                             {/* Badge */}
                             <div className="text-[10px] font-bold text-white bg-brand-blue/80 px-2 py-0.5 rounded-full self-start mb-1 uppercase tracking-wider">
                               {article.category}
                             </div>
                             <h3 className={`font-bold transition-colors ${isExpanded ? 'text-brand-blue text-lg' : 'text-slate-800 text-base group-hover:text-brand-blue'}`}>
                               {article.title}
                             </h3>
                             <div className="text-xs text-text-muted font-medium flex gap-2 items-center">
                               {article.metaInfo} 
                               <span className="w-1 h-1 bg-gray-300 rounded-full"></span> 
                               {article.readTime}
                             </div>
                          </div>

                          <div className="hidden md:flex flex-shrink-0 mt-4 md:mt-0">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-brand-blue text-white shadow-lg rotate-180' : 'bg-gray-100 text-brand-blue'}`}>
                              <ChevronDown size={20} />
                            </div>
                          </div>
                        </div>

                        {/* The Expanded Content Area */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'linear' }}
                              className="overflow-hidden relative z-0"
                            >
                               <div className="glass-panel mt-[-16px] pt-8 rounded-b-2xl border-t-0 bg-white/80 border-brand-blue shadow-lg">
                                  <ArticleContent article={article} />
                               </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    );
                  })}
                </div>
             </div>

             {/* UI Preview Framework Right Panel - Only on very large screens for aesthetic balance */}
             <div className="hidden lg:block w-[320px] shrink-0 sticky top-4 h-[calc(100vh-140px)]">
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
                   
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl"></div>

                   <h3 className="text-xs font-bold text-brand-orange uppercase tracking-widest border-b border-gray-100 pb-3 mb-5 flex items-center gap-2">
                     <BrainCircuit size={14}/>
                     Hệ Thống Của Bạn
                   </h3>

                   <div className="flex-1 bg-slate-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-text-muted hover:border-brand-blue/30 transition-colors">
                      
                      {expandedId && selectedArticleExpanded ? (
                        <div className="flex flex-col items-center w-full animation-fade-in">
                          <CheckCircle2 size={40} className="text-brand-blue mb-4 opacity-50"/>
                          <p className="text-sm font-semibold text-slate-700 mb-2">Đang học Module</p>
                          <p className="text-xs">{selectedArticleExpanded?.title}</p>
                          
                          <div className="w-full h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
                             <div className="h-full bg-gradient-to-r from-brand-orange to-brand-blue w-1/3 rounded-full"></div>
                          </div>
                          <p className="text-[10px] mt-2 font-bold text-brand-blue">TIẾN ĐỘ ÁP DỤNG: 30%</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center opacity-60">
                           <Activity size={32} className="mb-3"/>
                           <p className="text-sm font-medium">Bấm vào một bài viết bất kỳ để mở rộng khung sơ đồ thực hành.</p>
                        </div>
                      )}
                      
                   </div>

                   <div className="mt-5 flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="text-xs font-bold text-slate-600">Trạng thái Database</span>
                      <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(76,175,80,0.5)]"></div>
                          <div className="text-[10px] font-bold text-green-600">Live (Firestore)</div>
                      </div>
                   </div>
                </div>
             </div>

           </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
     <ErrorBoundary>
        <AppContent />
     </ErrorBoundary>
  );
}
