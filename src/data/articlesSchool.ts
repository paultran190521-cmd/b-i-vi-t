import { Article } from './types';

export const schoolArticles: Article[] = [
  {
    id: '301',
    title: '[01] Sơ Đồ Hệ Sinh Thái Lớp Học: Phân Tích Động Lực (Classroom Ecosystem)',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Quản trị nhóm • Mô hình sinh thái',
    readTime: '22 Phút đọc',
    excerpt: 'Lớp học không phải là tập hợp học sinh rời rạc, mà là một hệ thống mạng nhện. Thay đổi một mắt xích sẽ kéo sự thay đổi toàn cục.',
    bannerGradient: 'from-brand-orange to-[#b35300]',
    content: {
      intro: 'Tư duy tuyến tính trong giáo dục: "Học sinh A quậy phá -> Xử phạt A". Tư duy Hệ thống: Học sinh A là triệu chứng báo hiệu sự gãy đổ của Sơ Đồ Tiếng Nói (Voice Mapping) hoặc Sơ Đồ Phân Quyền trong lớp học.',
      steps: [
        { num: 1, title: 'Vẽ Lưới Quan Hệ Xã Hội (Sociogram)', desc: 'Xác định các "Hub" (học sinh có tầm ảnh hưởng lớn) và các "Isolate" (học sinh đứng ngoài rìa). Giáo viên cần điều hướng sức mạnh của Hub thay vì đối đầu.' },
        { num: 2, title: 'Đánh Giá Động Lực Vô Hình (Hidden Dynamics)', desc: 'Những luồng năng lượng ngầm (bắt nạt lạnh, quyền lực nhóm hẹp). Bóc tách luật chơi thực sự đang điều hành lớp đằng sau nội quy của nhà trường.' },
        { num: 3, title: 'Thiết Lập Chốt Chặn Tâm Lý (Anchors)', desc: 'Định vị một vài thói quen hệ thống (ví dụ: vòng tròn chia sẻ 5 phút đầu giờ) để kéo năng lượng phi hướng tâm về lại trọng tâm an toàn chung.' },
        { num: 4, title: 'Phân Tán Căng Thẳng Nội Tại', desc: 'Sắp xếp chỗ ngồi theo nguyên lý tản nhiệt. Tránh để các cụm điện tích cùng dấu (các bạn hay kích động) ở cạnh nhau tạo ra đám cháy dây chuyền.' },
        { num: 5, title: 'Xây Dựng Văn Hóa Chữa Lành Hỗ Hỗ', desc: 'Đào tạo đội ngũ Cố Vấn Đồng Trang Lứa (Peer-counseling) để lưới an toàn giăng đều ra, không chỉ phụ thuộc độc tuyến vào giáo viên.' }
      ],
      conclusion: 'Giáo viên không phải là công an giữ trật tự. Họ là kỹ sư trưởng tinh chỉnh các dòng chảy năng lượng trong một không gian sinh thái đặc quyền sinh động.'
    }
  },
  {
    id: '302',
    title: '[02] Bảng Điểu Khiển Động Lực (SDT): Thuyết Tự Quyết Ở Trẻ',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Động lực học tập • Self-Determination Theory',
    readTime: '18 Phút đọc',
    excerpt: 'Hủy bỏ hệ thống Thưởng/Phạt bằng hệ thống Điểu Khiển Động Lực Tự Thân lõi gồm 3 nhu cầu tâm lý cơ bản.',
    bannerGradient: 'from-brand-blue to-[#0d5975]',
    content: {
      intro: 'Phần thưởng bằng điểm số (Extrinsic Motivation) phá hủy quá trình học tập sâu theo thời gian. Khung Self-Determination Theory (SDT) của Deci & Ryan kiến tạo lại cỗ máy học bằng năng lượng từ tính bên trong (Intrinsic).',
      steps: [
        { num: 1, title: 'Nhu cầu Tự Chủ (Autonomy)', desc: 'Đừng giao bài tập cứng nhắc. Hệ thống hóa bảng Menu Bài Tập: Cho phép trẻ chọn 1 trong 3 định dạng làm bài (Viết luận, Quay Video, Thiết kế slide).' },
        { num: 2, title: 'Nhu Cầu Năng Lực (Competence)', desc: 'Chia nhỏ nấc thang thử thách để trẻ đạt được Win-state liên tục (Zone of Proximal Development). Lời khen tập trung vào Hệ Thống (Nỗ lực) thay vì Tố Chất (Thông minh).' },
        { num: 3, title: 'Nhu Cầu Kết Nối (Relatedness)', desc: 'Học tập là một hành vi mang tính xã hội học. Khởi tạo quy trình Buddy (Đôi bạn cùng tiến) để sự gắng sức có nhân chứng và sự hỗ trợ cảm xúc thực.' },
        { num: 4, title: 'Tracking Động Lực Dashboard', desc: 'Xây dựng thang đo tự đánh giá theo tuần dành cho học sinh: "Mức độ thích thú của con với môn học", "Con mệt ở phần nào".' },
        { num: 5, title: 'Gỡ Bỏ Camera Giám Sát Não', desc: 'Phụ huynh dừng ngay việc đứng sau lưng kiểm tra trẻ làm bài. Sự tước đoạt Quyền riêng tư tư duy sẽ đình chỉ vĩnh viễn Nhu cầu Tự chủ.' }
      ],
      conclusion: 'Đừng hỏi "Làm sao tạo động lực cho nó?". Hãy hỏi "Hệ thống nhà trường và gia đình đang làm điều gì bóp nghẹt động lực tự nhiên của đứa trẻ?".'
    }
  },
  {
    id: '303',
    title: '[03] Ma Trận Kỷ Luật Tích Cực (Positive Discipline Matrix)',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Hành vi • Trừng phạt vs Hệ quả',
    readTime: '21 Phút đọc',
    excerpt: 'Biến sổ đầu bài thành Bảng Điều Khiển Hệ Quả Logic. Vạch ranh giới giữa kiểm soát bằng nỗi sợ và kiểm soát bằng trách nhiệm.',
    bannerGradient: 'from-brand-orange to-[#b35d00]',
    content: {
      intro: 'Trừng phạt (Ví dụ: Chép phạt 100 lần) lập trình ra một bộ não né tránh hoặc lách luật. Kỷ luật tích cực thiết lập một cấu trúc Hệ Quả Logic (Logical Consequences) ép buộc trẻ phải xử lý vấn đề nó văng ra.',
      steps: [
        { num: 1, title: 'Thỏa thuận Trước Hệ Quả', desc: 'Đầu năm học, vẽ khung ma trận Rule (Luật) x Consequences (Hệ quả). Trẻ cùng ký vào bản hiệp ước. Hành vi sai = Kích hoạt giao thức đã thống nhất.' },
        { num: 2, title: 'Quy tắc 3R (Related, Respectful, Reasonable)', desc: 'Hệ quả phải: Liên quan (Related - Vẽ bậy thì phải đi chà bàn), Tôn trọng (Không sỉ nhục công khai), Hợp lý (Thời gian phạt có giới hạn).' },
        { num: 3, title: 'Thẻ Timeout Xoay Chiều (Time-In)', desc: 'Thay vì nhốt đứa trẻ ra góc đứng một mình, thiết lập góc Yên Lặng (Calming Corner) trang bị sách, cát động lực để trẻ tự điều chỉnh hạch hạnh nhân (Amygdala).' },
        { num: 4, title: 'Focus on Solutions (Bàn Tròn Giải Pháp)', desc: 'Đổi câu hỏi: "Tại sao em làm thế?" (Gây bế tắc) thành "Bây giờ chúng ta sẽ fix chuyện này như thế nào để trả lại tính vẹn toàn cho mọi người?".' },
        { num: 5, title: 'Hoàn Trả Tư Cách (Reinstatement)', desc: 'Ngay khi trẻ dọn dẹp xong hậu quả, sổ Nam Tào lập tức đóng lại. Hồ sơ sạch. Không nhắc lại lỗi lầm cũ vào các ngày sau.' }
      ],
      conclusion: 'Một hệ thống trường học không có kỷ luật là hệ thống yếu kém. Nhưng kỷ luật dựa trên nỗi đau là một hệ thống phá hoại. Kỷ luật dựa trên sửa sai mới là giáo dục thượng tôn.'
    }
  },
  {
    id: '304',
    title: '[04] Giao Thức C.A.N: Chặn Đứng Bạo Lực Học Đường Tận Gốc',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Bắt nạt • School Violence',
    readTime: '24 Phút đọc',
    excerpt: 'Bạo lực học đường (School Bullying) là một cấu trúc tam giác tâm lý. Để khử bạo lực, ta phải chặt gãy mô hình tam giác thay vì bắt tay hòa giải rởm.',
    bannerGradient: 'from-brand-blue to-[#137a96]',
    content: {
      intro: 'Mô hình Bystander (Kẻ bàng quan) chỉ ra rằng Bắt Nạt không thể sống sót nếu không có "Sân khấu" (Sự cổ vũ hoặc sự im lặng của tập thể). Giao thức C.A.N kiến tạo một hệ sinh thái không dung thứ Bắt Nạt.',
      steps: [
        { num: 1, title: 'Sơ đồ Tam Giác Bắt Nạt', desc: 'Xác định điểm nút: Kẻ Bắt Nạt (Thiếu kỹ năng quyền lực) - Nạn Nhân (Điểm mù bảo vệ) - Đám Đông (Công cụ khuếch đại bạo lực).' },
        { num: 2, title: 'C - Create Safe Channels (Lập kênh an toàn)', desc: 'Xây dựng hộp thư tố cáo vô danh (Hộp thư mù) hoặc ứng dụng App Alert trong cụm học đường. Đảm bảo giao thức trích xuất thông tin ẩn danh 100%.' },
        { num: 3, title: 'A - Activate Bystanders (Kích hoạt người đứng xem)', desc: 'Hệ thống hóa khen thưởng hành vi anh hùng (Hero Protocol). Chuyển hóa đám đông im lặng thành rào chắn từ chối thỏa hiệp với kẻ tấn công.' },
        { num: 4, title: 'N - Non-Punitive Remediation (Chữa lành không trừng phạt)', desc: 'Đối xử với cả Kẻ Bắt Nạt như một đối tượng cần can thiệp tâm lý. Kẻ tổn thương mới muốn đi gây tổn thương. Mở khóa vòng lặp gia đình của hung thủ.' },
        { num: 5, title: 'Thiết lập Hợp Đồng Bảo Vệ Băng Chéo', desc: 'Ngay lập tức cử 2 Buddies uy tín tháp tùng nạn nhân (đảm bảo nạn nhân không bao giờ trong góc mù địa lý) cho đến khi mối đe dọa được tháo ngòi.' }
      ],
      conclusion: 'Đừng giải quyết bạo lực bằng việc bắt 2 đứa trẻ "xin lỗi và bắt tay nhau". Đó là quy trình làm gia tăng sự uất hận. Bạo lực cần được phẫu thuật cấp độ Hệ thống và Phụ huynh.'
    }
  },
  {
    id: '305',
    title: '[05] Bảng Phân Tích Chức Năng Hành Vi Khuyết Thiếu (FBA)',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Functional Behavior • Special Ed',
    readTime: '20 Phút đọc',
    excerpt: 'Sử dụng khung ABC mổ xẻ chính xác thông điệp ngầm đằng sau những hành vi nổi loạn rợn người của thanh thiếu niên.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: 'Tất cả các hành vi vô kỷ luật đều là một hình thức "Giao tiếp không lời" đang gào thét một trong 4 nhu cầu: Trốn việc, Thu hút Sự chú ý, Lấy phần thưởng vật chất, hoặc Kích thích giác quan.',
      steps: [
        { num: 1, title: 'A - Antecedent (Dữ kiện tiền đề)', desc: 'Ghi ngay lại: Ai, cái gì, ở đâu, khi nào kích hoạt hành vi đó? (Ví dụ: Cứ giáo viên Toán quay lên bảng là A lại ném giấy).' },
        { num: 2, title: 'B - Behavior (Định vị hành vi thô)', desc: 'Mô tả rõ ràng theo chuyển động vật lý, cấm dùng từ ngữ diễn dịch. Không ghi "Thằng bé hung hăng". Ghi "Cậu bé dùng tay ném ghế gỗ gãy đôi".' },
        { num: 3, title: 'C - Consequence (Hệ quả cung cấp)', desc: 'Ngay sau hành vi, chuyện gì xảy ra? Giáo viên nhắc nhở? Lớp cười ồ lên? (Phần thưởng ngầm của đứa trẻ đang nằm ở chính phản ứng C này).' },
        { num: 4, title: 'Mệnh đề Chức Năng (Hypothesis)', desc: 'Điền vào khuôn mẫu: [Tên trẻ] làm [Hành động B] trong điều kiện [Tiền đề A] với mục đích lấy được [Chức năng hệ quả C].' },
        { num: 5, title: 'Đấu nối Behavior Replacement', desc: 'Dạy đứa trẻ một kỹ năng tương đương để đạt được [Hệ quả C] mà không phá hoại. Bẻ gãy đường dẫn thần kinh của sự kiện B.' }
      ],
      conclusion: 'Giáo viên/Phụ huynh trang bị lăng kính FBA không bao giờ bị dâng trào huyết áp trước sự nổi loạn. Họ lạnh lùng bóc tách phương trình như một bác sĩ bắt mạch máu.'
    }
  },
  {
    id: '306',
    title: '[06] Sổ Tay Chống Trầm Cảm Học Đường: Xây Rào Chắn Tâm Lý',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Trầm cảm • Cảnh báo sớm',
    readTime: '28 Phút đọc',
    excerpt: 'Mạng lưới dò tìm trầm cảm (Depression Radar). Nhận dạng những hố đen giấu mặt đang ăn mòn năng lượng sống của tuổi Teen.',
    bannerGradient: 'from-brand-blue to-[#1a627a]',
    content: {
      intro: 'Trầm cảm tuổi teen ít khi biểu hiện bằng buồn bã ủ rũ, mà nó đeo mặt nạ của Xung đột nảy lửa, Mất ngủ, Giảm điểm số đột ngột và Cắt rạch da thịt (Self-Harm).',
      steps: [
        { num: 1, title: 'Dashboard Cảnh Báo (Red Flags)', desc: 'Giáo viên Chủ nhiệm cập nhật bảng đo: Số ngày nghỉ ốm, Thay đổi cân nặng nhanh, Dừng chơi thể thao, Bài văn có ngôn từ đen tối.' },
        { num: 2, title: 'Phá Băng Bằng Phản Chiếu Ngoại Cảnh', desc: 'Đừng hỏi "Con ổn không?". Mở đầu hệ thống: "Dạo này cô thấy con gục mặt xuống bàn lúc ra chơi. Có một khoảng im lặng ở đây, cô có thể ngồi đây với con không?".' },
        { num: 3, title: 'Lập Bản Đồ Nguy Cơ Tự Sát (Suicide Risk Assessment)', desc: 'Dò hỏi qua 3 màng lọc bạo lực: Có ý định không? Có kế hoạch công cụ không? Đã xác định thời gian chưa? (Quy trình can thiệp Khẩn cấp Y tế).' },
        { num: 4, title: 'Tuyến Phòng Thủ Gia Đình', desc: 'Kéo phụ huynh ra khỏi trạng thái "Từ chối chối bỏ" (Hội chứng "Trẻ con lấy đâu ra trầm cảm"). Giao thức Psycho-Education cấp tốc cho phụ huynh.' },
        { num: 5, title: 'Giàn Giáo Đỡ Lực Học Thuật', desc: 'Ngừng việc dí deadline. Bộ phận học vụ có đặc quyền áp dụng Quy tắc 50% (giảm tải 1 nửa số môn, chuyển sang hình thức nghe giảng không tính điểm tạm thời).' }
      ],
      conclusion: 'Nhà trường tự hào vì tỷ lệ đậu Đại học 100% nhưng che giấu các trường hợp trẻ tự vẫn là nhà trường thất bại. Trị liệu phải đi trước Academics.'
    }
  },
  {
    id: '307',
    title: '[07] Cấu Trúc Vật Lý & Nhận Thức Chữa Lành ADHD Trong Lớp Học',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'ADHD • Thay đổi cấu trúc Môi trường',
    readTime: '20 Phút đọc',
    excerpt: 'ADHD (Tăng động giảm trí nhớ) không phải là khiếm khuyết. Thiết lập hệ thống vật lý giúp định tuyến năng lượng của các siêu nhân phân tâm.',
    bannerGradient: 'from-brand-orange to-[#d97c00]',
    content: {
      intro: 'Vỏ não trước trán của trẻ ADHD mỏng hơn, khiến chúng đói Dopamine và dễ bị phát tán động lượng. Thay vì ép trẻ ngồi im (bức tử sinh học), ta phải bẻ cong hình khối lớp học để thích nghi.',
      steps: [
        { num: 1, title: 'Thiết Kế Ranh Giới Vật Lý Lanh Lẹ', desc: 'Chỗ ngồi cho trẻ ADHD: Dưới cùng (đứng lên không vướng ai) hoặc Gần giáo viên. Cấp phép vùng "Chuyển động an toàn" được đi lại trong bán kính 1m2.' },
        { num: 2, title: 'Dashboard Đồ Thị Thời Gian (Externalized Time)', desc: 'Trẻ ADHD mù thời gian (Time Blindness). Lắp đặt đồng hồ lớn trực quan (Timer) có dải màu thu nhỏ đếm ngược. Biến thời gian thành Khối có thể Sờ/Thấy.' },
        { num: 3, title: 'Micro-Tasking (Chia cắt Lệnh Phức Dây Chuyền)', desc: 'Máy thu tín hiệu ADHD RAM rất bé. "Lấy vở ra, mở trang 40, làm bài số 2" là Lỗi Hệ Thống. Sửa thành lệnh đơn: "Lấy vở Toán" -> (Chờ) -> "Mở Trang 40".' },
        { num: 4, title: 'Fidget Tools (Công cụ Xả Van Tĩnh)', desc: 'Cung cấp Bóng gai bóp tay, vòng dây chun bọc dưới chân ghế. Chúng cần 10% chuyển động cơ thể ngầm để não bộ có thể dồn 90% tập trung phân tích bài vở.' },
        { num: 5, title: 'Giao Thức Dopamine Kịp Thời', desc: 'Phản hồi Reward (Phần thưởng khen ngợi/Kỳ hiệu) phải ngay trong mili-giây sau khi hành động đúng diễn ra. Không thưởng vào cuối tuần (Quá xa để não ADHD kết nối).' }
      ],
      conclusion: 'Giáo dục truyền thống bắt con gấu đi học tấu hài, bắt con cá đi leo cây. Thiết kế môi trường thân thiện với Đa dạng Thần kinh (Neurodiversity) là bước phát triển tinh hoa của hệ thống học đường.'
    }
  },
  {
    id: '308',
    title: '[08] Khung Lưới Giao Tiếp PTA (Phụ Huynh - Giáo Viên) Tránh Xung Đột',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Giao tiếp hệ thống • Kịch bản ứng phó',
    readTime: '17 Phút đọc',
    excerpt: 'Làm thế nào để báo tin dữ cho phụ huynh mà không biến buổi họp thành một sàn đấu boxing đổ lỗi?',
    bannerGradient: 'from-brand-blue to-[#116278]',
    content: {
      intro: 'Mối quan hệ Nhà trường - Gia đình thường vỡ vụn tại điểm đón nhận Tin xâu (Điểm kém, đánh nhau). Sandwich Method đã lỗi thời. Áp dụng Khung Lưới "Bàn Cờ Tròn" giảm bớt rào cản phòng vệ tâm lý Phụ huynh.',
      steps: [
        { num: 1, title: 'Mô Hình Ghế Hình Chữ U', desc: 'Loại bỏ mô hình bàn họp giáo viên ngồi ngang phụ huynh (Thế đối đầu). Xếp ghế vuông góc hoặc hình tròn để não bộ tự định vị "Chúng ta cùng 1 team".' },
        { num: 2, title: 'Giao Thức Báo Báo Dữ Kiện Thô (Fact-Based)', desc: 'Cấm sử dụng tính từ suy diễn ("Con lười", "Con hư"). Dữ liệu xuất ra: "Hôm nay, Nam quay lưng lại 5 lần, và bài không có chữ nào trong 45 phút". Tính khách quan 100%.' },
        { num: 3, title: 'Kỹ Thuật Kẹp Cảm Xúc (Empathy Sandwich)', desc: 'A: "Tôi hiểu làm mẹ thật mệt mỏi và chị đã cố gắng thế nào." B: "Sự kiện Data trên lớp". C: "Chị có thấy điều đó diễn ra ở nhà không?".' },
        { num: 4, title: 'Ma Trận Đồng Trách Nhiệm', desc: 'Vẽ bảng 2 cột: Cột 1 "Trường sẽ hỗ trợ gì tuần tới?". Cột 2 "Phụ huynh cần cam kết gì trong 30 phút buổi tối?". Ký biên bản đồng thuận.' },
        { num: 5, title: 'Vòng Lặp Phản Hồi Tích Cực Tương Lai', desc: 'Phụ huynh thường sợ nhận điện thoại từ trường. Cài đặt hẹn giờ gởi 1 Good News ngắn (Ảnh con cười, Điểm sổ tốt) vào giữa tuần để xoa dịu hồ sơ nợ xấu.' }
      ],
      conclusion: 'Giáo viên và Phụ huynh không bao giờ là kẻ thù. Cấu trúc lại giao diện giao tiếp sẽ biến những con hổ bảo vệ con thành những phi công phụ lái xuất sắc.'
    }
  },
  {
    id: '309',
    title: '[09] Giải Mã Sự Tức Giận Ở Tuổi Dậy Thì (The Teen Brain Blueprint)',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Kiến trúc nhận thức • Tuổi Teen',
    readTime: '19 Phút đọc',
    excerpt: 'Bộ não thiếu niên là một chiếc siêu xe có động cơ V8 cực mạnh, nhưng hệ thống phanh thì như xe đạp. Sơ đồ điều hành tuổi nổi loạn.',
    bannerGradient: 'from-brand-orange to-[#cc6a00]',
    content: {
      intro: 'Khoa học chụp PET scan chỉ ra não bộ Teen chưa phát triển vỏ não trước trán (Logic/Kiểm soát bốc đồng) cho đến 25 tuổi. Chúng xử lý thế giới bằng hạch hạnh nhân (Cảm xúc cực đoan). Xung đột là tất yếu mặt sinh học.',
      steps: [
        { num: 1, title: 'Hệ Thống Tiên Đoán (Anticipation Grid)', desc: 'Dẹp bỏ ảo tưởng "con tôi ngày xưa ngoan lắm". Chuẩn bị 1 màng lọc chấp nhận sự phản kháng, đóng sầm cửa, tiếng thét - coi đây là quá trình phát triển độc lập cơ bản.' },
        { num: 2, title: 'Chức Năng De-escalation (Hạ nhiệt độ phòng)', desc: 'Nguyên lý không cãi tay đôi với người say rượu hoặc não Teen đang lên cơn. Nếu con hét lên, tự hạ giọng mình xuống 2 tone điềm tĩnh. Không củi, lửa tự tắt.' },
        { num: 3, title: 'Vá Giao Tiếp (The "I" Statement)', desc: 'Từ bỏ câu "Sao con lúc nào cũng...". Chuyển sang "Khi con về trễ (FACT), bố cảm thấy rất lo lắng (EMOTION) vì sợ con gặp rủi ro ngoài đường (REASON)".' },
        { num: 4, title: 'Thương Lượng Vòng Tròn (Circle of Control)', desc: 'Quy định các Vùng Rắn (Cấm ma túy, bạo lực) và Vùng Linh Hoạt (Màu tóc, vớ cọc cạch). Nhượng bộ tối đa các tiểu tiết biểu hiện cá nhân để giữ vững Cốt Lõi.' },
        { num: 5, title: 'Kết Nối Băng Ghế Trước (The Car Ride Effect)', desc: 'Teen sợ giao tiếp Face-to-Face (nhìn chằm chằm). Bố cục giao tiếp tốt nhất là song song (Ngồi trên xe ô tô nhìn thẳng, rửa bát cùng nhau) để hạ thấp hệ thống cảnh giới.' }
      ],
      conclusion: 'Nuôi dạy tuổi tác này không phải là quá trình thuần hóa ác thú. Đó là quá trình rào chắn làm Hoa tiêu, đứng bên lề đường để xe chúng chạy, chỉ cần đảm bảo chúng không lao xuống vực.'
    }
  },
  {
    id: '310',
    title: '[10] Kiến Trúc Phát Triển Chức Năng Điều Hành (Executive Functions)',
    category: 'Tâm Lý Học Đường',
    metaInfo: 'Frontal Lobe • Kỹ năng tư duy',
    readTime: '23 Phút đọc',
    excerpt: 'Học dốt không phải luôn do chỉ số IQ. Thường là do sự suy vỡ của hệ thống Chức năng Điều hành (Executive Functions). Kế hoạch phục dựng.',
    bannerGradient: 'from-brand-blue to-[#0d5975]',
    content: {
      intro: 'Chức năng điều hành (EF) bao gồm: Working memory (Trí nhớ làm việc), Tổ chức phân công, Khởi động nhiệm vụ, và Kiểm soát xung động. Học sinh có EF kém giống y hệt như sân bay thiếu đi đài kiểm soát không lưu.',
      steps: [
        { num: 1, title: 'Bộ Xương Ngoại Vị (Exoskeleton)', desc: 'Đừng trông chờ sự tự giác bằng bộ nhớ sinh học. Lắp đặt Exoskeleton: Planner, Checklist màu dán trên bàn, Hệ thống kệ hồ sơ có nhãn mác. Ngoại hóa mọi dữ liệu trí nhớ.' },
        { num: 2, title: 'Bẻ Gãy Sự Trì Trệ (Task Initiation Hacking)', desc: 'Mọi đứa trẻ yếu EF đều sợ sự bắt đầu (Blank Page Syndrome). Cài đặt luật "Chỉ cần viết đúng tên & ngày tháng lên giấy, sau đó đi uống nước." Khi phá vỡ quán tính tĩnh, xe lăn bánh.' },
        { num: 3, title: 'Dashboard Đánh Giá Ưu Tiên (Eisenhower Matrix)', desc: 'Dạy học sinh tư duy băm ma trận Khẩn cấp / Quan trọng. Viết số thứ tự lên từng đề bài thay vì làm bài dễ, bỏ bài khó.' },
        { num: 4, title: 'Máy Khử Sóng Giao Thoa (Vật Lý học)', desc: 'Dọn sạch cọt rác bàn học (Visual noise). Não bộ kém EF rất dễ bị kiệt sức nếu trường nhìn (Field of vision) chứa quá nhiều đồ vật lộn xộn vẫy gọi sự chú ý.' },
        { num: 5, title: 'Phản Quang Tự Nhận Thức (Metacognition)', desc: 'Kết thúc dự án, bắt trẻ ghi chép lại Dashboard Nhìn Nhận: "Chiến thuật nào đã giúp mình nộp bài đúng hạn?", "Điểm nghẽn là ở đâu?".' }
      ],
      conclusion: 'Nhà trường ám ảnh việc nạp thật nhiều kiến thức (Data) nhưng không dạy trẻ cách sắp xếp, phân phối và trích xuất dữ liệu (OS software). Xây dựng năng lực EF mới là xây dựng cỗ máy học trọn đời.'
    }
  }
];
