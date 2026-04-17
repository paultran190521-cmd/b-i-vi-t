import { Article } from './types';

export const thinkingArticles: Article[] = [
  {
    id: '201',
    title: '[01] Mental Models: 5 Lăng Kính Quản Trị Hệ Thống Niềm Tin',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Mô hình tư duy • Cốt lõi',
    readTime: '22 Phút đọc',
    excerpt: 'Hệ thống hóa các bộ lọc nhận thức (Mental Models). Rũ bỏ thiên kiến để nhìn nhận thực tại đa chiều.',
    bannerGradient: 'from-brand-blue to-[#0a3845]',
    content: {
      intro: 'Mô hình tư duy (Mental Models) là cách não bộ đóng gói cách thế giới vận hành. Khi thiết lập 1 dashboard kiểm soát các lăng kính này, bạn sẽ tránh được việc bị kẹt trong một góc nhìn duy nhất gây ra bế tắc cục bộ.',
      steps: [
        { num: 1, title: 'Inversion (Tư duy đảo ngược)', desc: 'Thay vì hỏi "Làm sao để thành công?", hãy hỏi "Làm sao để chắc chắn thất bại?". Sau đó lập list các hành vi sinh ra thất bại và gạch bỏ chúng.' },
        { num: 2, title: 'First Principles (Quy nạp từ nguyên lý cơ bản)', desc: 'Bóc tách vấn đề xuống tầng vật lý lõi nhất, những sự thật không thể chối cãi. Sau đó xây dựng lại giải pháp từ con số 0 thay vì sao chép người khác.' },
        { num: 3, title: 'Second-Order Thinking (Tư duy cấp độ hai)', desc: 'Một quyết định tốt ở cấp 1 có thể sinh ra thảm họa cấp 2. Sơ đồ hóa mọi hệ quả phái sinh: "Khi làm điều này, hệ quả của hệ quả là gì?".' },
        { num: 4, title: 'Circle of Competence (Vòng tròn năng lực)', desc: 'Vẽ rõ biên giới sự hiểu biết của bạn. Lỗi tư duy lớn nhất là đem kiến thức ở lĩnh vực A để đi đánh giá chuyên môn hệ thống ở lĩnh vực B.' },
        { num: 5, title: 'Occam\'s Razor (Lưỡi dao Occam)', desc: 'Giữa hai lời giải thích cùng cho ra một kết quả, lời giải thích ít giả định (đơn giản nhất) luôn là lời giải thích độ tin cậy cao nhất.' }
      ],
      conclusion: 'Mental Models không cho bạn câu trả lời ngay lập tức, nhưng nó thiết lập hệ thống giàn giáo để tư duy của bạn không bị sập khi gặp bài toán khó.'
    }
  },
  {
    id: '202',
    title: '[02] Vòng Lặp Phản Hồi (Feedback Loops) Trong Não Bộ',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Mô hình hệ thống • Vòng lặp hành vi',
    readTime: '20 Phút đọc',
    excerpt: 'Cách biến một suy nghĩ rời rạc thành một vòng lặp gia cố thói quen dựa trên cơ chế Feedback Loop của hệ thống sinh học.',
    bannerGradient: 'from-brand-orange to-[#b35d00]',
    content: {
      intro: 'Hệ thống tự nhiên tồn tại nhờ vào các vòng lặp phản hồi (Feedback Loops). Khi vận dụng cơ chế Balancing (Cân bằng) và Reinforcing (Gia cố), ta có thể điều hướng tư duy từ tiêu cực bẩm sinh sang trạng thái phục hồi tự động.',
      steps: [
        { num: 1, title: 'Lập bản đồ vòng lặp hiện tại', desc: 'Sử dụng sơ đồ mũi tên: [Suy nghĩ chán nản] -> [Lướt mạng xã hội] -> [Mất thời gian] -> [Càng chán nản]. Đây là vòng lặp gia cố tiêu cực.' },
        { num: 2, title: 'Xác định Nút cổ chai (Bottleneck)', desc: 'Tìm ra mắt xích yếu nhất trong vòng lặp có thể can thiệp được bằng hành động vật lý (Ví dụ: để điện thoại ở phòng khác).' },
        { num: 3, title: 'Chèn hệ thống Phản Hồi Cân Bằng', desc: 'Cài đặt một giới hạn cảnh báo (Threshold). Ví dụ: Khi tần suất cảm xúc tiêu cực vượt 3 lần/ngày, chuông cảnh báo "Uống 1 cốc nước" kích hoạt.' },
        { num: 4, title: 'Kiến tạo Vòng Lặp Gia Cố Hướng Thượng', desc: 'Thiết kế Vòng lặp mới: [Làm 1 task siêu nhỏ] -> [Tích V] -> [Dopamine Reward] -> [Động lực làm task tiếp].' },
        { num: 5, title: 'Đo lường thời gian trễ (Delay)', desc: 'Nhận thức được rằng một hành động hôm nay có thể mang lại Delay (độ trễ) vài tuần mới tạo ra feedback tích cực. Giữ kiên nhẫn với hệ thống.' }
      ],
      conclusion: 'Bằng cách tối ưu hóa các Feedback Loops, bạn dần đưa bộ não vào chế độ "Tự động sửa lỗi" - Auto-Correction của một tư duy khỏe mạnh.'
    }
  },
  {
    id: '203',
    title: '[03] Bộ Lọc Tiếng Ồn: Quyết Định Dựa Trên Tín Hiệu Số',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Ra quyết định • Phân tích dữ liệu',
    readTime: '15 Phút đọc',
    excerpt: 'Hàng ngàn suy nghĩ tiêu cực chỉ là "Noise" cản trở "Signal" thực sự. Khung phân tích để ra quyết định dựa trên facts.',
    bannerGradient: 'from-brand-blue to-[#137a96]',
    content: {
      intro: 'Bộ não con người là một cỗ máy sản xuất tiếng ồn (Noise) cực lớn để phòng vệ rủi ro. Khái niệm Signal vs Noise (Tín hiệu vs Tiếng ồn) giúp loại bỏ nhiễu loạn cảm xúc và định vị dữ liệu lõi.',
      steps: [
        { num: 1, title: 'Xác lập Tiêu chuẩn Tín hiệu', desc: 'Định nghĩa thế nào là rủi ro thật (Signal). Quản lý dữ kiện định lượng rõ ràng, loại bỏ tính từ mô tả chung chung.' },
        { num: 2, title: 'Tắt các Nguồn Nhiễu (Noise Canceling)', desc: 'Thực hiện Media-fasting (Nhịn thông tin). Chặn các luồng thông tin không đi qua phép thử "Có ảnh hưởng đến kết quả ngay lập tức không?".' },
        { num: 3, title: 'Phân tích Ma trận Rủi ro', desc: 'Đánh giá Probability (Xác suất xảy ra) và Impact (Mức độ ảnh hưởng) của luồng thông tin.' },
        { num: 4, title: 'Kiểm chuẩn với Benchmark', desc: 'Sử dụng dữ liệu lịch sử để benchmark. "Lần trước tôi sợ điều này, xác suất nó thực sự xảy ra là bao nhiêu phần trăm?".' },
        { num: 5, title: 'Chốt Quyết định (Call to Action)', desc: 'Chuyển hóa tín hiệu thành hành động. Tín hiệu rõ thì thực thi ngay, tín hiệu mờ nhạt thì đưa vào mục "Theo dõi thêm" mà không cần lo lắng.' }
      ],
      conclusion: 'Kỹ năng lọc tiếng ồn giúp bảo vệ năng lượng tâm trí, từ đó bạn có thể dồn sự "sắc bén" của lý trí vào những quyết định mang tính bước ngoặt.'
    }
  },
  {
    id: '204',
    title: '[04] Bản Đồ Hộp Đen: Phân Tích Thất Bại Tàn Nhẫn',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Tư duy trưởng thành • Black Box Thinking',
    readTime: '24 Phút đọc',
    excerpt: 'Học cách ngành Hàng Không phân tích hộp đen sau tai nạn để tái cấu trúc lại vòng lặp thất bại của cá nhân.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: 'Ngành hàng không luôn an toàn hơn sau mỗi biến cố nhờ việc phân tích tỉ mỉ thiết bị Hộp Đen (Black Box). Tư duy tâm lý học khuyến khích cá nhân tự tạo "hộp đen" hệ thống để mổ xẻ thất bại mà không sứt mẻ cái tôi.',
      steps: [
        { num: 1, title: 'Tách biệt Cái tôi khỏi Vấn đề', desc: 'Giải mã "Hộp đen" bắt đầu từ giả định: Hành động thất bại thuộc về quy trình (bugs), không thuộc về nhân phẩm (character flaw).' },
        { num: 2, title: 'Thu thập Dữ liệu Máy bay Rơi', desc: 'Ghi chép timeline 24h trước khi ý chí sụp đổ. Đi ngủ lúc mấy giờ? Ăn gì? Ai kích hoạt cảm xúc? Ghi nhận dữ liệu thô.' },
        { num: 3, title: 'Phân tích Gốc rễ (5 Whys)', desc: 'Liên tục đặt câu hỏi Tại sao (5 lần) để đâm xuyên qua lý do bề nổi, chạm đến tầng lõi cùng của sự cố hỏng hóc hành vi.' },
        { num: 4, title: 'Ban hành Giao thức mới (New Protocol)', desc: 'Dựa trên điểm yếu tìm được, thiết lập 1 nguyên tắc cấm kỵ (Red line) không ai được vượt qua trong tương lai.' },
        { num: 5, title: 'Mô phỏng Thử nghiệm', desc: 'Tái tạo lại một kịch bản rủi ro nhỏ để "chạy thử" quy trình phòng thủ mới. Xác minh độ bền bỉ của hệ thống tư duy.' }
      ],
      conclusion: 'Che đậy thất bại là che đậy cơ hội tối ưu hóa. Bằng việc trở thành chuyên viên phân tích hộp đen của chính đời mình, bạn tước đoạt quyền lực của cảm giác tội lỗi.'
    }
  },
  {
    id: '205',
    title: '[05] Tư Duy Xuyên Chuyên Ngành: Cấu Trúc Sáng Tạo',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Sáng tạo • Lưới T-Shape',
    readTime: '17 Phút đọc',
    excerpt: 'Kết hợp Biology, Physics và Economics vào Tâm lý học để định hình lại một bộ não giải quyết vấn đề linh hoạt bậc nhất.',
    bannerGradient: 'from-brand-blue to-[#1a627a]',
    content: {
      intro: 'Đỉnh cao của tư duy hệ thống là Lưới Tư Duy Đa Chiều (Latticework of Mental Models) của Charlie Munger. Việc mượn định luật vật lý hay sinh học để giải quyết khủng hoảng tâm lý tạo ra sự bứt phá phi thường.',
      steps: [
        { num: 1, title: 'Mô hình Kích hoạt Năng lượng (Vật lý)', desc: 'Dùng định luật Ma sát: Muốn tạo thói quen mới, hãy giảm ma sát khởi động xuống mức thấp nhất (Quy tắc 2 phút).' },
        { num: 2, title: 'Nguyên lý Hệ Thích Nghi Phức Tạp (Sinh học)', desc: 'Hiểu rằng nội tâm con người là một hệ sinh thái. Nhổ đi một thói quen xấu phải trồng vào một thói quen thay thế, nếu không sẽ bị "xâm lấn".' },
        { num: 3, title: 'Chi phí Cơ hội (Kinh tế học)', desc: 'Khi chọn giữ lại nỗi hận thù, "chi phí cơ hội" (Opportunity Cost) bạn đang phải trả bằng niềm đau thực tế là gì? Có đáng giá không?' },
        { num: 4, title: 'Quy luật Lãi Kép (Tài chính)', desc: 'Nỗ lực tư duy độc lập mỗi ngày 1% không tạo ra đường tuyến tính, nó tạo ra đường cong bứt tốc (Exponential Growth) sau 3 năm.' },
        { num: 5, title: 'Tích hợp (Synthesizing)', desc: 'Vẽ Mindmap giao tuyến: Tìm điểm chung giữa bài toán gia đình, bài toán công ty và cấu trúc tế bào sinh học để rút ra Core Principle.' }
      ],
      conclusion: 'Người giải quyết vấn đề xuất sắc không giới hạn mình trong một lĩnh vực đào tạo. Họ mượn sức mạnh của các quy luật bất biến trong vũ trụ để làm phẳng mọi chướng ngại tâm lý.'
    }
  },
  {
    id: '206',
    title: '[06] Giải Phẫu Sự Tập Trung: Thiết Lập Trạng Thái Flow',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Deep work • Hệ thần kinh',
    readTime: '19 Phút đọc',
    excerpt: 'Mổ xẻ cơ chế "Dòng chảy" (Flow State) của Mihaly Csikszentmihalyi, chuyển hóa não bộ từ phân tán sang khắc tĩnh.',
    bannerGradient: 'from-brand-orange to-[#d97c00]',
    content: {
      intro: 'Trạng thái Flow (Dòng chảy) là lúc hệ thống thần kinh đạt độ hội tụ cực đại, xóa nhòa cảm nhận về thời gian và cái tôi (Ego). Xây dựng cấu trúc Flow là bài toán kỹ thuật, không phải nghệ thuật.',
      steps: [
        { num: 1, title: 'Ma trận Thử thách - Kỹ năng', desc: 'Chọn Task có độ khó cao hơn kỹ năng hiện tại chính xác 4%. Quá dễ sẽ gây chán (Boredom), quá khó gây lo âu (Anxiety).' },
        { num: 2, title: 'Clear Goals (Mục tiêu tịnh tiến)', desc: 'Não không thể focus vào một khái niệm mờ. Bẻ nhỏ: "Viết xong đoạn mở đầu dài 200 từ trong 25 phút kế tiếp".' },
        { num: 3, title: 'Hộp chắn Nhiễu (Interruption Shield)', desc: 'Loại bỏ hoàn toàn External (Điện thoại, tiếng ồn) và Internal distractions (Cảm giác khao khát cái khác). Dùng tai nghe chống ồn là thiết lập vật lý bắt buộc.' },
        { num: 4, title: 'Immediate Feedback (Phản hồi tức thì)', desc: 'Thiết lập chỉ báo nhận biết bạn đang đi đúng hướng hay sai hướng ngay trong lúc đang làm việc. (Ví dụ: Chữ đếm tăng dần trên màn hình).' },
        { num: 5, title: 'Flow Recovery (Giao thức nghỉ)', desc: 'Sau 90 phút Flow, năng lượng Prefrontal Cortex bị cạn. Không nghỉ ngơi bằng màn hình (Smartphone). Nghỉ bằng chuyển động tĩnh (nhắm mắt, đi bộ dài).' }
      ],
      conclusion: 'Bạn không thể "ép" mình rơi vào Flow, nhưng bằng cách thiết lập 5 thành tố kiến trúc phòng giam này, Flow sẽ không có lựa chọn nào khác ngoài việc tự động ập tới.'
    }
  },
  {
    id: '207',
    title: '[07] Hiệu Ứng Cánh Bướm: Quản Trị Hệ Quả Phi Tuyến Tính',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Lý thuyết hỗn loạn • Cấu trúc',
    readTime: '16 Phút đọc',
    excerpt: 'Cách một biến đổi tâm lý siêu nhỏ ở hôm nay tạo ra cấu trúc đại hồng thủy trong tương lai 5 năm sau.',
    bannerGradient: 'from-brand-blue to-[#116278]',
    content: {
      intro: 'Chaos Theory (Thuyết Hỗn Loạn) chỉ ra rằng một biến thiên vi mô ban đầu có thể định hình toàn bộ cấu trúc vĩ mô. Hiểu được tính phi tuyến này giúp bạn trân trọng việc sửa chữa từng thói quen tư duy vô hại.',
      steps: [
        { num: 1, title: 'Auditing The Micro-bits', desc: 'Liệt kê các "Cánh bướm đập" (Những lời nói tổn thương nhỏ nhặt hàng ngày, những cái chép miệng coi thường nhiệm vụ).' },
        { num: 2, title: 'Phóng đại Hệ quả (Magnification)', desc: 'Nhân thói quen nhỏ lên 365 ngày x 10 năm. Việc nhượng bộ cái tôi thêm 1 phút ngủ nướng sẽ tích lũy thành bao nhiêu ngàn giờ thất thoát?' },
        { num: 3, title: 'Ngắt Mạch Ban Đầu (Initial Condition Reset)', desc: 'Can thiệp vào "Điều kiện ban đầu". Thay đổi ngay lập tức cấu trúc 15 phút đầu tiên sau khi thức dậy để hệ thống tự tái cấu trúc toàn diện chuỗi hạch toán còn lại.' },
        { num: 4, title: 'Tạo Domino Tích Cực', desc: 'Thiết lập Keystone Habit (Thói quen bản lề) mang tính dẫn dắt. Chỉ cần duy trì 1 việc tập thể dục mỗi sáng, nó sẽ tự lôi kéo chuỗi thói quen ăn sạch, cởi mở, tự tin đi theo.' },
        { num: 5, title: 'Giám sát Đường Cong Sinh Trưởng', desc: 'Đừng kỳ vọng các thay đổi sẽ mượt mà. Hiểu rõ "Valley of Disappointment" (Thung lũng thất vọng) khi các cố gắng chưa kịp hiển thị thành quả, tiếp tục châm ngòi nổ nhỏ.' }
      ],
      conclusion: 'Tương lai không được định đoạt bởi các kế hoạch vĩ cuồng hoành tráng, mà được viết bằng sự chuẩn xác của hàng ngàn lần tung cánh bướm nhỏ nhoi vô danh.'
    }
  },
  {
    id: '208',
    title: '[08] Luật Pareto 80/20: Cấu Trúc Năng Lượng Nhận Thức',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Tối ưu hóa • Năng lượng',
    readTime: '15 Phút đọc',
    excerpt: 'Đừng đầu tư cảm xúc dàn trải. Chỉ 20% các mối quan hệ gây ra 80% mọi đau khổ và ngược lại. Tách biệt chúng.',
    bannerGradient: 'from-brand-orange to-[#cc6a00]',
    content: {
      intro: 'Khung năng lượng nhận thức (Cognitive Load) là hữu hạn. Việc rải rác sự chú tâm vào mọi vấn đề bằng nhau dẫn cấu trúc não bộ đến sự rạn nứt. Áp dụng quy tắc 80/20 vào đời sống tinh thần là nguyên lý sống sót tối thượng.',
      steps: [
        { num: 1, title: 'Audit 20% Đau khổ', desc: 'Khoanh vùng chính xác tên 2 người, hoặc 2 loại công việc đang chiếm đoạt 80% năng lượng buồn phiền của bạn. Lên kế hoạch giãn cách (Cắt giảm băng thông).' },
        { num: 2, title: 'Audit 20% Tái tạo', desc: 'Chỉ điểm 2 hành động cụ thể đang đem lại 80% niềm vui thuần khiết lõi. Nâng ngân sách thời gian cho 2 việc này lên gấp rưỡi.' },
        { num: 3, title: 'Cắt Tỉa (Pruning) Nhánh Chết', desc: 'Thực hiện tư duy của người thợ làm vườn: Không ngại ngần chặt bỏ 80% các mối bận tâm vụn vặt (việc nhà không quá quan trọng, bình luận MXH, mua sắm lặt vặt).' },
        { num: 4, title: 'Thiết Lập Chế Độ Mặc Định (Default Rules)', desc: 'Xây dựng quy tắc tự động hóa các lựa chọn ở vùng 80% phiền toái. Mặc một kiểu áo, ăn một kiểu bữa trưa để dành RAM não cho vùng 20% huyết mạch.' },
        { num: 5, title: 'Dịch Chuyển Ánh Sáng (Spotlight Shifting)', desc: 'Dùng ý thức cưỡng ép "ánh đèn sân khấu" của não bộ liên tục quay ngược về nhóm 20% lõi mỗi khi bị xao lãng.' }
      ],
      conclusion: 'Hệ thống năng lượng được thiết lập lại từ trạng thái "Thanh long (nhiều hướng)" sang trạng thái "Laser (tụ quang)", loại bỏ rủi ro xói mòn quyết định.'
    }
  },
  {
    id: '209',
    title: '[09] Bản Đồ Tâm Trí (Mind Mapping): Trực Quan Hóa Sự Giao Thoa',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Phác thảo • Radiant Thinking',
    readTime: '20 Phút đọc',
    excerpt: 'Hệ thống tỏa tròn (Radiant Thinking) mô phỏng cấu trúc neuron giúp bóp nát sự phân mảnh của bài toán đa luồng.',
    bannerGradient: 'from-brand-blue to-[#0d5975]',
    content: {
      intro: 'Tư duy tuyến tính (ghi chép hàng dọc) giới hạn khả năng liên kết của não não phải (hình ảnh) và não trái (Logic). Tony Buzan đưa ra Mind Map để đồng bộ hóa hóa bán cầu não thông qua bản đồ đa tầng.',
      steps: [
        { num: 1, title: 'Khởi điểm Lõi (Core Node)', desc: 'Vẽ khái niệm chủ chốt ngay tại tâm điểm tờ giấy nằm ngang. Dùng một hình ảnh 3D nổi bật để huy động bộ nhớ thị giác tức thì.' },
        { num: 2, title: 'Phóng tủa Nhánh Chính (BOIs)', desc: 'Tung ra các nhánh tỏa Basic Ordering Ideas (Các ý tưởng sắp xếp cơ bản) như bộ tản nhiệt. Dùng đường cong hữu cơ thay vì đường thẳng điện tử cứng nhắc.' },
        { num: 3, title: '1 Nhánh - 1 Từ Khóa (Single Keyword)', desc: 'Ngắt bỏ ngữ pháp rườm rà. Mỗi rễ cây chỉ được gắn 1 danh từ hoặc động từ sức nặng, ép não bộ mã hóa thông tin xuống lõi.' },
        { num: 4, title: 'Sơn Trải Không Gian (Color Coding)', desc: 'Tận dụng màu ấm cho vùng rủi ro, màu lạnh cho vùng giải pháp để kích thích Limpic System (Hệ viền) tăng cường ghi nhớ và xúc cảm.' },
        { num: 5, title: 'Giao tuyến Băng chéo (Cross-links)', desc: 'Kết nối những mầm nhánh thuộc 2 hệ thống khác nhau (Ví dụ mũi tên từ Phân hệ Tài chính trỏ sang Phân hệ Cảm xúc) để thiết lập Insight mới.' }
      ],
      conclusion: 'Mảnh ghép thông tin rời rạc không mang lại tri thức. Khi chúng được đính thủ công vào một bản đồ sinh học, một Cấu Trúc Giải Pháp tự động nổi lên khỏi trang giấy.'
    }
  },
  {
    id: '210',
    title: '[10] Quy Luật Parkinson: Khung Thời Gian Ép Buộc (Timeboxing)',
    category: 'Hệ Thống Tư Duy',
    metaInfo: 'Hiệu suất • Structural Constraints',
    readTime: '15 Phút đọc',
    excerpt: 'Công việc sẽ tự phồng to để lấp đầy thời gian bạn cấp cho nó. Khung trói buộc áp lực sáng tạo.',
    bannerGradient: 'from-brand-orange to-[#c76500]',
    content: {
      intro: 'Cyril Northcote Parkinson từng định nghĩa nghịch lý: Nếu bạn cho 1 việc 30 ngày để làm, tâm lý học sẽ biến nó thành 1 dự án 30 ngày khổng lồ khủng khiếp. Nén thời gian là cách giải mã sự trì hoãn bằng khuôn ép (Constraints).',
      steps: [
        { num: 1, title: 'Sử Dụng Khung Thiểu Số (Aggressive Limits)', desc: 'Cắt đôi deadline dự kiến để kích hoạt cơ chế sinh tồn khẩn cấp (Sense of Urgency) nhằm lật ngược vòng kháng cực công việc.' },
        { num: 2, title: 'Ngắt Bỏ Rườm Rà (Perfectionism Purge)', desc: 'Áp lực thời gian sẽ ép não bộ vứt bỏ 80% thời gian cho những tiểu tiết cầu toàn vô dụng không đóng góp vào kết cấu lõi.' },
        { num: 3, title: 'Phân Vùng Timeboxing Hiện Hữu', desc: 'Khoanh 1 ô lịch cụ thể (vd: 8.00-9.00AM). Trong hộp Box này, bạn là tù nhân của nhiệm vụ duy nhất đó. Không chuyển tab (Context Switching).' },
        { num: 4, title: 'Micro-Deadline', desc: 'Có deadline lớn thì phải có các trạm Check-Point nhỏ 15 phút một lần để não không rơi vào trạng thái đánh lừa ảo tưởng thời gian (Time Illusion).' },
        { num: 5, title: 'Giao Thức Ship (Xuất Xưởng Kịp Thời)', desc: 'Chấp nhận xuất kho (Release) "Bản nháp tồi tệ nhất có thể xài được" khi chuông báo vừa reo để duy trì nhịp điệu hoàn thành (Done is better than perfect).' }
      ],
      conclusion: 'Giới hạn không phải là rào cản, giới hạn là khung xương định hình dòng chảy của sáng tạo. Việc ép não bộ vào sức ép nhân tạo loại bỏ mọi chất béo thừa của tư duy.'
    }
  }
];
