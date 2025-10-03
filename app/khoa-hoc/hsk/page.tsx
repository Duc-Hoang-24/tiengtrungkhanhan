'use client'
import React from 'react'

const hsk = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 sm:p-6 space-y-12'>
      {/* HSK 1-3 */}
      <div className='w-full max-w-5xl flex flex-col sm:flex-row items-center gap-6 p-3 bg-white rounded-xl shadow-md'>
        <img 
          src="/hsk123.png" 
          alt='HSK 1-3' 
          className='w-full sm:w-1/3 h-auto object-contain'
        />
        <div className='w-full sm:w-2/3 flex flex-col'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-amber-800 text-center sm:text-left'>
            🌟 KHÓA HỌC CHO NGƯỜI MỚI (0-HSK3) 🌟
          </h1>
          <p className='mt-3 text-black'>
            Bạn chưa biết gì về tiếng Trung nhưng muốn nhanh chóng giao tiếp tự tin và thi được HSK3?
            Khóa học này chính là dành cho bạn!
          </p>
          <h3 className='text-xl font-bold mt-4 text-black'>
            📚 Nội dung khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Học từ vựng theo chủ đề thực tế (600+ từ).<br/>
            _ Nắm vững các điểm ngữ pháp trọng tâm: từ cấu trúc câu cơ bản, trật tự từ, động từ năng nguyện, trạng từ, lượng từ – số từ, so sánh, liên từ nối câu… đến các mẫu nâng cao của HSK3 như 把, 被.<br/>
            _ Luyện nghe – nói – đọc – viết toàn diện theo chuẩn giáo trình HSK.
          </p>

          <h3 className='text-xl font-bold mt-4 text-black'>
            🎯 Kết quả sau khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Tự tin giao tiếp trong đời sống hằng ngày.<br/>
            _ Viết – đọc được những đoạn văn ngắn cơ bản.<br/>
            _ Thi đỗ chứng chỉ HSK3 một cách chắc chắn.
          </p>
          <div className='mt-3 text-black'>
            <b className='font-bold'>⏳ Thời Lượng:</b>
            <b>60 buổi (1 buổi/90 phút)</b>
          </div>
          <p className='mt-2 text-black'>
            👉 Hãy bắt đầu hành trình tiếng Trung của bạn ngay hôm nay!
          </p>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Khóa Học Cho Người Mới.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='mt-4 py-3 px-6 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.02] transition transform w-full sm:w-auto self-center sm:self-start'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>

      {/* HSK 4 */}
      <div className='w-full max-w-5xl flex flex-col sm:flex-row-reverse items-center gap-6 p-3 bg-white rounded-xl shadow-md'>
        <img 
          src="/hsk4.png" 
          alt='HSK 4' 
          className='w-full sm:w-1/3 h-auto object-contain'
        />
        <div className='w-full sm:w-2/3 flex flex-col'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-amber-800 text-center sm:text-left'>
            🌟 KHÓA HỌC TIẾNG TRUNG HSK4 🌟
          </h1>
          <p className='mt-3 text-black'>
            Bạn đã có nền tảng HSK3 và muốn nâng cao khả năng tiếng Trung để giao tiếp thành thạo hơn, mở rộng cơ hội học tập – công việc? Khóa HSK4 sẽ giúp bạn tiến xa hơn!
          </p>
          <h3 className='text-xl font-bold mt-4 text-black'>
            📚 Nội dung khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Mở rộng vốn từ lên 1200+ từ, luyện tập sâu hơn 4 kỹ năng.<br/>
            _ Ngữ pháp trọng tâm: câu phức, mệnh đề quan hệ, trạng ngữ, liên từ nâng cao, cách diễn đạt nguyên nhân – điều kiện – giả thiết.<br/>
            _ Luyện đọc – viết đoạn văn dài, nâng cao khả năng biểu đạt suy nghĩ.<br/>
            _ Thực hành nghe – nói trong nhiều tình huống thực tế và học thuật.
          </p>
          <h3 className='text-xl font-bold mt-4 text-black'>
            🎯 Kết quả sau khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Giao tiếp trôi chảy, trình bày quan điểm mạch lạc bằng tiếng Trung.<br/>
            _ Đọc hiểu và viết được bài văn khoảng 400–500 chữ.<br/>
            _ Tự tin chinh phục kỳ thi HSK4 và sử dụng trong môi trường học tập – làm việc quốc tế.
          </p>
          <div className='mt-3 text-black'>
            <b className='font-bold'>⏳ Thời Lượng:</b>
            <b>45 buổi (1 buổi/90 phút)</b>
          </div>
          <p className='mt-2 text-black'>
            👉 Đây chính là bước đệm vững chắc để bạn hướng đến HSK5 và cao hơn!
          </p>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Khóa Học Tiếng Trung HSK4.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='mt-4 py-3 px-6 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.02] transition transform w-full sm:w-auto self-center sm:self-start'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>

      {/* HSK 5 */}
      <div className='w-full max-w-5xl flex flex-col sm:flex-row items-center gap-6 p-3 bg-white rounded-xl shadow-md'>
        <img 
          src="/hsk5.png" 
          alt='HSK 5' 
          className='w-full sm:w-1/3 h-auto object-contain'
        />
        <div className='w-full sm:w-2/3 flex flex-col'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-amber-800 text-center sm:text-left'>
            🌟 KHÓA HỌC TIẾNG TRUNG HSK5 🌟
          </h1>
          <p className='mt-3 text-black'>
            Bạn đã hoàn thành HSK4 và muốn vươn đến trình độ tiếng Trung cao hơn, sử dụng trong học thuật và công việc chuyên nghiệp? Khóa HSK5 sẽ là bước ngoặt quan trọng cho bạn!
          </p>
          <h3 className='text-xl font-bold mt-4 text-black'>
            📚 Nội dung khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Nâng vốn từ vựng lên 2500+ từ, luyện 4 kỹ năng ở mức cao.<br/>
            _ Ngữ pháp nâng cao: câu phức đa tầng, lối diễn đạt văn viết, thành ngữ, cấu trúc tu từ.<br/>
            _ Luyện nghe – nói trong các tình huống thảo luận, thuyết trình, phỏng vấn.<br/>
            _ Đọc hiểu bài báo, tiểu luận, truyện ngắn; viết văn bản học thuật, luận điểm rõ ràng.
          </p>
          <h3 className='text-xl font-bold mt-4 text-black'>
            🎯 Kết quả sau khóa học
          </h3>
          <p className='mt-2 text-black'>
            _ Giao tiếp trôi chảy, biểu đạt ý kiến sâu sắc bằng tiếng Trung.<br/>
            _ Đọc hiểu văn bản dài, phân tích được nội dung phức tạp.<br/>
            _ Viết bài luận 800 chữ trở lên.<br/>
            _ Thi đỗ chứng chỉ HSK5, đủ năng lực học tập, làm việc bằng tiếng Trung.
          </p>
          <div className='mt-3 text-black'>
            <b className='font-bold'>⏳ Thời Lượng:</b>
            <b>45 buổi (1 buổi/90 phút)</b>
          </div>
          <p className='mt-2 text-black'>
            👉 Đây chính là chìa khóa để bạn chinh phục HSK6 và đạt trình độ tiếng Trung gần như người bản xứ!
          </p>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Khóa Học HSK5.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='mt-4 py-3 px-6 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.02] transition transform w-full sm:w-auto self-center sm:self-start'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default hsk