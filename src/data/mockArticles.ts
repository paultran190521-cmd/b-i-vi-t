import { Article } from './types';
import { thinkingArticles } from './articlesThinking';
import { schoolArticles } from './articlesSchool';
import { relationshipArticles } from './articlesRelationships';
import { hrArticles } from './articlesHR';

export type { Article, Step } from './types';

// The existing 10 articles for 'Quản Trị Cảm Xúc'
const emotionArticles: Article[] = [
  // --- 10 BÀI VIẾT QUẢN TRỊ CẢM XÚC CHUYÊN SÂU ---
  {
    id: '101',
    title: '[01] Hệ Thống Phanh Khẩn Cấp (TIPP): Dung Nạp Khủng Hoảng Từ DBT',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Dung nạp khủng hoảng • Trị liệu hành vi biện chứng (DBT)',
    readTime: '15 Phút đọc',
    excerpt: 'Khi cảm xúc vượt ngưỡng 80/100, các phương pháp trò chuyện đều vô dụng. TIPP là công cụ sinh lý ép hệ thần kinh phải hạ nhiệt ngay lập tức.',
    bannerGradient: 'from-brand-blue to-[#0f4b5e]',
    content: {
      intro: 'Khi đối mặt với cơn hoảng loạn tột độ, não tủy (phần não bò sát) đã chiếm quyền điều khiển. Khung TIPP thuộc liệu pháp DBT (Dialectical Behavior Therapy) không cố thay đổi suy nghĩ, mà can thiệp trực tiếp vào nhiệt độ và nhịp tim để "cầu dao" lại hệ thống.',
      steps: [
        { num: 1, title: 'Temperature (Thay đổi nhiệt độ)', desc: 'Ngâm mặt vào nước lạnh hoặc áp đá lạnh vào dưới mắt/má trong 30-60 giây. Thao tác này kích hoạt "Phản xạ lặn của thú biển" (Mammalian Dive Reflex), ép nhịp tim giảm tự động.' },
        { num: 2, title: 'Intense Exercise (Vận động cường độ cao)', desc: 'Thực hiện động tác Jumping Jacks hoặc chạy nâng cao đùi trong 20 phút. Cách này giúp xả lượng dư thừa Adrenaline và Cortisol tắc nghẽn trong cơ bắp.' },
        { num: 3, title: 'Paced Breathing (Hô hấp nhịp độ)', desc: 'Thở ra chậm hơn hít vào. Ví dụ: Hít vào 5 giây, thở ra 7 giây. Việc này kích thích dây thần kinh phế vị (Vagus Nerve) gửi tín hiệu an toàn lên não.' },
        { num: 4, title: 'Paired Muscle Relaxation (Giãn cơ ghép đôi)', desc: 'Gồng chặt toàn bộ một nhóm cơ (ví dụ như nắm chặt tay) trong 5 giây, rồi buông thõng đột ngột kết hợp thở ra và tự nhủ "Thả lỏng".' },
        { num: 5, title: 'Đánh giá lại (SUDs Check)', desc: 'Sử dụng thang đo Subjective Units of Distress (0-100). Đánh giá lại mức độ hoảng loạn sau 1 vòng TIPP. Nếu còn trên 70, lặp lại bước 1.' }
      ],
      conclusion: 'TIPP không giải quyết vấn đề gốc rễ, nhưng nó cung cấp chức năng "Freeze System" kịp thời để ngăn bạn khỏi những quyết định có tính tàn phá khi đang mất kiểm soát.'
    }
  },
  {
    id: '102',
    title: '[02] Hệ Điều Hành Polyvagal: Chuyển Trạng Thái Sinh Tồn Sang Kết Nối',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Hệ thống sinh lý học • Thuyết thần kinh phế vị',
    readTime: '18 Phút đọc',
    excerpt: 'Nhận diện và phân loại trạng thái an toàn của hệ thần kinh, thoát khỏi trạng thái "Đóng băng" (Dorsal Shutdown) bảo vệ sai cách.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: 'Thuyết Polyvagal (Stephen Porges) chia hệ thần kinh thành 3 tiểu hệ thống. Để quản trị cảm xúc, ta cần thiết kế "bảng điều khiển" theo dõi và dịch chuyển cơ thể từ trạng thái Báo động trở về trạng thái Kết nối an toàn (Ventral Vagal).',
      steps: [
        { num: 1, title: 'Mapping Trạng thái Sinh tồn', desc: 'Sơ đồ hóa 3 vùng: Đỉnh đồi (Sympathetic - Chiến đấu/Bỏ chạy), Dưới đáy (Dorsal Vagal - Tê liệt), và Đồng cỏ xanh (Ventral Vagal - An toàn/Kết nối).' },
        { num: 2, title: 'Bắt tín hiệu trượt (Slipping signs)', desc: 'Lập danh sách các tín hiệu sinh lý báo hiệu bạn đang trượt khỏi "Cửa sổ dung nạp" (Window of Tolerance), ví dụ: giọng nói cao lên, thở nông, mất giao tiếp bằng mắt.' },
        { num: 3, title: 'Kích hoạt Phanh phế vị (Vagal Brake)', desc: 'Khi đang ở Đỉnh đồi (Cáu gắt), sử dụng thở dài, rung thanh quản (ngâm nga âm "Voo") để kéo "thắng" nhịp tim.' },
        { num: 4, title: 'Vi-kết-nối (Micro-Connection)', desc: 'Khi ở dưới Đáy (Trầm cảm, tê liệt), đừng ép bản thân nói chuyện. Hãy kết nối vi mô: vuốt ve thú cưng, nhìn vào mắt một người an toàn, cuộn trong chăn ấm.' },
        { num: 5, title: 'Neo giữ trạng thái Ventral', desc: 'Cuối ngày, ghi lại 3 khoảnh khắc bạn cảm thấy "có mặt và an toàn" để mở rộng dung lượng của trạng thái Ventral Vagal.' }
      ],
      conclusion: 'Cảm xúc không phải là lỗi tư duy, mà là phản ứng sinh học của sự bảo vệ. Hiểu được Polyvagal là làm chủ được "công tắc" hệ thần kinh thay vì trở thành nạn nhân của nó.'
    }
  },
  {
    id: '103',
    title: '[03] Sơ Đồ IFS: Hội Đồng Quản Trị Của Các Tiền Vệ Nội Tâm',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Phân tích nhân cách phụ • Internal Family Systems',
    readTime: '22 Phút đọc',
    excerpt: 'Không có cảm xúc nào là "xấu". Xây dựng Dashboard theo dõi các Mảnh ghép nội tâm để thương lượng với "Kẻ Chỉ Trích" trong bạn.',
    bannerGradient: 'from-brand-blue to-[#1e586b]',
    content: {
      intro: 'Trị liệu Hệ Thống Gia Đình Nội Tâm (IFS - Richard Schwartz) coi tâm lý con người như một tổ chức với nhiều nhân cách phụ (Parts). Có Part đóng vai trò Quản lý (Manager), có Part là Lính Cứu Hỏa (Firefighter). Dùng tư duy hệ thống để tổ chức cuộc họp với nội tâm thay vì đàn áp chúng.',
      steps: [
        { num: 1, title: 'Nhận diện (Identify the Part)', desc: 'Gọi tên cảm xúc độc hại dưới dạng một nhân vật. Ví dụ: "Kẻ Đốc Thúc", "Đứa Trẻ Sợ Bị Bỏ Rơi", "Gã Tê Liệt".' },
        { num: 2, title: 'Phi-hòa-tan (Unblending)', desc: 'Lùi lại một bước. Thay vì nói "Tôi đang tuyệt vọng", hãy thiết lập cữ ly: "Một phần trong tôi đang cảm thấy tuyệt vọng". Bạn là Bầu Trời, chúng là Thời Tiết.' },
        { num: 3, title: 'Phỏng vấn vai trò (Interviewing)', desc: 'Giao tiếp với Kẻ Chỉ Trích: "Bạn đang cố gắng bảo vệ tôi khỏi rủi ro gì bằng cách liên tục dèm pha tôi?". Tìm hiểu sứ mệnh tích cực ẩn sâu của nó.' },
        { num: 4, title: 'Truy cập Tự Ngã Cốt Lõi (The Self)', desc: 'Bật chế độ "The Self" với 8 chữ C: Curios (Tò mò), Compassion (Trắc ẩn), Calm (Điềm tĩnh), Confident (Tự tin)... để đóng vai trò CEO điều phối.' },
        { num: 5, title: 'Tích hợp & Phân công lại', desc: 'Thỏa thuận lại vai trò. Ví dụ: Nhờ "Kẻ Kén Chọn" chuyển từ việc chửi bới sang làm cố vấn rủi ro (Risk Manager) cho các dự án.' }
      ],
      conclusion: 'Hệ thống IFS biến những cuộc nội chiến cảm xúc thành sự hợp tác đa chức năng. Không tiêu diệt phần nào, chỉ sắp xếp lại vị trí cho đúng.'
    }
  },
  {
    id: '104',
    title: '[04] Ma Trận Ranh Giới: Hệ Miễn Dịch Cho Người Nhạy Cảm (HSP)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Ranh giới • High Sensitivity',
    readTime: '17 Phút đọc',
    excerpt: 'Hệ thống hóa giới hạn cá nhân bằng kịch bản giao tiếp chuẩn để không bị hút cạn năng lượng bởi cảm xúc của người khác.',
    bannerGradient: 'from-brand-orange to-[#cc5e00]',
    content: {
      intro: 'Người có độ nhạy cảm cao (HSP - Highly Sensitive Person) thường có Ranh Giới Thẩm Thấu (Porous boundaries), dễ bị lây nhiễm hoảng loạn của người xung quanh. Ma trận Ranh Giới là một lớp màn lọc bảo vệ năng lượng hệ thống.',
      steps: [
        { num: 1, title: 'Audit Cáp Năng Lượng (Energy Audit)', desc: 'Lập biểu đồ Venn xem thời gian/cảm xúc nào đang bị rò rỉ cho những người nằm ngoài Vòng tròn Kích hoạt Giá trị của bạn.' },
        { num: 2, title: 'Thiết lập Cấp Độ Ranh Giới', desc: 'Sơ đồ hóa Ranh giới Vững chắc (Hard), Linh hoạt (Flexible), Xốp (Porous). Chỉ định rõ ai được phép vào cấp độ nào.' },
        { num: 3, title: 'Tạo Kịch Bản Chuẩn (Standard Scripts)', desc: 'Xây dựng template phản hồi tự động. Ví dụ: "Mình rất muốn lắng nghe cậu, nhưng hiện tại mình đang cạn năng lượng, mình hẹn mai được không?".' },
        { num: 4, title: 'Bóc tách Cảm xúc (Decoupling)', desc: 'Khi đối phương tức giận do bị từ chối, áp dụng quy tắc 50/50: Nửa nguyên nhân do bạn từ chối, nửa nguyên nhân do cơ chế quản trị cảm xúc kém của họ. Bạn chỉ chịu trách nhiệm nửa của mình.' },
        { num: 5, title: 'Quy trình Detox Phản ứng', desc: 'Ngay sau một cuộc đối thoại khó khăn, dành 10 phút xả "rác" cảm xúc hấp thụ thụ động (bằng cách tắm nước nóng, sục tay vào băng).' }
      ],
      conclusion: 'Sở hữu ranh giới rõ ràng không làm bạn trở nên ích kỷ, mà thiết lập một giao thức an toàn để bạn có thể tiếp tục giúp đỡ người khác lâu dài mà không bị hao mòn.'
    }
  },
  {
    id: '105',
    title: '[05] Sơ Đồ Điểm Lựa Chọn (Choice Point) Từ Trị Liệu ACT',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Ra quyết định • Acceptance & Commitment',
    readTime: '19 Phút đọc',
    excerpt: 'Ngắt đứt liên kết tự động giữa Cảm Xúc Tồi Tệ và Hành Vi Phá Hoại bằng việc thiết lập màng lọc điểm rẽ (Choice Point).',
    bannerGradient: 'from-brand-blue to-[#186a82]',
    content: {
      intro: 'Ứng dụng Liệu pháp Chấp nhận và Cam kết (ACT), The Choice Point Sơ đồ hóa khoảnh khắc bạn bị kịch phát cảm xúc. Nó ép bạn dừng lại để đánh giá xem hành động tiếp theo sẽ đưa bạn GẦN HƠN hay XA HƠN giá trị sống.',
      steps: [
        { num: 1, title: 'Nhận diện Điểm Rẽ (The Choice Point)', desc: 'Khoảnh khắc một sự kiện kích hoạt (Trigger) xuất hiện (VD: Bị sếp mắng). Bạn phải vẽ một đường nét đứt biểu thị sự lùi lại.' },
        { num: 2, title: 'Nhận diện Cái Móc Câu (The Hooks)', desc: 'Liệt kê các suy nghĩ và cảm xúc tiêu cực đang xuất hiện. Chúng là các "Móc Câu" đang cố kéo bạn khỏi đường đua.' },
        { num: 3, title: 'Sổ tay Away Moves (Hành vi đi xa)', desc: 'Nếu bạn cắn câu, điều gì sẽ xảy ra? (VD: Cãi lại, ăn uống vô độ, thu mình). Đây là các hành động đi NGƯỢC với hệ giá trị cốt lõi.' },
        { num: 4, title: 'Sổ tay Toward Moves (Hành vi tiến tới)', desc: 'Nếu bạn tháo móc câu theo hướng hệ giá trị bản thân (VD: Tôn trọng người khác, kỷ luật), bạn sẽ làm gì? (VD: Hít thở sâu, ghi nhận feedback, phân tích lỗi).' },
        { num: 5, title: 'Unchaining (Rút lưỡi câu)', desc: 'Sử dụng kỹ thuật Defusion (Phân ly nhận thức), tước bỏ sức mạnh của cảm xúc và chọn bước đi "Toward Move" một cách có ý thức.' }
      ],
      conclusion: 'Khung điểm lựa chọn biến cảm xúc từ những kẻ ra lệnh độc tài thành những biến số thông tin bình thường mà hệ thống của bạn hoàn toàn có thể ghi đè (override) được.'
    }
  },
  {
    id: '106',
    title: '[06] Trình Theo Dõi Kháng Cự (Resistance/Procrastination Tracker)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Sự trì hoãn • Neuro-psychology',
    readTime: '21 Phút đọc',
    excerpt: 'Sự trì hoãn không đến từ việc lười quản lý thời gian, nó là cơ chế trốn tránh cảm xúc khó chịu. Hệ thống đo lường sức đề kháng tâm lý.',
    bannerGradient: 'from-brand-orange to-[#b35300]',
    content: {
      intro: 'Nghiên cứu khoa học vạch trần: Chúng ta trì hoãn một việc thường vì ta sợ mình làm không đủ tốt, sợ cảm giác chán nản, hoặc bế tắc. Thay vì ép bản thân làm việc, ta cần đưa rào cản cảm xúc lên thớt để phân tách.',
      steps: [
        { num: 1, title: 'Phân tách Task khỏi Cảm Xúc', desc: 'Vẽ 2 cột. Cột A: Tên Task (VD: Làm báo cáo). Cột B: Cảm xúc gắn kèm (VD: Sợ bị sếp chê, cảm thấy ngu ngốc khi nhìn số liệu).' },
        { num: 2, title: 'Chấm điểm Độ Kháng (Resistance Score)', desc: 'Sử dụng thang 1-10 để đo lường mức độ kháng lại công việc đó. Nếu điểm >7, Task đang bị thiết lập cỡ quá to.' },
        { num: 3, title: 'Phân Rã Thành Vi Phân (Micro-Step)', desc: 'Băm task đó xuống mức độ làm trong 5 phút để lách qua hệ thống phòng vệ Amygdala. Yêu cầu: Vi-task không được gây ra cảm xúc tiêu cực.' },
        { num: 4, title: 'Thỏa thuận Phút Thứ 5', desc: 'Ký bảng cam kết với nội tâm: "Mình chỉ làm đúng 5 phút. Nếu sau 5 phút cảm xúc vẫn quá tồi tệ, mình được quyền nghỉ lập tức không tội lỗi."' },
        { num: 5, title: 'Đòn bẩy Dopamine (Zeigarnik Effect)', desc: 'Một khi đã bắt đầu 5 phút, hiệu ứng Zeigarnik (Căng thẳng khi làm điều dang dở) sẽ kéo cảm hứng của bạn chạy tiếp thay vì dừng lại.' }
      ],
      conclusion: 'Hack được cơ chế trì hoãn chính là loại bỏ đi mấu nối cảm xúc độc hại đính kèm trên công việc. Đừng quản lý chiếc đồng hồ, hãy quản lý sự phản kháng.'
    }
  },
  {
    id: '107',
    title: '[07] Bảng Điều Khiển Hóa Chất Não Bộ (Neurochemical Dashboard)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Khoa học thần kinh • D.O.S.E Hacking',
    readTime: '16 Phút đọc',
    excerpt: 'Biến cơ thể thành một nhà máy sản xuất hạnh phúc. Cách thiết lập các micro-habit để chiết xuất hóa chất chống trầm cảm tự nhiên.',
    bannerGradient: 'from-brand-blue to-[#005e73]',
    content: {
      intro: '4 hợp chất chi phối toàn bộ tâm trạng của bạn: Dopamine (Phần thưởng), Oxytocin (Kết nối), Serotonin (Trạng thái/Tôn trọng), Endorphin (Che lấp nỗi đau). Dashboard này hướng dẫn chủ động "hack" chúng.',
      steps: [
        { num: 1, title: 'Chuẩn đoán Thâm Hụt', desc: 'Có đánh giá nhanh để xem bạn đang thiếu gì: Mất động lực (Dopamine), Thấy cô đơn (Oxytocin), Cảm giác vô giá trị (Serotonin), Thường xuyên đau mỏi/stress (Endorphin).' },
        { num: 2, title: 'Dopamine Checkbox System', desc: 'Tách mục tiêu lớn thành các checkbox siêu nhỏ. Mỗi lần tích V hoàn thành, não sẽ bơm 1 shot Dopamine để đẩy bạn tiến lên.' },
        { num: 3, title: 'Giao thức Oxytocin', desc: 'Thay vì chờ đợi tình yêu, tạo oxytocin từ những điều nhỏ: Chơi với thú cưng 10 phút, ôm người thân đủ 20 giây (ngưỡng tối thiểu tiết oxytocin), massage vai gáy.' },
        { num: 4, title: 'Trạm Sạc Serotonin', desc: 'Bắt buộc tiếp xúc trực tiếp với ánh nắng ban mai trước 9h sáng trong 15 phút. Luân phiên việc công nhận thành tựu và nhớ lại chiến thắng bản thân trong sổ tay.' },
        { num: 5, title: 'Bộ xả Endorphin', desc: 'Thiết lập nút xả (flush) khi stress lập đỉnh: Xem 1 đoạn hài độc thoại ngắn (Cười lớn), Ăn chocolate đen hoặc 5 phút tập cardio ngắt quãng.' }
      ],
      conclusion: 'Nắm được bảng điều khiển sinh hóa, bạn ngưng đổ lỗi cho các yếu tố ngoại cảnh. Cảm xúc giờ đây là một bộ phương trình bạn có thể thiết lập hàng ngày.'
    }
  },
  {
    id: '108',
    title: '[08] Bản Đồ Sinh Lý (Somatic Mapping): Detox Lưu Trữ Cảm Xúc Bị Kẹt',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Trị liệu Soma • Trauma Release',
    readTime: '20 Phút đọc',
    excerpt: '"Cơ thể ghi nhớ mọi thứ". Thay vì cố phân tích nguồn gốc nỗi đau bằng lý trí, hãy dùng hệ thống dò quét vi mô để xả stress bị khóa chặt trong cơ bắp.',
    bannerGradient: 'from-brand-orange to-[#e66a00]',
    content: {
      intro: 'Nhà tâm lý học Bessel van der Kolk đã chỉ ra: Chấn thương không nằm ở sự kiện, mà nằm ở hệ thần kinh. Phương pháp Somatic Experiencing không yêu cầu bạn "kể lại" câu chuyện gây đau đớn, mà truy tìm trạng thái tắc nghẽn bên trong.',
      steps: [
        { num: 1, title: 'Chế độ Dò Quét (Body Scan)', desc: 'Nhắm mắt và rà soát các vùng chật chội: Quai hàm căng? Tức ngực? Dạ dày co thắt? Cung cấp tọa độ vật lý cho cảm xúc.' },
        { num: 2, title: 'Đóng gói Đặc tả (Texturing)', desc: 'Trao cho vùng tắc nghẽn đó hình dạng: Nó nóng hay lạnh? Nặng như sắt hay râm ran như kiến bò? Màu gì? Kích thước bao nhiêu?' },
        { num: 3, title: 'Lắc Con Lắc (Pendulation)', desc: 'Chuyển đổi luân phiên sự chú ý (attention). 1 phút tập trung vào vùng đau/căng cứng, sau đó chuyển chú ý sang vùng an toàn nhất (ví dụ: ngón chân áp đất) trong 1 phút.' },
        { num: 4, title: 'Tiếp Dần Từng Giọt (Titration)', desc: 'Không xử lý khối cảm xúc cùng một lúc. Giống như pha loãng thuốc, ta chỉ chạm vào cảm giác đó một chút rồi rút ra để hệ thần kinh không bị quá tải.' },
        { num: 5, title: 'Xả Năng Lượng (Discharging)', desc: 'Cho phép cơ thể hoàn tất chu trình hành động bị đóng băng: Run rẩy vi mô, thở dài mạnh, vươn tay hoặc tạo ra những chuyển động tự nguyện nhỏ.' }
      ],
      conclusion: 'Đừng giải quyết các cơn cuồng nộ hay lo âu bằng đầu óc. Hãy cho phép cơ thể lên tiếng và tìm lại cân bằng (Homeostasis) thông qua bản đồ vận động nội tại.'
    }
  },
  {
    id: '109',
    title: '[09] Gỡ Lỗi Niềm Tin Cốt Lõi Qua Framework ABCDE (REBT)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Nhận thức hành vi cảm xúc • Lập trình tư duy',
    readTime: '24 Phút đọc',
    excerpt: 'Hệ thống hóa thuật toán tâm lý REBT của Albert Ellis để tranh biện và đập tan những niềm tin sai lệch tự động gây ra thống khổ.',
    bannerGradient: 'from-brand-blue to-[#0e5c6b]',
    content: {
      intro: 'Không phải sự kiện, mà chính NIỀM TIN của chúng ta về sự kiện mới gây ra đau khổ (Trích triết học gia Epictetus). Albert Ellis cấu trúc lại mô thức này thành toán học với thuật toán ABCDE vô cùng chặt chẽ.',
      steps: [
        { num: 1, title: 'A – Activating Event (Sự kiện)', desc: 'Ghi lại dữ liệu thô (Input). VD: "Trình diễn bài thuyết trình và CEO chau mày". Tuyệt đối không phán xét ở bước A.' },
        { num: 2, title: 'C – Consequence (Hậu quả)', desc: 'Sự kiện sinh ra C (Cảm xúc & Hành vi). Cảm thấy nhục nhã tột độ (Cảm xúc), nói vấp và rụt rè (Hành vi).' },
        { num: 3, title: 'B – Belief System (Thuật toán bị lỗi)', desc: 'Truy cứu B (Niềm tin đứng giữa A và C). VD: "Nếu CEO chau mày, nghĩa là mình vô dụng và mình sắp bị đuổi việc tới nơi".' },
        { num: 4, title: 'D – Disputing (Vòng tranh biện logic)', desc: 'Mở cửa sổ "Debug". Đặt câu hỏi phản tố: Đâu là bằng chứng cho B? Liệu CEO chau mày vì chuyện khác? Suy nghĩ cực đoan đem lại lợi ích gì không?' },
        { num: 5, title: 'E – Effective New Belief (Deploy Bản cập nhật)', desc: 'Cài đặt niềm tin mới hợp lý hơn. VD: "Có thể bài thuyết trình còn điểm yếu, nhưng nó không định nghĩa nhân cách mình. Chau mày là bình thường."' }
      ],
      conclusion: 'Khi thực hiện Framework ABCDE liên tục, bộ não sẽ hình thành các rãnh neuron thần kinh tự động bẻ gãy sự cực đoan trước khi nó kịp kích hoạt hormone stress.'
    }
  },
  {
    id: '110',
    title: '[10] Kiến Trúc Hóa Nỗi Đau: Mô Hình Kép Khắc Phục Mất Mát',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Tâm lý thương tiếc • Khung thời gian',
    readTime: '18 Phút đọc',
    excerpt: 'Nỗi đau mất mát (Grief) không đi theo đường thẳng 5 giai đoạn như ta nghĩ. Nó phải là sự luân phiên lốc xoáy giữa đối mặt và tạm gác lại.',
    bannerGradient: 'from-brand-orange to-[#b35d00]',
    content: {
      intro: 'Quản trị nỗi đau không có nghĩa là loại bỏ nó đi nhanh chóng. Mô hình Quy trình Kép (Dual Process Model of Coping) của Stroebe và Schut chỉ ra quá trình chữa lành đòi hỏi sự dao động qua lại có hệ thống giữa sự mất mát và việc phục hồi cuộc sống.',
      steps: [
        { num: 1, title: 'Phân Vùng 1: Loss-Oriented (Hướng Mất Mát)', desc: 'Cấp phép cho bản thân khóc, tưởng nhớ, xem lại ảnh cũ, và đối diện hoàn toàn với sự thật tổn thương. Không che giấu.' },
        { num: 2, title: 'Phân Vùng 2: Restoration-Oriented (Hướng Phục Hồi)', desc: 'Xây dựng lại những bản sắc mới độc lập. Bắt đầu làm task công việc mới, gặp một nhóm cộng đồng mới, thiết lập thói quen xa lạ.' },
        { num: 3, title: 'Timeboxing Đau Buồn (Hẹn giờ Grief)', desc: 'Thiết kế hệ thống: Cài đặt 30 phút buổi tối để chìm ngập hoàn toàn vào Vùng 1. Hết 30 phút, áp dụng chu trình khởi động đóng gói Vùng 1 để chuyển sang các Task sinh hoạt khác.' },
        { num: 4, title: 'Oscillation (Lập trình dao động)', desc: 'Nhà trị liệu sẽ giám sát sự dao động này. Nếu bạn chỉ ở Vùng 1 (Đình trệ) hoặc chỉ ở Vùng 2 (Né tránh chối bỏ), hệ thống sẽ gởi cảnh báo để bạn cố ý đảo chiều.' },
        { num: 5, title: 'Neo Giữ Ý Nghĩa (Meaning Making)', desc: 'Đưa di sản của nỗi đau vào xây dựng một giá trị cốt lõi mới cho cuộc đời tiếp theo thông qua việc giúp đỡ người khác.' }
      ],
      conclusion: 'Nỗi buồn không có deadline. Nhưng việc phân vùng và thiết lập sự dao động tạo ra "van xả áp suất" an toàn, đảm bảo bạn vừa ôm trọn được quá khứ, vừa kiến tạo được tương lai.'
    }
  },

  // --- CÁC BÀI GỐC KHÁC ĐỂ TRÁNH TRỐNG DANH MỤC ---
  {
    id: '0',
    title: 'Khung Quản Trị Cảm Xúc Hệ Thống: Kết Hợp CBT & Kanban',
    category: 'Khuyến Nghị Nổi Bật',
    metaInfo: 'Hệ thống Quản trị • Nâng cao',
    readTime: '20 Phút đọc',
    excerpt: 'Phương pháp trực quan hóa luồng cảm xúc kết hợp liệu pháp nhận thức giúp quản trị năng lượng thay vì bị thống trị.',
    bannerGradient: 'from-brand-blue to-[#116a82]',
    content: {
      intro: 'Sự kết hợp giữa CBT (Nhận thức hành vi) và Kanban tạo ra một hệ thống theo dõi và giải quyết cảm xúc vô hình thành các tác vụ cụ thể.',
      steps: [
        { num: 1, title: 'To-Do Cảm Xúc', desc: 'Đưa trạng thái cảm xúc vào cột "To-Do". Nhận diện sinh lý cơ thể.' },
        { num: 2, title: 'In Progress (Bắt mạch)', desc: 'Viết ra suy nghĩ tự động (Automatic Thoughts) mà không phán xét.' },
        { num: 3, title: 'Review (Tái cấu trúc)', desc: 'Sử dụng khung logic bẻ gãy lập luận tiêu cực.' },
        { num: 4, title: 'Actionable Matrix', desc: 'Gắn nhãn: Việc ngoài tầm kiểm soát hay trong tầm kiểm soát?' },
        { num: 5, title: 'Done (Lưu trữ)', desc: 'Đúc kết bài học về vùng nhận thức an toàn của bản thân.' }
      ],
      conclusion: 'Kỷ luật của Kanban khi áp dụng vào CBT tạo ra sự liền mạch, chống lại sự quá tải khi đối diện với các vòng lặp tiêu cực.'
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
    id: '6',
    title: '[06] Ma Trận Năng Lượng (Energy Matrix) Dành Cho HR',
    category: 'Quản Trị Nhân Sự',
    metaInfo: 'Quản trị nhân sự • Burnout Prevention',
    readTime: '25 Phút đọc',
    excerpt: 'Quản lý thời gian đã lỗi thời, thời đại mới cần hệ thống quản lý năng lượng để ngăn chặn Team Burnout triệt để...',
    bannerGradient: 'from-brand-blue to-[#116a82]',
    content: {
      intro: 'Nhiều nhân sự nghỉ việc ở đỉnh cao sự nghiệp không phải vì cạn kiệt thời gian, mà vì cạn kiệt dải năng lượng phục hồi. Khung "Energy Matrix" giúp HR phân bổ công việc dựa trên năng lực phục hồi sinh lý và tâm lý.',
      steps: [
        { num: 1, title: 'Check-in Năng Lượng', desc: 'Bắt đầu tuần mới bằng form Check-in: Phân loại nhân sự vào 4 vùng sinh lý.' },
        { num: 2, title: 'Phân loại Task', desc: 'Task không chỉ có tính cấp bách, mà phải có nhãn "Tiêu hao" hay "Tái tạo" năng lượng.' },
        { num: 3, title: 'Thiết kế Trạm sạc', desc: 'Cài đặt các vi-tập (micro-breaks) 90/20 vòng lặp hồi phục.' },
        { num: 4, title: 'Bản đồ Burnout (Heatmap)', desc: 'Trực quan hóa những điểm nghẽn (bottleneck) trong quy trình.' },
        { num: 5, title: 'Feedback Loop 360 độ', desc: 'Thẩm định lại mức độ hiệu quả bằng các buổi trao đổi về sức khỏe tinh thần.' }
      ],
      conclusion: 'Tối ưu hóa nguồn nhân lực không phải là vắt kiệt họ trong 8 tiếng, mà là xây dựng một hệ thống sinh thái giúp họ liên tục nạp xả nhịp nhàng mà không bị sập nguồn.'
    }
  }
];

export const MOCK_ARTICLES: Article[] = [
  ...emotionArticles,
  ...thinkingArticles,
  ...schoolArticles,
  ...relationshipArticles,
  ...hrArticles
];
