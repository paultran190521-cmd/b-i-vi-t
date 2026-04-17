import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

// --- DATA STRUCTURES (Used for Seeding) ---

interface Step {
  num: number;
  title: string;
  desc: string;
}

interface Article {
  id: string;
  title: string;
  category: string;
  metaInfo: string;
  readTime: string;
  excerpt: string;
  bannerGradient: string;
  content: {
    intro: string;
    steps: Step[];
    conclusion: string;
  };
  authorId?: string;
  createdAt?: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: '0',
    title: 'Khung Quản Trị Cảm Xúc Hệ Thống: Kết Hợp CBT & Kanban',
    category: 'Khuyến Nghị Nổi Bật',
    metaInfo: 'Hệ thống Quản trị • Nâng cao',
    readTime: '20 Phút đọc',
    excerpt: 'Hướng dẫn chi tiết phương pháp trực quan hóa luồng cảm xúc để quản trị năng lượng làm việc kết hợp liệu pháp nhận thức...',
    bannerGradient: 'from-brand-blue to-[#116a82]',
    content: {
      intro: 'Sự kết hợp giữa Cognitive Behavioral Therapy (CBT - Liệu pháp nhận thức hành vi) và bảng Kanban trong quản lý dự án tạo ra một hệ thống theo dõi cảm xúc vô cùng sắc bén. Việc này giúp bạn không bị choáng ngợp bởi những suy nghĩ tiêu cực vô hình, mà biến chúng thành các "tác vụ/task" rõ ràng để giải quyết.',
      steps: [
        { num: 1, title: 'Nhận diện tín hiệu cơ thể', desc: 'Đưa trạng thái cảm xúc vào cột "To-Do". Nhận diện sự thay đổi sinh lý như nhịp tim nhanh, căng cơ.' },
        { num: 2, title: 'Bắt mạch suy nghĩ tự động (CBT)', desc: 'Chuyển sang "In Progress". Viết ra suy nghĩ tiêu cực đầu tiên xuất hiện trong đầu mà không phán xét.' },
        { num: 3, title: 'Tái cấu trúc nhận thức', desc: 'Sử dụng hệ thống phân tích logic để đánh giá tính chân thực của suy nghĩ. Tìm bằng chứng chống lại nó.' },
        { num: 4, title: 'Phân loại theo Kanban Matrix', desc: 'Gắn nhãn cảm xúc theo Actionable (Xử lý được) hoặc Non-actionable (Cấp bách nhưng ngoài tầm kiểm soát).' },
        { num: 5, title: 'Lưu trữ hệ thống', desc: 'Chuyển qua cột "Done". Đúc kết bài học vòng lặp cảm xúc vào Dashboard để máy học cá nhân hóa.' }
      ],
      conclusion: 'Khi thực hiện khung hệ thống này liên tục 21 ngày, não bộ của bạn sẽ tự động hóa quá trình phân tách cảm xúc, giảm thiểu hiệu ứng "Freeze" khi đối mặt với khủng hoảng.'
    }
  },
  {
    id: '1',
    title: '[01] Framework 5 Bước Xử Lý Khủng Hoảng Tâm Lý',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Hệ thống Quản trị • Thực hành',
    readTime: '12 Phút đọc',
    excerpt: 'Làm thế nào để đưa bản thân về trạng thái cân bằng trong vòng 3 phút khi gặp cơn hoảng loạn (Panic Attack)...',
    bannerGradient: 'from-brand-blue to-[#147a95]',
    content: {
      intro: 'Khi cơn hoảng loạn xảy ra, hạch hạnh nhân (Amygdala) trong não bị kích thích mạnh mẽ, tắt đi chức năng của vỏ não trước trán (trung tâm logic). Thay vì đè nén, hệ thống này giúp "mở khóa" dần lớp phòng thủ sinh học.',
      steps: [
        { num: 1, title: 'Grounding 5-4-3-2-1', desc: 'Kích hoạt lại 5 giác quan: 5 vật nhìn thấy, 4 thứ chạm được, 3 âm thanh, 2 mùi hương, 1 vị giác.' },
        { num: 2, title: 'Box Breathing (Thở hộp)', desc: 'Hệ thống hô hấp điều hướng nhịp tim: Hít 4s, nín 4s, thở 4s, nín 4s. Lặp lại 4 vòng.' },
        { num: 3, title: 'Rẽ nhánh suy nghĩ', desc: 'Đặt câu hỏi đóng (Yes/No) để ép vỏ não logic hoạt động trở lại. Ví dụ: "Bầu trời có màu xanh không?"' },
        { num: 4, title: 'Quét cơ thể (Body Scan)', desc: 'Sử dụng cơ chế thả lỏng cơ bắp lũy tiến, bắt đầu từ ngón chân lên dỉnh đầu.' },
        { num: 5, title: 'Tái hòa nhập trạng thái', desc: 'Dùng một "neo" cảm xúc tích cực (Anchor) để làm điểm tựa bước tiếp với hoạt động dang dở.' }
      ],
      conclusion: 'Mọi bước đều được đo lường thông qua việc tự chấm điểm theo thang SUD (Subjective Units of Distress) từ 0-10 trước và sau khi thực hành.'
    }
  },
  {
    id: '2',
    title: '[02] Ứng Dụng Sơ Đồ Tư Duy Trong Tham Vấn Gia Đình',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Mối quan hệ • Khoa học',
    readTime: '15 Phút đọc',
    excerpt: 'Biến câu chuyện rối rắm của gia đình thành cấu trúc (Genogram) để tìm ra nguồn gốc xung đột thế hệ...',
    bannerGradient: 'from-brand-orange to-[#e68600]',
    content: {
      intro: 'Tham vấn gia đình thường rơi vào bế tắc do các thành viên liên tục đổ lỗi luẩn quẩn. Genogram (Cây phả hệ tâm lý) là một giải pháp hệ thống hóa các dạng thức (patterns) truyền từ thế hệ này sang thế hệ khác.',
      steps: [
        { num: 1, title: 'Vẽ cây phả hệ 3 đời', desc: 'Liệt kê các thành viên, tuổi tác, sự kiện lớn (ly hôn, mất mát, di cư) trong vòng 3 thế hệ.' },
        { num: 2, title: 'Bản đồ hóa mối quan hệ', desc: 'Sử dụng các đường vẽ hệ thống: đường zíc zắc (xung đột), đường đứt nét (xa cách), đường kẻ ba (dính mắc).' },
        { num: 3, title: 'Phát hiện vòng lặp di truyền', desc: 'Xác định các khuôn mẫu hành vi độc hại lặp lại (ví dụ: bạo lực lạnh, ái kỷ).' },
        { num: 4, title: 'Phân tách trách nhiệm', desc: 'Sử dụng khung Boundaries để vạch rõ ranh giới cảm xúc của mỗi cá nhân trong hệ thống.' },
        { num: 5, title: 'Thiết lập Dashboard giao tiếp', desc: 'Đề ra 3 nguyên tắc giao tiếp cốt lõi (ví dụ: dùng câu "Tôi cảm thấy...", không dùng từ "Luôn luôn").' }
      ],
      conclusion: 'Khi mỗi cá nhân nhìn thấy "hệ thống" gia đình trên mặt giấy, họ ngừng tấn công nhau và bắt đầu cùng nhau giải quyết vấn đề của hệ thống.'
    }
  },
  {
    id: '4',
    title: '[04] Thiết Lập Hệ Thống Kỷ Luật Không Nước Mắt',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Học đường • Sơ đồ hóa',
    readTime: '20 Phút đọc',
    excerpt: 'Hệ thống hóa hành vi của con trẻ thành các nguyên tắc nhân quả thay vì trừng phạt và cảm xúc cá nhân...',
    bannerGradient: 'from-brand-orange to-[#e68600]',
    content: {
      intro: 'Kỷ luật dựa trên cảm xúc của cha mẹ thường dẫn đến sự chống đối và tổn thương. Khung "Kỷ luật hệ thống" xây dựng trên cơ sở quy luật nhân quả hợp lý và sự đồng thuận.',
      steps: [
        { num: 1, title: 'Xây dựng bản hiến pháp', desc: 'Ngồi lại cùng con để soạn thảo các quy tắc bằng một sơ đồ hình cây sinh động.' },
        { num: 2, title: 'Xác định hệ quả tự nhiên', desc: 'Nếu con không dọn đồ chơi, hệ quả là đồ chơi bị hỏng hoặc mất, cha mẹ không làm thay.' },
        { num: 3, title: 'Hệ quả logic', desc: 'Nếu con chơi game quá giờ, hệ quả logic là ngày mai bị trừ đúng số thời gian vi phạm.' },
        { num: 4, title: 'Sổ tay tracking hành vi', desc: 'Ghi nhận điểm tích cực qua hệ thống tích sao (Gamification) để kích thích Dopamine.' },
        { num: 5, title: 'Giao tiếp thấu cảm', desc: 'Luôn bắt đầu bằng việc công nhận cảm xúc của trẻ trước khi áp dụng hệ quả của hệ thống.' }
      ],
      conclusion: 'Kỷ luật không phải là kiểm soát trẻ em, mà là hệ thống giúp trẻ tự kiểm soát và xây dựng thói quen tự lập dựa trên sự thấu hiểu.'
    }
  },
  {
    id: '5',
    title: '[05] Debug Suy Nghĩ: Lập Trình Lại Điểm Mù Nhận Thức (Cognitive Biases)',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Tư duy • Kỹ thuật sâu',
    readTime: '18 Phút đọc',
    excerpt: 'Coi não bộ như một phần mềm, bài viết hướng dẫn bạn cách "Debug" những tư duy sai lệch đang bào mòn năng lượng...',
    bannerGradient: 'from-brand-blue to-[#0e4e60]',
    content: {
      intro: 'Con người xử lý khoảng 6,000 ý nghĩ mỗi ngày, trong đó có vô số "lỗi phần mềm" (Cognitive Distortions). Phương pháp "Mind Debugging" mượn tư duy lập trình để rà quét và fix lỗi các điểm mù này trước khi chúng tạo ra hành vi phá hoại.',
      steps: [
        { num: 1, title: 'Log Error (Ghi nhận lỗi)', desc: 'Khi cảm thấy tồi tệ, mở "Error Log" (Nhật ký). Ghi đúng sự kiện Input (Ai, lúc nào, cái gì) thuần túy không đánh giá.' },
        { num: 2, title: 'Scan Middleware (Quét màng lọc)', desc: 'Tìm xem sự kiện đã đi qua màng lọc nhận thức nào (ví dụ: Đọc tâm trí người khác, Tư duy thảm họa hóa, Phân cực Trắng-Đen).' },
        { num: 3, title: 'Isolate Function (Cô lập vấn đề)', desc: 'Tách biệt con người bạn khỏi ý nghĩ đó. "Tôi đang có một suy nghĩ rằng..." thay vì "Tôi tồi tệ vì..."' },
        { num: 4, title: 'Write Clean Code (Cấu trúc lại)', desc: 'Viết ra một lời giải thích thay thế (Alternative Output) dựa trên dữ kiện thực tế 100% được kiểm chứng.' },
        { num: 5, title: 'Unit Test (Chạy thử nghiệm)', desc: 'Mang suy nghĩ mới vào thử nghiệm trong một tình huống thực tế nhỏ và đánh giá cường độ cảm xúc (SUD).' }
      ],
      conclusion: 'Hệ thống tư duy của bạn cũng cần được cập nhật phần mềm liên tục. Bằng cách Debug mỗi ngày, "mạng nơ-ron" của bạn sẽ tự tối ưu hóa tốc độ xử lý trước các sự kiện tiêu cực.'
    }
  },
  {
    id: '6',
    title: '[06] Ma Trận Năng Lượng (Energy Matrix) Dành Cho Quản Trị Nhân Sự',
    category: 'Quản Trị Nhân Sự',
    metaInfo: 'Quản trị • Dashboard',
    readTime: '25 Phút đọc',
    excerpt: 'Quản lý thời gian đã lỗi thời, thời đại mới cần hệ thống quản lý năng lượng để ngăn chặn Team Burnout triệt để...',
    bannerGradient: 'from-brand-orange to-[#cc7700]',
    content: {
      intro: 'Nhiều nhân sự nghỉ việc ở đỉnh cao sự nghiệp không phải vì cạn kiệt thời gian, mà vì cạn kiệt dải năng lượng phục hồi. Khung "Energy Matrix" giúp HR phân bổ công việc dựa trên năng lực phục hồi sinh lý và tâm lý của từng cá nhân.',
      steps: [
        { num: 1, title: 'Check-in Năng Lượng', desc: 'Bắt đầu tuần mới bằng form Check-in: Phân loại nhân sự vào 4 vùng (Sinh tồn, Phục hồi, Hoạt động, Đỉnh cao).' },
        { num: 2, title: 'Phân loại Task theo ROI Năng lượng', desc: 'Task không chỉ có tính cấp bách, mà phải có nhãn "Tiêu hao" hay "Tái tạo" năng lượng người làm.' },
        { num: 3, title: 'Thiết kế Trạm sạc (Recovery Zones)', desc: 'Cài đặt các vi-tập (micro-breaks) 90/20. Làm việc sâu 90 phút, bắt buộc ngắt luồng 20 phút để não phục hồi.' },
        { num: 4, title: 'Bản đồ Burnout (Heatmap)', desc: 'Trực quan hóa những điểm nghẽn (bottleneck) trong quy trình đang vắt kiệt cảm xúc của team.' },
        { num: 5, title: 'Feedback Loop 360 độ', desc: 'Thẩm định lại mức độ hiệu quả của hệ thống thông qua các buổi 1-on-1 tập trung vào sức khỏe tâm thần.' }
      ],
      conclusion: 'Tối ưu hóa nguồn nhân lực không phải là vắt kiệt họ trong 8 tiếng, mà là xây dựng một hệ thống sinh thái giúp họ liên tục nạp xả nhịp nhàng mà không bị sập nguồn.'
    }
  },
  {
    id: '7',
    title: '[07] Workflow Lắng Nghe Sâu (Deep Listening) Trong Xung Đột',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Giao tiếp • Thực hành',
    readTime: '18 Phút đọc',
    excerpt: 'Biến kỹ năng lắng nghe trừu tượng thành một quy trình Workflow 4 trạm dễ dàng áp dụng ngay cả khi đang tức giận...',
    bannerGradient: 'from-brand-blue to-[#116a82]',
    content: {
      intro: 'Khi xung đột xảy ra, con người có xu hướng "nghe để đáp trả" thay vì "nghe để thấu hiểu". Workflow lắng nghe sâu (dựa trên Nonviolent Communication) tạo ra một khoảng không gian trễ ảo, giúp bạn không bị điều khiển bởi bản năng tấn công.',
      steps: [
        { num: 1, title: 'Trạm 1: Pause & Ground', desc: 'Tự động kích hoạt cơ chế hâm nóng vùng não trước (Prefrontal Cortex) bằng 1 nhịp thở sâu 4 giây trước khi phản hồi.' },
        { num: 2, title: 'Trạm 2: Tráng gương (Mirroring)', desc: 'Sử dụng hệ thống lặp lời: "Nếu tôi nghe không lầm, điều bạn đang trăn trở là [Lặp lại đúng từ khóa]... có phải không?"' },
        { num: 3, title: 'Trạm 3: Dò tìm Nhu cầu ẩn', desc: 'Mọi lời phàn nàn sâu xa đều là biểu hiện của một nhu cầu chưa được đáp ứng. Hỏi: "Điều gì quan trọng với bạn trong chuyện này?"' },
        { num: 4, title: 'Trạm 4: Validating (Công nhận)', desc: 'Xác nhận cảm xúc (không cần đồng ý hành vi): "Tôi hoàn toàn hiểu vì sao với tình huống đó, bạn lại cảm thấy tức giận/thất vọng."' },
        { num: 5, title: 'Trạm 5: Cầu nối Giải pháp', desc: 'Chỉ chuyển sang bước tìm giải pháp khi và chỉ khi đối phương đã xác nhận tín hiệu "Tôi đã được hiểu".' }
      ],
      conclusion: 'Khi bạn đóng mô-đun "Bảo vệ cái tôi" và chạy mô-đun "Thấu cảm hệ thống", phần lớn các cuộc cãi vã biến thành những buổi gỡ rối mang tính xây dựng tuyệt đối.'
    }
  },
  {
    id: '8',
    title: '[08] Cấu Trúc Hóa Nỗi Buồn: Liệu Pháp Chấp Nhận & Cam Kết (ACT)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Hệ thống Quản trị • Sơ đồ',
    readTime: '22 Phút đọc',
    excerpt: 'Đừng cố xua đuổi nỗi đau. Hãy đặt nó vào một cấu trúc giá trị cốt lõi để tiếp tục hành động có ý nghĩa...',
    bannerGradient: 'from-brand-orange to-[#d47400]',
    content: {
      intro: 'Liệu pháp ACT (Acceptance and Commitment Therapy) cho rằng đau khổ là một phần mặc định của "hệ điều hành" con người. Vấn đề không phải là xóa file "nỗi buồn.exe", mà là cách ta phân bổ dung lượng RAM để không bị crash toàn bộ hệ thống sống.',
      steps: [
        { num: 1, title: 'Defusion (Tách rời rốt ráo)', desc: 'Tách ý nghĩ ra khỏi thực tại. "Tôi TÀN TẠ" chuyển thành "Tôi ĐANG CÓ SUY NGHĨ RẰNG tôi tàn tạ."' },
        { num: 2, title: 'Mở rộng không gian chứa (Expansion)', desc: 'Tưởng tượng nội tâm bạn là một căn phòng. Nỗi buồn là bộ sô-pha. Xây căn phòng rộng hơn thay vì vứt bỏ sô-pha đi.' },
        { num: 3, title: 'Kết nối hiện tại (Contact with Present)', desc: 'Neo đậu tâm trí vào task vật lý đang thực hiện: Rửa bát cảm nhận làn nước, đi bộ cảm nhận gót chân tiếp đất.' },
        { num: 4, title: 'Xác định Giá trị cốt lõi (Values)', desc: 'Vẽ la bàn giá trị: Trong công việc, tình yêu, sức khỏe, bản chất tận cùng bạn muốn trở thành người như thế nào?' },
        { num: 5, title: 'Hành động cam kết (Committed Action)', desc: 'Thiết kế 1 hành động SIÊU NHỎ khớp với Giá trị ở bước 4, MẶC KỆ sự tồn tại của sô-pha (nỗi buồn) ở bước 2.' }
      ],
      conclusion: 'Khi hệ thống ACT được lắp đặt, bạn sở hữu khả năng "ôm trọn đau thương" trong một tay, trong khi tay kia vẫn tiếp tục xây dựng sự nghiệp và những kết nối ý nghĩa.'
    }
  }
];

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
      <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium mb-8">
        {article.content.intro}
      </p>

      {/* Sơ đồ hóa Framework */}
      <ProcessFramework steps={article.content.steps || []} />

      <h3 className="text-xl font-bold text-text-dark mt-10 mb-4 flex items-center gap-2">
        <CheckCircle2 size={24} className="text-brand-orange" />
        Kết Luận & Đo Lường
      </h3>
      <p className="text-base text-slate-600 leading-relaxed">
        {article.content.conclusion}
      </p>
      
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
        setArticles([]); // Clear articles on logout
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  // Fetch Articles
  useEffect(() => {
    if (!user) return;
    
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

  // Login Screen (If not authenticated)
  if (!user && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-blue/5">
         <div className="glass-panel p-10 rounded-3xl max-w-md w-full flex flex-col items-center shadow-xl text-center border-white/50">
            <div className="font-extrabold text-3xl font-sans tracking-tight text-brand-blue border-l-4 border-brand-orange pl-4 mb-8 uppercase flex flex-col items-start">
              <span>Mind Sync</span>
              <span className="text-brand-orange -mt-1 text-left">Pro.</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-700 mb-6">Đăng nhập để vào không gian làm việc</h2>
            <button 
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white text-slate-800 font-semibold py-3 px-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Cấp quyền đăng nhập (Google)
            </button>
         </div>
      </div>
    );
  }

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
           <div onClick={logout} className="cursor-pointer px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
              <LogOut size={16} /> Đăng xuất
           </div>
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
