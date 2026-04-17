import { Article } from './types';

export const emotionArticles: Article[] = [
  {
    id: '101',
    title: '[01] Hệ Thống Phanh Khẩn Cấp (TIPP): Dung Nạp Cơn Khủng Hoảng Cục Bộ',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Dung nạp khủng hoảng • Trị liệu hành vi biện chứng (DBT)',
    readTime: '15 Phút đọc',
    excerpt: 'Khi cảm xúc vượt ngưỡng 80/100, các phương pháp tự trấn an bằng suy nghĩ đều thất bại. TIPP là công cụ sinh lý ép hệ thần kinh phải thiết lập lại trạng thái.',
    bannerGradient: 'from-brand-blue to-[#0f4b5e]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Khi đối mặt với cơn hoảng loạn tột độ, tức giận cực hạn hoặc sự thôi thúc làm hại bản thân, não tủy (phần não bò sát) lập tức chiếm quyền điều khiển. Lúc này, vỏ não trước trán (nơi phụ trách tư duy logic) bị "tắt điện".\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Nếu bạn cố gắng dùng tư duy logic để khuyên can bản thân "Đừng buồn nữa, mọi chuyện sẽ ổn", não bộ sẽ hoàn toàn ngó lơ. Năng lượng sinh lý tiếp tục bồi đắp, nhịp tim tăng vọt, tầm nhìn hẹp lại, dẫn đến các quyết định bốc đồng tạo ra hậu quả thảm khốc tàn phá mối quan hệ và công việc.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Khung TIPP thuộc liệu pháp DBT (Dialectical Behavior Therapy - Trị liệu Hành vi Biện chứng). Đây không phải là bài tập thiền định, mà là sự "can thiệp vật lý bạo lực" trực tiếp vào nhiệt độ và nhịp tim để giật sập cầu dao của hệ thần kinh giao cảm.',
      steps: [
        { num: 1, title: 'T - Temperature (Sốc Nhiệt Khẩn Cấp)', desc: 'Ngâm nửa khuôn mặt (đặc biệt là vùng mắt và má) vào chậu nước đá lạnh trong 30-60 giây, nín thở. Thao tác này "hack" cơ thể bằng Phản xạ lặn của thú biển (Mammalian Dive Reflex), ép não bộ ra lệnh hạ nhịp tim khẩn cấp để sinh tồn, lập tức cắt đứt cơn hoảng loạn.' },
        { num: 2, title: 'I - Intense Exercise (Vận Động Bạo Liệt)', desc: 'Thực hiện động tác bật nhảy (Jumping Jacks), chạy nâng cao đùi tại chỗ hoặc hít đất với tốc độ tối đa trong 15-20 phút. Quá trình này giúp đốt cháy và xả lượng vọt dư thừa của Cortisol và Adrenaline đang làm tắc nghẽn cơ bắp.' },
        { num: 3, title: 'P - Paced Breathing (Hô Hấp Định Nhịp)', desc: 'Kiểm soát nhịp thở bằng cách thở ra chậm hơn hít vào. (Ví dụ: Hít vào đếm 5 giây, thở ra đếm 7 giây). Việc kéo dài thời gian thở ra kích thích trực tiếp lên Dây thần kinh phế vị (Vagus Nerve), truyền tín hiệu "Đã an toàn" lên não.' },
        { num: 4, title: 'P - Paired Muscle Relaxation (Giãn Cơ Ghép Đôi)', desc: 'Hít sâu và căng cứng toàn bộ một nhóm cơ (ví dụ: siết chặt hai nắm đấm, gồng vai lên cổ) trong vòng 5 giây. Sau đó đột ngột thở ra mạnh và thả lỏng hoàn toàn. Lặp lại với các nhóm cơ khác từ đầu đến chân.' },
        { num: 5, title: 'Audit Hệ Thống (SUDs Check)', desc: 'Đo lường bằng thang SUDs (Subjective Units of Distress) từ 0 đến 100. Nếu hoảng loạn vẫn ở mức > 70 sau một vòng, lặp lại quy trình từ Sốc Nhiệt.' }
      ],
      conclusion: 'CẢNH BÁO: TIPP không giải quyết được nguồn gốc của nỗi đau tâm lý, nhưng nó cung cấp một "Phanh khẩn cấp" (Freeze System) tuyệt đối hiệu quả để bảo vệ bạn khỏi các hành động phá hoại trong thời khắc mất kiểm soát diện rộng.'
    }
  },
  {
    id: '102',
    title: '[02] Hệ Điều Hành Polyvagal: Chuyển Trạng Thái Sinh Tồn Sang Trạng Thái Kết Nối',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Hệ thống sinh lý học • Thuyết thần kinh phế vị',
    readTime: '18 Phút đọc',
    excerpt: 'Giáo sư Stephen Porges chứng minh cảm xúc là phản ứng hệ thần kinh. Đo lường cơ chế Đóng Băng và Chiến Đấu để hồi phục.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Bạn thường xuyên cảm thấy đờ đẫn, trống rỗng (không thể nhấc người ra khỏi giường) hoặc lúc nào cũng bồn chồn, luôn trong tư thế sẵn sàng cãi vã dù không có mối đe dọa thực tế nào.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Việc ép bản thân phải "vui vẻ lên" lúc này là bạo lực tinh thần. Vì đây không phải là vấn đề của tư duy (Mind), mà là sự đứt gãy của Dây thần kinh phế vị (Vagus Nerve). Hệ thần kinh bị kẹt ở trạng thái bảo vệ giả, khiến cơ thể từ chối mọi sự kết nối, phá hủy khả năng làm việc sâu và lòng trắc ẩn.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Thuyết Đa não phế vị (Polyvagal Theory) cung cấp công cụ chẩn đoán sinh lý. Hệ thống não chia làm 3 vùng: Sympathetic (Báo động cháy), Dorsal Vagal (Đóng băng/Giả chết), và Ventral Vagal (An toàn/Tương tác). Quản trị cảm xúc chính là quy trình dịch chuyển dần hệ thần kinh qua 3 nấc thang này.',
      steps: [
        { num: 1, title: 'Định Vị Điểm Rơi (Mapping Sổ Sứ Khỏe)', desc: 'Đang ở Sympathetic (Kích động, tim đập nhanh)? Hay đang rơi xuống vực Dorsal (Tuyệt vọng, tê liệt, không cảm giác)? Bắt bệnh đúng tầng thần kinh là yêu cầu sống còn. Không dán mép "buồn chán" chung chung.' },
        { num: 2, title: 'Kích Hoạt Phanh Phế Vị (Vagal Brake)', desc: 'Nếu bạn đang kích động (Sympathetic), cần đạp phanh. Thở dài phát ra tiếng, ngâm nga âm thanh (Humming) rền trong cổ họng, hoặc súc miệng bằng nước lạnh. Điều này kích thích thanh quản, nơi rễ dây thần kinh phế vị đi qua.' },
        { num: 3, title: 'Rã Băng Vi Mô (Micro-Thawing)', desc: 'Nếu bạn đang tê liệt (Dorsal), ĐỪNG bắt ép bản thân tập thể dục nặng. Hãy rã băng từ từ: cử động nhẹ ngón chân, đu đưa cơ thể từ trước ra sau (Rocking), cuộn tròn người trong một tấm chăn nặng.' },
        { num: 4, title: 'Tạo Cầu Nối Ventral (Kết Nối An Toàn Mồi)', desc: 'Hệ thần kinh tìm lại Ventral thông qua ánh nhìn và nhịp điệu. Nhìn vào mắt thú cưng (chó/mèo), nghe âm điệu giọng nói êm ái của một người bạn đáng tin, hoặc nghe tiếng thiên nhiên (ASMR nước chảy).' },
        { num: 5, title: 'Mỏ Tín Hiệu Báo An (Glimmers)', desc: 'Nếu Triggers là nút kích hoạt đau đớn, Glimmers là nút kích hoạt an bình. Theo dõi và ghi chép lại 3 khoảnh khắc siêu nhỏ khiến cơ thể bạn khẽ giãn ra mỗi ngày (Mùi cà phê, ánh nắng xiên qua lá).' }
      ],
      conclusion: 'Hiểu được hệ thống Polyvagal, bạn tha thứ cho chính sự sụp đổ của mình. Cảm xúc tồi tệ không phải vì bạn hỏng hóc, mà là do cơ chế sinh tồn ngàn năm đang cố bảo vệ bạn sai cách.'
    }
  },
  {
    id: '103',
    title: '[03] Bảng Điều Khiển Internal Family Systems (IFS): Đàm Phán Với Tiếng Nói Chỉ Trích',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Trị liệu hệ thống gia đình nội tâm • Lãnh đạo bản thể',
    readTime: '20 Phút đọc',
    excerpt: 'Tiếng nói trong đầu bảo bạn là đồ bỏ đi thực chất là một "Phân mảnh" đang cố bảo vệ bạn. Sơ đồ hóa và đàm phán với nội tâm.',
    bannerGradient: 'from-brand-blue to-[#0e5c6b]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Bạn liên tục bị một giọng nói tàn nhẫn trong đầu chửi rủa, chê bai mọi quyết định (Inner Critic), hoặc bị giằng xé giữa việc muốn nỗ lực làm việc và việc muốn buông xuôi mặc kệ đời.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Cố gắng phớt lờ, đè nén hay "chiến đấu" sống mái với giọng nói này chỉ làm nó mạnh hơn. Nội tâm bạn trở thành một hệ thống nội chiến, gây cạn kiệt toàn bộ năng lượng sống, dẫn đến chứng mất ngủ mãn tính hoặc sợ hãi xã hội.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Mô hình Trị liệu Hệ thống Gia đình Nội tâm (IFS - Internal Family Systems) do tiễn sĩ Richard Schwartz sáng lập. Mô hình giả định tâm trí là một ban quản trị gồm nhiều "Phân mảnh" (Parts). Tiếng nói chỉ trích không phải kẻ thù, đó là một "Kẻ bảo vệ" (Protector) bị đi lạc hướng. Bạn cần triệu hồi quyền Lãnh đạo (Self-Leadership) để hòa giải hệ thống.',
      steps: [
        { num: 1, title: 'Tách Thể (Unblending)', desc: 'Xác nhận: "Tôi ĐANG CÓ một phần trong tôi cảm thấy tồi tệ" chứ KHÔNG PHẢI "Tôi tồi tệ". Tách biệt Bản Thể tĩnh lặng của bạn (The Self) ra khỏi cơn bão của cảm xúc (The Part).' },
        { num: 2, title: 'Quét Định Vị (Focusing)', desc: 'Tìm xem phần cảm xúc đó trú ngụ ở đâu trong cơ thể vật lý vật lý. Nó là cảm giác quặn thắt ở ngực? Hay cứng đơ ở cổ vai gáy? Dồn ý thức vào khu vực đó.' },
        { num: 3, title: 'Phơi Bày Thái Độ (Befriending)', desc: 'Kiểm tra xem bạn đang có thái độ thù ghét phần cảm xúc này không? Nếu có, yêu cầu sự thù ghét lùi lại. Duy trì một sự Tò mò trắc ẩn (Curiosity) thuần khiết đối với tiếng nói chỉ trích.' },
        { num: 4, title: 'Hỏi Cung Tự Sự (Interviewing the Protector)', desc: 'Hỏi phần chỉ trích: "Công việc của bạn là gì? Bạn đang sợ điều tồi tệ nào sẽ xảy ra với tôi nếu bạn ngừng phán xét?". (Thường nó chê bai bạn để người khác không có cơ hội làm tổn thương bạn trước).' },
        { num: 5, title: 'Giao Thức Giải Phóng Kẻ Lưu Đày (Exiles)', desc: 'Cám ơn Người Bảo Vệ (Phần chỉ trích) vì ý định tốt đằng sau nó. Yêu cầu nó lùi lại để Bản Thể (Self) của bạn tiến vào an ủi dứt điểm căn nguyên yếu đuối bên trong.' }
      ],
      conclusion: 'Khi bản đồ IFS được thiết lập, nội tâm không còn là bãi chiến trường. Mọi cảm xúc xấu xí nhất đều có quyền ngồi vào bàn họp đại hội cổ đông để được thấu hiểu.'
    }
  },
  {
    id: '104',
    title: '[04] Bản Đồ Điểm Lựa Chọn (Choice Point) Từ Trị Liệu ACT',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Liệu pháp Chấp nhận & Cam kết • Kỹ thuật mỏ neo',
    readTime: '22 Phút đọc',
    excerpt: 'Ngừng việc cố gắng xua đuổi điều tiêu cực. Sử dụng mô hình mũi tên phân nhánh để sống với nỗi đau nhưng vẫn hành động hiệu suất.',
    bannerGradient: 'from-brand-orange to-[#cc5e00]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Bạn chờ đợi "khi nào hết buồn, hết sợ hãi, hết trì hoãn thì mới bắt đầu làm việc/sống tiếp". Nỗi đau tinh thần trở thành một rào chắn hoàn toàn đường tiến thân.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Quy luật tâm lý học nghịch lý (Ironic Process Theory) chứng minh: Càng cố không nghĩ về con voi màu hồng, não càng phóng đại nó. Việc tiêu tốn 80% năng lượng sống chỉ để "muốn quét sạch nỗi buồn" khiến bạn rơi vào hố đen Trọng Lực (Stuck-ness), phần đời còn lại bị hoang phế.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Sử dụng Sơ Đồ Điểm Lựa Chọn (The Choice Point) từ Liệu pháp ACT (Acceptance and Commitment Therapy). Mô hình này chia thực tại làm ngã ba đường. Cảm xúc tiêu cực là hằng số vật lý (không thể xóa). Nhiệm vụ của hệ thống là mở rộng "không gian chứa" chúng, trong khi chân tự động rẽ sang nhánh Mũi Tên Cam Kết mang tính xây dựng.',
      steps: [
        { num: 1, title: 'Nhận Diện "Cái Móc Câu" (The Hook)', desc: 'Khi sự kiện xảy ra, một suy nghĩ thảm họa (Ví dụ: Mình kém cỏi) quăng ra như cái móc câu đoạt mệnh. Xác định khoảnh khắc não bộ bị "mắc câu" (Hooked) và nhận thức mờ đi.' },
        { num: 2, title: 'Drop Anchor (Thả Mỏ Neo Xúc Giác)', desc: 'Ép gót chân sát xuống sàn nhà, đẩy mạnh cột sống vào lưng ghế. Hít thở sâu và nhận diện không gian xung quanh vật lý. Neo đậu hệ thống vào thời Không hiện tại thay vì bị Hook kéo tuột về quá khứ.' },
        { num: 3, title: 'Gỡ Rối Ý Nghĩ (Defusion Module)', desc: 'Không cần cãi lý với ý nghĩ tiêu cực. Đổi cấu trúc từ vựng: "Tôi vô dụng" thành "Tôi nhận thấy mình ĐANG CÓ SUY NGHĨ RẰNG tôi vô dụng". Khoảng trống tâm lý được mở tung.' },
        { num: 4, title: 'La Bàn Giá Trị (Values Clarification)', desc: 'Tra soát lại Hệ Giá trị (Values) cốt lõi của bạn ngay tại Điểm Lựa Chọn (Choice Point). Việc bạn đang định bỏ cuộc có phản bội lại Hình ảnh con người lớn lao mà bạn muốn hướng đến không?' },
        { num: 5, title: 'Hành Động Away/Toward (Nghịch Chiều Ám Cảm)', desc: 'Thực hiện 1 hành động cực nhỏ (Toward) khớp với Value ở bước 4. Cho phép cảm giác Sợ Hãi/Buồn bã Nằm Im trên vai áo bạn cùng bước đi thực hiện Task đó.' }
      ],
      conclusion: 'Mô hình ACT chặt đứt ảo vọng "phải sống không âu lo". Trạng thái thượng tôn nhất của sinh vật bậc cao là: Đau đớn đến tột cùng, nhưng vẫn thực thi các hành động kiến tạo vĩ đại.'
    }
  },
  {
    id: '105',
    title: '[05] Bản Đồ Cơ Thể Somatic (Somatic Mapping): Xả Tắc Nghẽn Thần Kinh',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Trị liệu Somatic • Trí tuệ thân thể',
    readTime: '17 Phút đọc',
    excerpt: 'Cảm xúc kẹt lại trong mô cơ bắp dưới hình thức sự co thắt vật lý. Để giải mã cảm xúc, rà quét hệ thống Soma là kỹ thuật bắt buộc.',
    bannerGradient: 'from-brand-blue to-[#1a627a]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Bạn tham gia đủ các lớp trị liệu trò chuyện (Talk Therapy), có kiến thức tâm lý uyên thâm, hiểu rành rọt vấn đề của bản thân, nhưng cơ thể vẫn đau nhức, cổ vai gáy đóng băng và vẫn bùng nổ khi gặp một chuyện trái ý.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Cuốn sách "The Body Keeps The Score" chỉ ra: Trí nhớ về tổn thương không lưu luyến trên vỏ não ngôn từ, nó bị khóa cứng trong lớp mô cơ (Fascia) dưới dạng báo động sinh tồn. Giải quyết rối loạn chỉ bằng cách "nói chuyện" và "suy nghĩ" giống như dùng phần mềm đi sửa hỏng hóc của phần cứng máy chủ.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Khung tiếp cận Trị liệu Thân thể (Somatic Experiencing) do Peter Levine phát triển. Phương pháp này đưa ý thức dịch chuyển có hệ thống qua các khối tắc nghẽn vật lý trong cơ thể, dùng cơ chế rùng mình/Co giật phi logic để phóng thích nguồn động năng thất thoát.',
      steps: [
        { num: 1, title: 'Felt Sense (Đánh Cảm Quan Cốt Lõi)', desc: 'Rời bỏ mạch suy nghĩ "Tại sao chuyện đó lại tồi tệ". Nhắm mắt lại và dùng não bộ thả một lưới quét thân thể. Phát hiện ra sự Căng cứng, Nóng ran, Ráp lạnh ở cụm cơ bắp nào?' },
        { num: 2, title: 'Pendulation (Dao Động Con Lắc)', desc: 'Không nhìm sâu vào chỗ đau tức thì (sẽ gây quá tải Flooding). Di chuyển ý thức qua lại giữa điểm Căng Cứng (Vùng đau) và một điểm hoàn toàn Dễ Chịu, Thả lỏng trên gót chân/ngón tay (Vùng an toàn).' },
        { num: 3, title: 'Titration (Nhỏ Giọt Hóa Học Tâm Chí)', desc: 'Tiếp cận vùng đau từng luồng siêu nhỏ (giống như chiết xuất dung dịch hóa học từng giọt). Khi cảm thấy sợ hãi dâng lên, ngắt kết nối ngay lập tức để hệ thần kinh có thời gian tiêu hóa mẻ data đó.' },
        { num: 4, title: 'Completion of Responses (Cơ Chế Khởi Hành Vi Chống Phóng)', desc: 'Nếu trong quá khứ bạn từng bị bất động vì sợ (Freeze). Hãy để cơ thể tự nguyện tạo ra động tác Đẩy đẩy tay, Chạy tại chỗ... để hoàn thành nốt chuỗi hành vi Tự vệ đã bị kẹt đứng năm xưa.' },
        { num: 5, title: 'Somatic Discharge (Phóng Thích Hệ Sinh Lý)', desc: 'Khi cảm cú báo động vỡ, có thể sẽ xuất hiện sự Rung rẩy, Khóc nấc, Thở dốc, Ợ hơi hay Nóng sực cơ thể. Mở van cho quá trình tự nhiên thanh tẩy thân xác kết thúc.' }
      ],
      conclusion: 'Khung Somatic biến cơ thể thành cánh cửa lõi thay vì trí não. Nỗi đau được vắt kiệt qua mồ hôi và các bó cơ nhả thắt, chứ không phải qua hàng giờ phân tích tự đánh xẩm lý tưởng.'
    }
  },
  {
    id: '106',
    title: '[06] Gỡ Lỗi Niềm Tin Tối Hậu Qua Sổ Tay Toán Học REBT (Mô Hình ABCDE)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Trị liệu cảm xúc hành vi rành mạch • Albert Ellis',
    readTime: '21 Phút đọc',
    excerpt: 'Cảm xúc tồi tệ không sinh ra từ biến cố. Nó sinh ra từ NGUYÊN TẮC LUẬT LỆ (Beliefs) vô lý mà bạn ép lên biến cố đó. Tấn công thuật toán này.',
    bannerGradient: 'from-brand-orange to-[#c76500]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Một người bị sếp chê trách, họ sụp đổ, cảm thấy mình là kẻ bỏ đi và muốn tự tử. Người khác gặp tình huống y hệt, họ hậm hực 10 phút sau đó đi tìm quy trình khắc phục lỗi.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Nếu bạn tin rằng "Sự kiện X" trực tiếp gây ra "Nỗi đau Y", bạn sẽ mãi mãi làm nô lệ cho khách quan bên ngoài môi trường cày xéo. Rẽ nhánh sai trong bộ phân tích niềm tin tự động sẽ khiến toàn bộ dự án cuộc đời bị đục ruỗng bởi sự hoang mạc hóa trầm cảm.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Mô hình ABCDE thuộc Liệu Pháp Cảm Xúc Hành Vi Hợp Lý (REBT) do bác sĩ Albert Ellis thiết kế. Nó tước bỏ ảo tưởng nạn nhân bằng một Sơ Đồ Định Tuyến rõ ràng: Không phải (A) Sự kiện gây ra (C) Đau khổ. Chính cái (B) Khối Niềm tin vô thức trung gian đã phiên dịch (A) thành thảm họa. Bạn phải dùng (D) Biện bác để chặt đứt mắt xích này.',
      steps: [
        { num: 1, title: 'A - Activating Event (Bản Ghi Sự Kiện Khách Quan)', desc: 'Lập biên bản khách quan 100% như camera an ninh. Ví dụ: "Anh ta đọc tin nhắn 3 tiếng chưa trả lời." Không xen lẫn cảm xúc nhận xét "Anh ta khinh tôi" tại đây.' },
        { num: 2, title: 'C - Consequence (Khoanh Vùng Hậu Quả)', desc: 'Lấy mẫu cảm xúc và hành vi bị thối rữa xuất phát. Cảm xúc: Tức giận, Bẽ bàng. Hành vi: Gửi liền 5 tin nhắn chửi rủa phá nát cấu trúc lịch sự quan hệ.' },
        { num: 3, title: 'B - Beliefs (Lôi Niềm Tin Phi Lý Ra Sáng)', desc: 'Lỗ hổng cốt lõi. Hãy tìm những từ khóa Must/Should (Phải/Nên). Niềm tin ngầm: "Tất cả mọi người PHẢI trả lời mình ngay lập tức nếu tôn trọng mình".' },
        { num: 4, title: 'D - Dispute (Tranh Biện Cực Giác Quan Triệt Tiêu)', desc: 'Đóng vai Công Tố Viên phản biện. "Luật nào quy định tất cả phải trả lời ngay?", "Bằng chứng khách quan nào nói trả lời chậm là khinh gét?". Tấn Lực nã pháo vào cái B vô lý.' },
        { num: 5, title: 'E - Effective New Philosophy (Triết Lý Lắp Ráp Mới)', desc: 'Tái tạo hệ thống luận điểm linh hoạt: Mình MUỐN (không phải PHẢI) người ta trả lời sớm, nhưng nếu bận họ có thể trả lời trễ. Sự thất vọng khi này được hạ tông thành Cảm Giác Không Vui Vi Mô.' }
      ],
      conclusion: 'Hệ thống REBT không xóa bỏ buồn rầu, nó dập tắt các cảm xúc Phi Hợp Lý Độc Hại. Bạn sẽ vẫn có thể bực bội, nhưng là sự bực bội trong tính Toán Học của lý trí thay vì Cơn Thét Gào của ảo não.'
    }
  },
  {
    id: '107',
    title: '[07] Bảng Điều Khiển Hormone Hạnh Phúc Vi Mô (D.O.S.E Dashboard Hacking)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Dược lý thần kinh • Sinh hóa học',
    readTime: '19 Phút đọc',
    excerpt: 'Hạnh phúc không phải là Cảm giác bay bổng thi ca. Hạnh phúc là sự tiêm tiết có định hướng cấu trúc 4 loại hóa chất thần kinh trong não tủy tủy.',
    bannerGradient: 'from-brand-blue to-[#0e5c6b]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Cuộc sống đầy rẫy đủ tiện nghi vật chất đồ sộ nhưng nội tâm mục rỗng, uể oải, mất động lực phấn đấu kéo dài. Dùng các nguồn kích thích chớp nhoáng (Game, Phim ảnh, Rượu bia) không bù đắp được hố sâu.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Cố gắng truy tìm "Ý nghĩa nhân sinh vĩ đại" khi mạch hóa chất não bộ khô cạn chỉ là trò cưỡi ngựa xem hoa. Khi các hóa chất hệ thần kinh cạn kiệt đáy băng giá, hiện tượng Đốt Ngắn Mach Giao Cảm (Burnout) sẽ tàn phế hóa sự sinh trưởng của sức làm việc tương lai.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Cung cấp bản thiết kế Giải Phẫu Chụp Cắt Mạch (Hacking the DOSH). Quản lý ngân quỹ Vi-Hóa Chất Chủ Đạo của não: D (Dopamine - Động lực), O (Oxytocin - Gắn kết), S (Serotonin - Kiêu hãnh bản thể), E (Endorphins - Giảm đau).',
      steps: [
        { num: 1, title: 'Audit Hệ Dopamine (Động Lực Phần Thưởng)', desc: 'Khi não chệch choạng lười biếng. Nhấn nút tạo Ra 1 Khâu Hoàn Thành Cực Ngắn (Check 1 Ticked Box). Chạy Micro-goals (Chia dự án ra 20 task vụn để lấy 20 lần khoái cảm Hoàn Thành Nhỏ).' },
        { num: 2, title: 'Audit Oxytocin (Hệ Thống Giao Dịch Niềm Tin)', desc: 'Khi cảm thấy Lẻ Loi Tức Tối Trông Vắng. Không cần đi tụ tập Bar Bọt ồn ã. Hệ thống chỉ cần cái ôm xiết mạnh tột đỉnh cơ bắp trên 20 giây với vật sống / người để kích xả hóa chất xoa dịu Paranoia (Đa nghi).' },
        { num: 3, title: 'Audit Serotonin (Bảo Chứng Vị Thế Nhóm Lý Tưởng)', desc: 'Hồi Ức Chiến Thắng. Tới lúc mất Tự Tin bẽn lẽn. Giao thức nhắm mắt mường tượng vạch rõ khoảnh khắc Thành Công năm xưa. Serotonin tiết ra dù hiện tại đang khốn cục đục nát.' },
        { num: 4, title: 'Audit Endorphins (Phá Băng Giả Cơ Đau)', desc: 'Tình trạng Buồn Bã Cắm Chốt Nút Tắt. Ráp quy trình cọ sát cường độ cao bạo lực: Cầm quả ớt cắn một miếng cay nổ mắt (Gây đau thực thể), hoặc Hét Lớn, Xem Clip Hài Hước Cười Phá Ra Khí. Cơ thể xả thuốc giảm đau bọc lót tinh binh.' },
        { num: 5, title: 'Ma Trận Detox Chặn Dòng Thủy Huyết Giả Tạo', desc: 'Nhịn mạng xã hội (Dopamine Fasting) định kỳ 24h để thiết lập lại giới hạn nhạy cảm (Baseline Receptor) của não. Không mượn hóa chất tổng hợp điện thoại bù đắp lỗ thông thiên sinh học.' }
      ],
      conclusion: 'Ngưng huyền bí hóa Cảm Xúc bằng từ ngữ Tôn Giáo trừu tượng. Nắm tay vững cần gạt điều tiết sinh hóa học này, bạn biến Bộ Não thành Phòng Nghiên Cứu Điều Lệnh Tự Thân Phục Mệnh Xuất Sắc Nhất.'
    }
  },
  {
    id: '108',
    title: '[08] Giải Phẫu Cấu Trúc Mặt Nạ Đè Nén Yếu Ớt (Emotional Suppression Map)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Trầm cảm che giấu • Smiling Depression',
    readTime: '24 Phút đọc',
    excerpt: 'Làm việc năng suất ban ngày, là thiên thần trước tập thể nhưng sụp nát rã rời cõi tối đen ban đêm. Tháo lõi tảng băng Mặt Nạ Tươi Cười.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Xã hội lập trình "Hãy suy nghĩ tích cực lên!". Bạn luôn tỏ ra ổn thỏa mạnh mẽ xuất trúng, giấu chặt những đớt đớn gục đổ sau lưng vì sợ sự chối bỏ, chê cười (Invalidation) của bè bạn đội nhóm.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Việc nén lò xo (Suppression) năng lượng xúc cảm (thay vì xả hóa) tiêu phí một lượng khổng lồ Băng Thông Nhận Thức (Cognitive Bandwidth). Hội chứng Trầm Cảm Cười (Smiling Depression) sẽ đẩy mức rủi ro đứt đoạn tim mạch và Tự Kích Vẫn Lên Cao Đại Vực, vì không mảnh Radar nào của Hệ Thống bắt tín hiệu cảnh khẩn bạn.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Cải tổ lại khái niệm Tích Cực Độc Hại (Toxic Positivity). Việc tạo ra Không Gian Chứa Nạp Cảm Xúc Lỗi (Containment Framework) để vỡ đê chậm rãi là kỹ năng tinh vi bắt rễ lõi mạch sống kiên cường.',
      steps: [
        { num: 1, title: 'Tước Bỏ Vỏ Bọc Tích Cực Độc Hại', desc: 'Khoanh mác cống nạp từ. Thay vì Tự Cưỡng "Hủy Bỏ Lo Âu Nào", Cập Nhật Data: "Lo Âu Hiện Hữu Ngay Dưới Da Mạch, Nó Không Quật Ngã Tư Cách Sống Đời Tôi Của Mảnh Thời Điểm Này".' },
        { num: 2, title: 'Phân Phối Lịch "Worry Time" Vô Khuẩn (Hộp Thời Gian Buồn Phục Dịch)', desc: 'Dành Lãnh Điểm 15 Phút Hủy Chấp (Vú dụ 8h tối). Lúc này cho phép Não Tủy tự do Sáng Tác Thảm Kịch Góc Tối Đen Mịt Cáu Trách Bất Bình Trào Vọt. Cấm đem Box Cảm Xúc Rác Vãi rỉ 23 Tiếng kia của Giờ Hành Chính.' },
        { num: 3, title: 'Văn Bản Chuyển Hóa Không Khí (Externalization Journaling)', desc: 'Sự bức bí bốc hơi khi Ngôn Từ Hiện Khối Rắn Chạm Chữ Lên Nền Giấy Góc. Sử dụng Freewriting (Bút Tự Chạy), Ngắt Lọc Mọi Sự Rờn Xét Cầu Kì Logic. Chỉ Nháp Đảo Văng Nọc Cáu Ra Mặt Cong.' },
        { num: 4, title: 'Giao Nhận Vulnerability Cấp Độ Rào Khoen Xích Bọc Nhỏ', desc: 'Mở Cửa Khép Hờ Khe Xáng Chói Nổi: Hãy Thử 1 Lần Trả Lời "Thật Sự Giai Đoạn Đang Khó Khăn Chới Với Lắm" Thay Vì "Mọi Thứ Rất Fine Chuẩn Nhất" Với 1 Cột Trụ Lõi Xã Giao Thân Tình Uy Tín Phân Lập.' },
        { num: 5, title: 'Mạch Hoàn Chấp Nhận (Radical Acceptance Lộ Diện Kín)', desc: 'Trái Bóng Dìm Xuống Càng Sâu Nảy Dội Vùng Vằng Càng Vọt Cao Ác Liệt Khó Tản Cầm. Xoải Bàn Tay Để Nỗi Suy Vọng Hụt Kế Hoạch Hiện Rõ Ở Nền Phòng Mà Không Truy Cứu Truy Tội Bản Thân Nhũn Đuối Trọng Khí Lực.' }
      ],
      conclusion: 'Yếu đuối là Mã Khóa Code Tối Mật Chứng Nhận Bạn Cấu Thành Từ Nhựa Sống Huyết Thanh Hữu Cơ Người. Chấp Nhận Nó Mới Là Chiếc Mác Mạnh Mẽ Siêu Việt Lụi Cả Tường Đồng Vực Sâu Tinh Thần.'
    }
  },
  {
    id: '109',
    title: '[09] Ranh Giới Năng Suất (Productivity Boundaries): Che Chắn Hệ Thần Kinh Siêu Nhạy Cảm (HSP)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Highly Sensitive Person • Khoanh vùng bảo hộ',
    readTime: '21 Phút đọc',
    excerpt: 'Người Nhạy Cảm Cao (HSP) xử lý data cảm xúc gấp 5 lần người thường nên rất bốc hỏa cháy kiệt. Vi tính hóa lưới bọc chống Shock màng nhĩ tinh thần.',
    bannerGradient: 'from-brand-blue to-[#0a3845]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Bạn cực kỳ dễ bị quá tải (overwhelmed) bởi tiếng ồn mỏng, ánh sáng gắt, sự khó chịu của người khác găm vào. Cố gắng cày cuốc liên tục như bao kẻ khác nhưng kết cục là sự suy nhược tan hoang cả cơ thể.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: 20% dân số là Người Nhạy Cảm (HSP - Highly Sensitive Person). Lưới lọc kích thích của bạn rách bươm do di truyền hệ thần kinh. Cố sống ép theo chuẩn Work-Hustle Culture của não bộ bình dân, bạn sẽ chịu chấn thương màng rỗng triền miên đứt dẫn truyền liên tảng.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Lắp đặt Bộ Ranh Giới (Boundaries Setting Toolkit) cứng ngạnh. Bạn cần một Thiết chế Quân Trọng Vệ Hàng Rào Chắn Lũ chứ không phải kỹ năng Tự Kỉ Xoa Bóp mộng mơ hão.',
      steps: [
        { num: 1, title: 'Màng Lọc Dây Chuyền Hấp Thụ Năng Lượng Thừa (Energy Sponge)', desc: 'Xác Định Cột Đèn Ranh Giới Nhạy Cảm: "Tôi Không Phải Mút Hút Bụi Quét Bờ Đau Cho Mọi Gã Cáu Gắt Đời Nguyền Đi Ngang Xuyên Qua Mặt". Đóng Màn Tường Vật Lý Tưởng Tượng Tránh Chệch Bão Bay Vướng Khối Rìa Cận.' },
        { num: 2, title: 'Bế Quan Tỏa Cảng Vi Mô Liên Hồi', desc: 'Não HSP Sôi Sục Quá Tái Chảy Thép Nhuyễn Nhang Khói. Xen Trạm Ống Thông Khí Rỗng Cuối Quý: Cứ 120 Phút Làm Việc, Ép Mắc Rút Lên Trốn Nền Vắng Nhà Tắm Gốc Đứng Chết Lặng Đắm Nhánh 5 Phút Khóa Tròng Liên Quan Toàn Vật Khí.' },
        { num: 3, title: 'Giao Thức Thoát Hiểm Khi Hội Nhóm Tụ Đoản Sập Nguồn Náo Nhiệt', desc: 'Có Quy Luật Exit Cắt Cửa Sau Trong Lịch Họp Gia Đình Hay Tiệc Nhậu: Cho Phép Thiết Lập Thẻ Tự Thưởng Lui "Cục Bộ Mất Năng Lượng Đột Đứt Không Báo Trước Vì Chuyện Tư" Mà Không Cần Đệ Trình Ban Xứ Đánh Giá Tính Nóng.' },
        { num: 4, title: 'Thương Lượng Chênh Lệch Biên Độ Cảm Ứng Bề Nổi (Sensory Boundaries)', desc: 'Quyền Quản Trị Cõi Giác Quan Tối Ưu Tối Thượng Thẳng Tay: Đeo Đồ Lọc Ống Chắn Tiếng, Ngắt Notification Chớp Hiện Giật Gân Giao Diện Nền Điện Toại. Quyền Hạn Đẳng Cấu Xây Nền Trắng Đục Rỗng Tịnh Không Góc Cuộc Rát Căng Xương Góc Thép Đứng Vững Bạt Sương Trăm Phương Quắt.' },
        { num: 5, title: 'Nền Khai Thác Sức Định Phản Xạ Kì Quan Đáy Rừng Siêu Độ Trực Giác Lõi', desc: 'Siêu Cảm Độ Không Chỉ Yếu, Nó Nhạy. Xoay Trục Mật Độ Cao Ứng Cứu Độ Tinh Xảo Nghệ Thuật Lên Ngôi Cán. Nơi Khác Vỡ Không Nẵm Thấy Cát Hột Ti Bụi Thẩm Thấu Nhanh Vi Điệu Giới Định Vách Trong Veo Bám Sâu Tính Thể.' }
      ],
      conclusion: 'Sự nhạy cảm không phải lỗi Kỹ Thuật Đúc Ngành Mẻ Kém Hụt Vốn Cục Pin Hộp Kim Nhân Dạng Tuồng. Trát Viền Xây Trọn Biên Khu Biên Giới Kín Của Đất Thánh Cung Nội Cõi Nhìn Xoáy Ngang Tâm Tỏa Rực Vút Lệnh Tiên Tước Thắng Ngôi Bản Sống.'
    }
  },
  {
    id: '110',
    title: '[10] Tái Thiết Lập Hệ Thống Sau Chấn Thương (Post-Traumatic Growth Model)',
    category: 'Quản Trị Cảm Xúc',
    metaInfo: 'Sang chấn tâm lý • Phát triển hậu khủng hoảng',
    readTime: '25 Phút đọc',
    excerpt: 'Khủng hoảng tàn phá khối kiến trúc cũ của bạn. Tái thiết lập lại nó không phải là quay về số 0, mà là xây dựng khối cấu trúc hợp kim vĩ đại hơn.',
    bannerGradient: 'from-brand-orange to-[#c56d00]',
    content: {
      intro: '**VẤN ĐỀ (PROBLEM)**: Một sự cố đau buồn khổng lồ ập đến (Mất việc, Phá sản, Ly hôn, Người thân qua đời). Thế giới quan cũ an toàn bị giật sập. Bạn kẹt lại dưới đống đổ nát của ảo tưởng và niềm tin, không cách nào ngóc đầu dậy.\n\n**HỆ LỤY KHUẤY ĐỘNG (AGITATION)**: Ám ảnh bởi chấn thương khiến não bộ luôn kích hoạt cơ chế Tua Lại (Flashbacks) hoặc Lẩn Tránh (Avoidance). Bạn tự dán nhãn bản thân là "Hàng Hóa Hư Hỏng" (Damaged Goods), đánh mất hoàn toàn định dạng vị thế xã hội cũ, dần trượt dài vào vùng sụp đổ mãn tính không thể cứu vãn.\n\n**GIẢI PHÁP HỆ THỐNG (SOLUTION)**: Khung Phát Triển Hậu Sang Chấn (Post-Traumatic Growth - PTG). PTG học thuật khẳng định: Chấn thương không phải là hố chôn. Khi một hệ thống bị đập nát hoàn toàn, nó mở ra khoảng trống vật lý để lắp ráp một hệ điều hành mới có dải nhận thức quang phổ tàn nhẫn sắc bén và sâu sắc mà người bình thường vĩnh viễn không chạm tới được.',
      steps: [
        { num: 1, title: 'Giải Trừ Mệnh Lệnh Hồi Phục Nhanh (Toxic Resilience)', desc: 'Xóa bỏ áp lực "Phải mạnh mẽ lên ngay". Khủng hoảng là quá trình phá hủy hệ thống cần dung lượng tiêu hóa. Cung cấp Lịch Nhượng Bộ (Grace Period), cho phép vận hành ở mức 10% năng lượng sinh tồn tối thiểu thuần túy trong 30 ngày.' },
        { num: 2, title: 'Kể Lại Câu Chuyện Nhân Quả (Narrative Reconstruction)', desc: 'Sang chấn cắt đứt tính Tuyến Tính của cuộc đời. Viết lại cấu trúc câu chuyện: Ghi chép không phải dưới dạng "Tôi là nạn nhân", mà thiết lập theo mốc "Sự kiện X đã thay đổi các thông số sống buộc tôi phải tái định hướng như thế nào".' },
        { num: 3, title: 'Khoanh Vùng Biến Đổi Nghịch Lý (Paradoxical Changes)', desc: 'Hệ thống hóa 3 khoản Lợi Cực Đoan từ đáy sâu: 1. Sự thấu cảm sắc lẹm với đau khổ người khác. 2. Nhận diện rõ bản chất ai là Mạng Lưới An Toàn Tín Nhiệm Thật. 3. Sàng lọc mọi tham vọng vớ vẩn để chừa lại 1 Mục Tiêu Cốt Tủy Thật Sự.' },
        { num: 4, title: 'Hành Vi Giải Ảo Vùng An Toàn (Safety De-Programming)', desc: 'Hệ thần kinh sau sang chấn luôn báo động giả ở mọi ngóc ngách gầm giường. Lập trình lại hệ cảnh giới bằng phương pháp Chạm - Lùi (Graduated Exposure). Trở lại môi trường cũ tĩnh lặng 5 phút, rồi lùi ra. Báo với não "Không còn gì cháy nổ ở đây cả".' },
        { num: 5, title: 'Khảm Tích Tích Lũy Di Sản (Integrate into Identity)', desc: 'Không cần cắt bỏ Vết Sẹo Khủng Hoảng và vờ như nó chưa từng diễn ra (Khác nào che giấu bản thân). Đính Vết Sẹo vào CV tâm lý định danh: "Tôi là kẻ đã rơi xuống cõi chết, đập tan áp lực, và tự tay nhào nặn lại linh hồn này lần thứ hai". Kẻ tái sinh luôn đáng sợ và ưu tú nhất.' }
      ],
      conclusion: 'Đừng cầu nguyện cuộc đời không sóng gió, nó là điều vô ích. Việc cấu hình thành công Hệ Thống PTG sẽ trang bị cho bạn chiếc giáp sát lụi mọi ngục tù, nâng tầm bạn lên thành vị cứu tinh cho những sinh thể vỡ vụn phía sau đang khẩn thiết xin dẫn đường.'
    }
  }
];
