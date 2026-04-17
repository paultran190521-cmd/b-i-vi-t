import { Article } from './types';

export const relationshipArticles: Article[] = [
  {
    id: '401',
    title: '[01] 4 Kỵ Sĩ Khải Huyền Trong Hôn Nhân (The Gottman Framework)',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Dự báo đổ vỡ • Tái cấu trúc',
    readTime: '21 Phút đọc',
    excerpt: 'Hệ thống AI của Gottman dự báo Ly Hôn chính xác 93% thông qua việc phát hiện 4 độc tố hành vi tàn phá cấu trúc hôn nhân.',
    bannerGradient: 'from-brand-blue to-[#116278]',
    content: {
      intro: 'Viện Gottman qua hàng ngàn giờ quan sát đã định dạng "4 Kỵ Sĩ" hủy diệt vòng lặp đôi lứa. Tránh được 4 kỵ sĩ này, bạn thiết lập một hệ thống miễn dịch vững chắc cho cấu trúc gia đình.',
      steps: [
        { num: 1, title: 'Chỉ Trích (Criticism) 👉 Lời phàn nàn', desc: 'Lỗi hệ thống: "Anh luôn ích kỷ/Cô không bao giờ quan tâm". Vấn đề không nằm ở sự kiện, mà đang tấn công NHÂN CÁCH. Giải pháp: Phàn nàn hành vi thay vì con người. "Em thấy khó chịu khi nhà đầy bụi mù."' },
        { num: 2, title: 'Khinh Thường (Contempt) 👉 Đồng điệu', desc: 'Độc tính số 1. Bao gồm nhếch mép, đảo mắt, mỉa mai. Nó biểu hiện vị thế bề trên. Giải pháp: Xây dựng Văn hóa Trân trọng Tích cực. Kể lại các vi-sự-kiện tốt đẹp về đối tác trong tuần.' },
        { num: 3, title: 'Phòng Thủ (Defensiveness) 👉 Nhận trách nhiệm', desc: 'Chơi Victim-card (Vai nạn nhân): "Tại em cằn nhằn nên anh mới nổi điên". Trả lại bóng về sân kia. Giải pháp: Thừa nhận % lỗi của bản thân. "Đúng là anh đã hứa mà anh quên mất, anh xin lỗi."' },
        { num: 4, title: 'Đóng Băng (Stonewalling) 👉 Pause & Làm mát', desc: 'Hành vi im lặng tàn khốc, rút lui khỏi tương tác, làm mặt lạnh để không não bộ bị quá tải (Flooding). Giải pháp: Kịch bản Time-out hệ thống. "Anh đang quá tải, tụi mình dừng lại 20 phút rồi quay lại bàn nhé."' },
        { num: 5, title: 'Tỷ Lệ Vàng 5:1', desc: 'Gottman Matrix chỉ ra rằng để bù đắp 1 tương tác tiêu cực, hệ thống cần bơm lại đúng 5 tương tác tích cực. Nạp tiền vào tài khoản cảm xúc liên tục.' }
      ],
      conclusion: 'Tình yêu không mất đi tự nhiên. Nó chết do hệ thống giao tiếp đã bị ăn mòn bởi 4 kỵ sĩ. Nhận diện chúng ở tần số phát sóng sớm là cách duy nhất cản lại cuộc sụp đổ.'
    }
  },
  {
    id: '402',
    title: '[02] Thuyết Gắn Kết: Sơ Đồ Định Vị Mức Độ An Toàn (Attachment Theory)',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Lập trình sinh học • Lối phòng vệ',
    readTime: '23 Phút đọc',
    excerpt: 'Lập bản đồ tâm lý của tình yêu. Tại sao một người luôn đeo bám vắt kiệt nhau, trong khi kẻ khác liên tục chạy trốn lẩn trốn?',
    bannerGradient: 'from-brand-orange to-[#cc6a00]',
    content: {
      intro: 'Cách chúng ta tương tác trong hôn nhân bị lập trình phần lớn từ giai đoạn ấu thơ qua Thuyết Gắn Kết (Attachment). Nó quyết định Thuật Toán Cảm Xúc của bạn trước sự xa cách hoặc xung đột thân mật.',
      steps: [
        { num: 1, title: 'Scan Hồ Sơ An Toàn (Secure)', desc: 'Chiếm 50%. Họ thoải mái với việc gần gũi nhưng cũng không hoảng loạn khi xa cách. Hệ thống não bộ được cài đặt: Tình yêu = Nơi neo đậu vững chắc.' },
        { num: 2, title: 'Nhận Diện Gắn Kết Lo Âu (Anxious)', desc: 'Hệ thống báo cháy quá nhạy cảm. Chỉ một tin nhắn chậm 30 phút, não bộ liền kích hoạt thuyết "Họ hết yêu mình, họ bỏ rơi mình". Nhu cầu luôn cần xác nhận lại tình cảm bòn rút năng lượng đối phương.' },
        { num: 3, title: 'Nhận Diện Gắn Kết Né Tránh (Avoidant)', desc: 'Hệ thống báo nguy cho sự thân mật. Chỉ cần ai đó đòi hỏi tình cảm sâu sắc, não bộ kích hoạt cảnh báo "Ngạt thở/Mất tự do" và thúc đẩy hành động rút lui xa cách.' },
        { num: 4, title: 'Hóa Giải Vòng Lặp Truy Đuổi (Anxious-Avoidant Trap)', desc: 'Vụ nổ khủng khiếp của tạo hóa: Kẻ Lo Âu càng đeo bám khóc lóc, Kẻ Né Tránh càng đóng băng lạnh nhạt lại. Tách gãy bằng nhận thức tĩnh: "Tôi đang yêu cầu không phải vì họ tồi tệ, mà vì tôi đang sợ hãi."' },
        { num: 5, title: 'Cập Nhật Earned Security (Kiếm Tìm An Toàn)', desc: 'Não bộ có tính đàn hồi (Neuroplasticity). Thiết lập quy tắc giao tiếp minh bạch như Sổ tay Vận hành. (VD: Cài luật: bận gì cũng phải nhắn lại 1 icon trong vòng 1 tiếng).' }
      ],
      conclusion: 'Khi hiểu bản đồ Attachment, bạn không còn xem đối tác là Cỗ máy sát thương cố tình. Họ chỉ là một hệ điều hành đang vận hành theo bản năng cũ. Và hệ điều hành luôn có thể nâng cấp.'
    }
  },
  {
    id: '403',
    title: '[03] Bảng Cân Đối Kế Toán Cảm Xúc (Emotional Bank Account)',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Niềm tin • Tích lũy Vốn',
    readTime: '15 Phút đọc',
    excerpt: 'Hệ thống hóa niềm tin tình cảm như một bảng kế toán thu chi. Hôn nhân sụp đổ vì tài khoản bị âm lâu ngày mà không ai Audit.',
    bannerGradient: 'from-brand-blue to-[#0a3845]',
    content: {
      intro: 'Stephen Covey sáng tạo ra hệ thống Tài Khoản Ngân Hàng Cảm Xúc. Không có sự tha thứ nào là miễn phí. Mọi sai lầm của bạn đều bị trừ thẳng vào số dư tín nhiệm trong tài khoản đối phương.',
      steps: [
        { num: 1, title: 'Giao Dịch Gửi Tiền (Deposits)', desc: 'Tiền mặt: Giữ lời hứa, lịch sự nhỏ nhặt, biết nói lời xin lỗi chân thành, chia sẻ góc nhìn. Nạp tiền vào tài khoản tạo ra biên độ an toàn khổng lồ.' },
        { num: 2, title: 'Giao Dịch Rút Tiền (Withdrawals)', desc: 'Sự vô tâm, thất hứa, nói dối, bỏ qua cảm xúc, áp đặt quyền lực... Mỗi hành động rút một lượng lớn điểm uy tín trong hôn nhân.' },
        { num: 3, title: 'Kiểm Kê Rủi Ro Khi Số Dư Âm (Overdraft)', desc: 'Khi tài khoản Cảm Xúc âm (Red-zone). Mỗi lời nói bình thường nhất của bạn cũng sẽ bị phiên dịch thành sự công kích và châm biếm.' },
        { num: 4, title: 'Cơ Chế Phục Hồi Thâm Hụt', desc: 'Không thể nạp lại niềm tin bằng 1 món quà kim cương lớn (Giao dịch lừa đảo). Phải nạp từ từ liên tục, mỗi ngày một hành động nhất quán nhỏ trong vòng 6 tháng.' },
        { num: 5, title: 'Bóng Tối Tín Dụng Khống', desc: 'Đừng giả vờ gửi tiền bằng mục đích thao túng tâm lý. Khi đối tác nếm được mùi vị Gaslighting, toàn bộ sự giả dối sẽ làm ngân khố Bankrupt vĩnh viễn.' }
      ],
      conclusion: 'Tình yêu là một bản cân đối kế toán minh bạch. Yêu sâu sắc bao nhiêu không bằng việc nạp bao nhiêu tiền gửi nhỏ nhặt, không tính toán hàng ngày.'
    }
  },
  {
    id: '404',
    title: '[04] Ma Trận Nhu Cầu Ẩn Dưới Xung Đột (Iceberg Model)',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Xung đột cốt lõi • Thấu hiểu ngầm',
    readTime: '17 Phút đọc',
    excerpt: 'Họ không cãi nhau vì miếng vứt rác, họ cãi nhau vì cảm giác sợ bị thiếu tôn trọng. Scan bề chìm của xung đột.',
    bannerGradient: 'from-brand-orange to-[#c56e00]',
    content: {
      intro: 'Mọi cuộc cãi vã dữ dội nhất trong sinh hoạt luôn chỉ là cái ngọn của Tảng Băng Trôi (Iceberg Model). 10% bề nổi là sự kiện (Anh không đổ rác), 90% chìm sâu là chấn thương giá trị cốt lõi.',
      steps: [
        { num: 1, title: 'Sơ Đồ Tảng Băng', desc: 'Hoạch định tầng sinh học: Lớp Vỏ (Ngôn ngữ sập cửa, đổ lỗi) -> Lớp Cảm Giác (Tức giận) -> Lớp Đáy Sâu thẳm (Nỗi sợ bị lợi dụng, Khát khao quyền lực, Nhu cầu thuộc về).' },
        { num: 2, title: 'Dữ Kiện Bề Mặt vs Chương Trình Lõi', desc: 'Người vợ la mắng việc chồng về trễ 10 phút. Nếu cãi lại bằng Số Liệu (10 phút) là sập bẫy tảng băng trên. Phải tiếp đất xuống tầng 2: Họ đang cảm thấy không được coi trọng.' },
        { num: 3, title: 'Chiết Xuất (Extraction) Câu Tiêu Cực', desc: '"Anh là đồ vô dụng" = "Em đang cảm thấy quá kiệt sức khi phải gánh vác mọi chuyện một mình".' },
        { num: 4, title: 'Nhận Diện "Nút Bấm Trải Nghiệm Cũ"', desc: 'Hành vi của đối tác vô tình nhấn trúng chiếc nút chấn thương cũ thời thơ ấu (VD: bị bố mẹ bỏ quên). Nguồn năng lượng nổ tung không phải nhắm vào đối tác hiện tại, mà nhắm vào quá khứ.' },
        { num: 5, title: 'Thỏa Hiệp Ở Tầng Nhu Cầu', desc: 'Khi hiểu được tảng băng dưới mặt nước. Hai người không cần đàm phán việc "Ai đổ rác", mà đàm phán "Làm thế nào để cả 2 cùng cảm thấy được tôn trọng và gánh vác".' }
      ],
      conclusion: 'Cấu trúc lại mắt nhìn hệ thống: Rời khỏi võ đài của những bát đĩa vỡ, xuống khoang ngầm tìm nơi những trái tim rạn nứt đang cần vỗ về.'
    }
  },
  {
    id: '405',
    title: '[05] Lập Trình Lời Xin Lỗi: Framework 5 Ngôn Ngữ Phục Hồi',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Bảo trì hệ thống • Dr. Gary Chapman',
    readTime: '18 Phút đọc',
    excerpt: 'Lời "Xin lỗi" trống rỗng cấu trúc lại màng nhĩ nhưng không qua được màng lọc trái tim. Các module vá lỗi thực sự.',
    bannerGradient: 'from-brand-blue to-[#137a96]',
    content: {
      intro: 'Gary Chapman (Tác giả 5 Ngôn ngữ Tình yêu) cũng xây dựng luôn 5 Ngôn ngữ Xin Lỗi. Hệ thống xin lỗi hiệu quả đòi hỏi sự khớp mã giữa Nguồn Đóng Gói (Bạn) và Nguồn Giải Mã (Đối tác).',
      steps: [
        { num: 1, title: 'Bày Tỏ Tiếc Nuối (Ngôn Ngữ 1)', desc: 'Xác thực cảm xúc buồn bực của hệ thống. "Anh hối hận vì lời nói lỡ lời ban nãy làm tổn thương trái tim em." Chỉ công nhận CẢM XÚC, không cần ngụy biện LÝ DO.' },
        { num: 2, title: 'Nhận Trách Nhiệm (Ngôn Ngữ 2)', desc: 'Chấp nhận lỗ hổng do mình gây ra mà không dùng chữ "Nhưng" đính kèm. "Em đã sai khi không hỏi ý kiến anh trước định quyết định."' },
        { num: 3, title: 'Bù Đắp Thiệt Hại (Ngôn Ngữ 3)', desc: 'Người đòi hỏi ngôn ngữ này quan tâm tới giải pháp vật lý. Hệ thống hỏng ở đâu, đền bù ở đó. "Anh xin lỗi vì làm hỏng, 20 phút nữa anh sẽ đặt cái mới y hệt cho em."' },
        { num: 4, title: 'Thay Đổi Hành Vi Thực Sự (Ngôn Ngữ 4)', desc: 'Sự ăn năn cao cấp nhất. Cung cấp một Bản Vá Lỗi (Patch update). "Mình xin lỗi vì hay trễ hẹn. Từ mai mình sẽ cài báo thức sớm lên 15 phút để đảm bảo không sai số nữa."' },
        { num: 5, title: 'Cầu Xin Tha Thứ (Ngôn Ngữ 5)', desc: 'Với một số người, quyền lực được nhường lại là sự thỏa hiệp tốt nhất. Đặt quả bóng quyền lực vào tay họ: "Anh có thể tha lỗi cho em được không?".' }
      ],
      conclusion: 'Gửi nhầm mã code xin lỗi giống như cắm sạc iPhone vào ngõ Android. Hãy Mapping đúng file ngôn ngữ của người đối thoại để reboot tình yêu.'
    }
  },
  {
    id: '406',
    title: '[06] Thiết Kế Điểm Chạm (Touchpoints): Tự Động Hóa Sự Quan Tâm',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Romance Routine • Habit Stacking',
    readTime: '15 Phút đọc',
    excerpt: 'Hủy bỏ lãng mạn vô tổ chức. Thiết lập sự lãng mạn thành các cơ chế Touchpoint hệ thống không thể cản phá.',
    bannerGradient: 'from-brand-orange to-[#b35300]',
    content: {
      intro: 'Sự bào mòn hôn nhân không đến từ thảm họa lớn, mà sự thiếu hụt các điểm tiếp xúc vi mô vô thưởng vô phạt mỗi ngày. Tự động hóa sự quan tâm biến tình yêu thành một chuỗi khối không thể bị chia cắt.',
      steps: [
        { num: 1, title: 'Giao Thức Chào Hỏi & Lời Chia Tay', desc: 'Nguyên lý hệ thống Cửa trước: Không bao giờ đi/về nhà mà không thông báo. Những cái ôm/hôn ngắn 6 giây lập tức dệt hệ thống an toàn, tạo rào cản ngăn chặn cô đơn.' },
        { num: 2, title: 'Micro-checking (Check-in Vô Nghĩa)', desc: 'Gắn thẻ vào Routine: Cứ nghỉ trưa 12h lại gửi 1 tin meme hài hước, hoặc 1 bức ảnh ăn trưa. Đừng chờ đến tối mới "Report" nguyên một khối data khổng lồ gây ngộp.' },
        { num: 3, title: 'Bedtime Synchrony (Đồng Bộ Tuyến Tính Tối)', desc: 'Thử nghiệm đi ngủ cùng một thời điểm. Xếp gọn lại chiếc điện thoại để nhường khoảng trống 20 phút trò chuyện Pillow Talk, giải mã bộ não sau nhịp độ căng thẳng.' },
        { num: 4, title: 'Tác Khảo Cố Tình Sự Bất Ngờ (Planned Spontaneity)', desc: 'Nghịch lý: Sự ngẫu nhiên phải được lên kế hoạch. Cài lịch Reminder ảo định kỳ tháng để mua một món quà/đặt 1 bó hoa bất thình lình chặn đứng quy luật bào mòn của cuộc sống.' },
        { num: 5, title: 'Nghi Lễ Gia Đình (Rituals of Connection)', desc: 'Tạo lập 1 buổi tối nướng thịt/xem phim tuần tự vào Thứ 6 hàng tuần thành 1 truyền thống văn hóa nội bộ bất tử.' }
      ],
      conclusion: 'Đừng đợi "khi nào tôi có hứng", "khi nào tôi không bận". Khi bạn áp đặt hệ thống, cảm xúc lãng mạn sẽ tự động chảy ra từ quy trình cứng.'
    }
  },
  {
    id: '407',
    title: '[07] Genogram Nâng Cao: Giải Cứu Thế Hệ Khỏi Tổn Thương Gia Đình',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Trị liệu cá nhân • Sơ đồ di truyền',
    readTime: '19 Phút đọc',
    excerpt: 'Vạch trần sơ đồ di truyền cảm xúc độc hại đứt đoạt từ thời ông bà cha mẹ đến chính chúng ta, và cắt đứt nó ở đây.',
    bannerGradient: 'from-brand-blue to-[#1e586b]',
    content: {
      intro: 'Có những lối mòn trong cách phản ứng được truyền mã gene xã hội (Triangulation, Cấm đoán cảm xúc). Sơ đồ Genogram (Cây phả hệ tâm lý nâng cao) là công cụ bóc phốt mã vạch tàn lụi này.',
      steps: [
        { num: 1, title: 'Lập Trình Quá Khứ Cơ Sở', desc: 'Vẽ cây sơ đồ mối quan hệ bằng những đường nối hình vẽ hình vuông, hình tròn trong vòng 3 thế hệ. Nhưng không phải để khám bệnh, mà đi truy lùng các đường liên kết đứt gãy hay gắn kết mãnh liệt quá mức.' },
        { num: 2, title: 'Truy Tìm Kịch Bản (Family Scripts)', desc: 'Truy tìm các Luật ngầm của gia tộc. "Đàn ông nhà này không khóc", "Phụ nữ phải hy sinh vô điều kiện". Phát số liệu cảnh báo khi thấy mình đang vận hành file cũ này vào cuộc đới.' },
        { num: 3, title: 'Hủy Tam Giác Hóa (Triangulation Break)', desc: 'Đặc trưng: Mẹ chồng giận nàng dâu nhưng mắng nhiếc con trai ở giữa. Mồi lửa này tạo ra tam giác quyền lực ngầm. Đạp vỡ tam giác bằng thiết lập Dòng Kẻ Riêng Tư Tối Thượng.' },
        { num: 4, title: 'Tìm Kiếm Vai Trò Ám Nhận', desc: 'Phân tích chức danh đứa trẻ bị ấn định: The Scapegoat (Kẻ gánh bùn đen rủi ro), The Golden Child (Đứa con tinh túy), The Peacemaker (Kẻ kiến tạo hòa bình hòa giải mọi xung đột). Rũ bỏ chức vị này.' },
        { num: 5, title: 'Chốt Giao Thức Kết Thúc Mùa', desc: 'Dừng ngay tham vọng: Cứu chữa cha mẹ khỏi chấn thương. Ta chỉ thiết lập vùng bảo vệ mình để không lây lại cho F1 F2 sau này. Nỗi đau này từ thế hệ trước, nó sẽ chết đi ở mình.' }
      ],
      conclusion: 'Bằng hệ thống Genogram, bạn không căm ghét bố mẹ vì họ tồi tệ. Bạn nhìn họ như những nạn nhân của một hệ điều hành đã sập mạng từ ngày cũ. Ta làm lại.'
    }
  },
  {
    id: '408',
    title: '[08] Nghệ Thuật Đồng Điệu (Limbic Resonance): Bản Đồ Giao Tiếp Tế Bào',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Limbic System • Trắc ẩn',
    readTime: '23 Phút đọc',
    excerpt: 'Sự vô hình trong giao tiếp. Cấu trúc học hệ viền (Não Cảm Xúc) cho phép kết nối ngay cả khi cả hai đều câm nín.',
    bannerGradient: 'from-brand-orange to-[#cc5e00]',
    content: {
      intro: 'Limbic Resonance (Phản chiếu vùng hệ viền) - Trạng thái mà các chất hóa học thần kinh của con người tự động sao chép não trạng của người đối diện khi tiếp xúc thân mật. Tại sao năng lượng xấu lại lây nhiễm khủng khiếp như virus.',
      steps: [
        { num: 1, title: 'Hệ Viền Mở (Open-loop System)', desc: 'Con người mang hệ thần kinh phơi bày ra môi trường xã hội. Khi bên kia cáu giận nhịp mạch 100 hit/phút, não bạn cũng ép hệ tim mạch đập 100 hit. Bức tường này bị phá bỏ từ trong ra.' },
        { num: 2, title: 'Cắt Cầu Dao Đồng Điều Hóa Hóa Chất', desc: 'Nhận diện lúc não đi vào trạng thái vay mượn độc tố. Trấn áp ngay Limbic bằng thao tác thở lùi dài 6 nhịp/phút. Cưỡng ép hệ thần kinh tạo ra khiên chắn năng lượng sóng điện từ.' },
        { num: 3, title: 'Sơn lại Tín Hiệu (Limbic Revision)', desc: 'Liệu pháp ôm ấp vô ngôn (30-60 giây) chữa lành Limbic nhanh hơn 2 giờ cãi lý thuyết Logic. Ngôn từ ở vỏ não không bao giờ truy vấn vào hệ viền. Chạm tiếp giác Mới mới là công cụ.' },
        { num: 4, title: 'Tạo Cung Phản Xạ Âm Nhạc Chung', desc: 'Âm nhạc xử lý vượt qua tầng lý luận. Chạy chung 1 playlist hoài niệm kích hoạt màng lọc Hormone yêu thương liên kết Oxytocin vào cả mạch đập hai người.' },
        { num: 5, title: 'Đãi Ngộ Tình Địch Cảm Xúc Mình', desc: 'Đừng tự tấn công khi não của mình đi chệch ra đường ray yêu thương vì ngoại cảnh. Nữ bác sĩ luôn phải tiêm liều thuốc giảm nhiệt tự kỉ bằng tách trà hoa cúc nóng trước khi xoa dịu ông chồng đang lên cơn stress vì sáp nghiệp.' }
      ],
      conclusion: 'Hiểu được hệ viền, ta bỏ được cái thói trịch thượng muốn "Nói rõ trắng đen phải trái bằng bằng lý luận". Thân thể giải cứu thân thể tốt hơn nhiều.'
    }
  },
  {
    id: '409',
    title: '[09] Kiến Trúc Ranh Giới Đôi: Không Xâm Phạm Nhưng Không Rời Xa',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Ranh giới • Hạnh phúc lứa đôi',
    readTime: '21 Phút đọc',
    excerpt: 'Làm thế nào để vẫn giữ được tính độc lập nguyên thể bản sắc cá nhân trong một khối liên minh tình ái 2 người tột độ.',
    bannerGradient: 'from-brand-blue to-[#1a627a]',
    content: {
      intro: 'Quá tách biệt: Hệ thống sụp đổ vì sự cô lập tàn nhẫn. Quá dính mắc: Hệ thống bùng nổ do ngạt thở tự do màng lọc. Đặt biên giới là nghệ thuật đi trên dây.',
      steps: [
        { num: 1, title: 'Vẽ Bản Đồ Ven Căn Cước 3 Trụ', desc: 'Khung 1: "Của Anh" Vùng bí mật bảo mật tự chủ. Khung 2: "Của Em" Sở thích chuyên biệt hóa đơn độc. Khung 3 "Của Chúng Ta" Lát cắt kết nối sinh tồn giao thoa không thể tách rẽ.' },
        { num: 2, title: 'Bóng Đèn Cửa Sổ Tâm Lâm', desc: 'Khi "Của Anh" hay "Của Em" lấn chiếm quá 80% thời gian thức -> Cảnh Báo Ngắt Kết Nối cô lập. Khi "Của Chúng Ta" phình to 100% -> Chết đói Bản ngã Độc Tôn. Phải tái thiết lập ranh giới liên tục.' },
        { num: 3, title: 'Xén Rìa Bảo Mật Hợp Lý', desc: 'Trao đổi ID/Password MXH không phải dấu hiệu Tình yêu Thần Thánh. Đây là dấu hiệu Kiểm Sát Lãnh Thổ phi nhân. Ngăn chặn quyền xâm nhập bằng Bản Điều Khoản Tin Cậy (Trust Manual).' },
        { num: 4, title: 'Thương Lượng Khoảng Xanh Trắng', desc: 'Tôn trọng vùng im lặng: Thời Không Khép Kín riêng tư sau khi tan ca 30 phút. Chỉ giao tiếp "Chúng ta" sau khoảng thanh tẩy đó diễn ra xong.' },
        { num: 5, title: 'Thực Tập Tách Ghép Không Đau', desc: 'Đi nhậu với nhóm bạn riêng vẫn tạo dựng một tinh thần chung. Tạo một định dạng: Hai thế giới sống riêng lẻ không là gánh nặng ghen tuông mà là hai luồng cấp năng lượng song song bơm về lại Tổ Ấm Tổ Hợp.' }
      ],
      conclusion: 'Việc của tình yêu trưởng thành không phải hợp hai hóa một. Đó là sự hợp nhất hai bản thể khỏe mạnh tự xoay quanh trục vĩ đại của riêng mình lại với nhau.'
    }
  },
  {
    id: '410',
    title: '[10] Framework Sơ Di Rút Lui Quyền Lực Âm Thầm',
    category: 'Mối Quan Hệ & Kết Nối',
    metaInfo: 'Toxic loop • Power dynamics',
    readTime: '26 Phút đọc',
    excerpt: 'Hệ thống hóa thao túng ngầm (Gaslighting, Ái Kỷ) trong tình bạn hay tình cảm để thiết lập cửa thoát hiểm cấp cứu.',
    bannerGradient: 'from-brand-orange to-[#d97c00]',
    content: {
      intro: 'Chẳng có vết bầm vật lý, nhưng bên trong tinh thần tơi bời sụp đổ. Bản vẽ bóc trần đường dây của thao túng và quyền lực tàn nhẫn, cách đóng băng chúng.',
      steps: [
        { num: 1, title: 'Audit Cảm Giác Tội Lỗi Tự Nảy Sinh', desc: 'Gaslighting có khung bẻ gãy bộ nhớ cực mượt: Chuyển mọi sự kiến trái quấy từ phía họ thành tội lỗi mặc định từ bạn do "Trí nhớ bạn kém lắm", "Bạn nhạy cảm hóa mọi thứ lên rồi".' },
        { num: 2, title: 'Hồ Sơ Mật (The Reality Log)', desc: 'Bộ não trong chế độ Panic Attack rất kém. Chụp ngay màn hình, ghi Note lại mốc thời gian Fact-Check để có Data Trú Ẩn bám rễ không bị cuồng phong của Thao túng Cuốn Phăng.' },
        { num: 3, title: 'Kỹ Thuật Đá Xám (Grey Rocking)', desc: 'Không thể tranh luận với Trái Bom Kẻ Ái Kỷ. Biến mình thành Hòn Đá Xám Tẻ Nhạt: Cắt bỏ 100% ngữ hình Cảm Xúc trong giao tiếp. Câu trả lời chỉ là "Oh", "Thế à", "Tùy thôi". Kẻ thù chán ngán bỏ đi.' },
        { num: 4, title: 'Hoạch Định Ranh Giới Sắt', desc: 'Chỉ giao tiếp mọi cam kết liên quan tới lợi quyền sinh tồn (Tài chính gia đình chung/Đứa con chung) trên Văn Bản Đen Trắng. Từ tước đoạt các sự tin tưởng lời nói.' },
        { num: 5, title: 'Giải Phẫu Dứt Điểm Đường Thoát', desc: 'Nhổ hệ thống Ảo Mộng ra khỏi mạch chính não bộ. Cắt Lỗ Cảm Xúc (Sunk-cost Fallacy). Ra đi từ nay bằng định hướng tương lai chứ không ngó về quá khứ Sunk-cost nữa.' }
      ],
      conclusion: 'Ra khỏi vực thẳm này là chiến thắng cực hạn. Kỹ thuật Grey Rock hay Hồi Lưu Data Ghi Chép giúp bạn giành lại vương miện quyền tự do độc lập hệ thống.'
    }
  }
];
