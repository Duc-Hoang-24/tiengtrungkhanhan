'use client'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

const giaotiep = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 sm:p-6'>
      {/* Sơ Cấp 1 */}
      <div className='w-full max-w-5xl flex flex-col sm:flex-row items-center gap-6 mt-10 p-4 bg-white rounded-xl shadow-md'>
        <img 
          src={`${baseUrl}/books/socap1.png`} 
          alt='Sơ Cấp 1' 
          className='w-full sm:w-1/3 h-auto object-contain'
        />
        <div className='w-full sm:w-2/3 flex flex-col'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 text-center sm:text-left'>
            🌟 Lộ trình Sơ Cấp 1 🌟
          </h1>
          <h3 className='text-xl font-bold mt-4 text-black'>
            📖 Nội dung chính của tập I
          </h3>
          <p className='mt-2 text-black'>
            _ Làm quen với ngữ âm, phát âm chuẩn, luyện ngữ điệu hội thoại.<br/>
            _ Củng cố cấu trúc câu cơ bản: khẳng định, phủ định, nghi vấn.<br/>
            _ Học mẫu câu giao tiếp thực tế: chào hỏi, giới thiệu bản thân, hỏi thăm, chỉ đường, mua sắm, ăn uống.<br/>
            <b className='font-bold'>Ngữ pháp trọng tâm:</b><br/>
            _ Dùng 在 chỉ nơi chốn & hành động đang diễn ra, động từ năng nguyện (会, 能, 想), trạng từ (也, 都, 常常), lượng từ cơ bản, mẫu câu so sánh đơn giản.<br/>
            _ Rèn kỹ năng nói theo tình huống: đối thoại ngắn, hội thoại nhóm, thực hành “role play”.<br/>
            _ Mỗi bài học đều có bài luyện nghe – nói gắn với tình huống đời sống.
          </p>

          <h3 className='text-xl font-bold mt-4 text-black'>
            🎯 Kết quả đạt được
          </h3>
          <p className='mt-2 text-black'>
            _ Giao tiếp được trong các tình huống cơ bản hằng ngày.<br/>
            _ Biết cách giới thiệu, hỏi thông tin, mua bán, đặt món ăn, miêu tả đơn giản.<br/>
            _ Nắm được hệ thống ngữ pháp sơ cấp, làm nền cho 初级口语 II.
          </p>
          <p className='mt-2 text-black'>
            👉 Đây là bước khởi đầu vững chắc để bạn rèn kỹ năng nói, bổ sung cho lộ trình HSK.
          </p>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Lộ Trình Lớp Sơ Cấp 1.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='mt-4 py-3 px-6 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.02] transition transform self-center sm:self-start w-full sm:w-auto'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>

      {/* Sơ Cấp 2 */}
      <div className='w-full max-w-5xl flex flex-col sm:flex-row-reverse items-center gap-6 mt-16 p-4 bg-white rounded-xl shadow-md'>
        <img 
          src={`${baseUrl}/books/socap2.png`} 
          alt='Sơ Cấp 2' 
          className='w-full sm:w-1/3 h-auto object-contain'
        />
        <div className='w-full sm:w-2/3 flex flex-col'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 text-center sm:text-left'>
            🌟 Lộ trình Sơ cấp 2 🌟
          </h1>
          <h3 className='text-xl font-bold mt-4 text-black'>
            📖 Nội dung chính của tập II
          </h3>
          <p className='mt-2 text-black'>
            _ Mở rộng chủ đề giao tiếp: bạn bè, gia đình, trường học, công việc, du lịch.<br/>
            _ Luyện nói với đoạn hội thoại dài hơn, yêu cầu phản xạ nhanh và tự nhiên.
          </p>
          <h4 className='text-xl font-bold mt-3 text-black'>
            Ngữ pháp trọng tâm:
          </h4>
          <p className='mt-2 text-black'>
            _ Liên từ nối câu (因为…所以…, 虽然…但是…).<br/>
            _ Câu so sánh nâng cao (A 比 B…, 没有…, 越来越…).<br/>
            _ Bổ ngữ trình độ & kết quả (得, 了, 过, 看懂, 找到…).<br/>
            _ Mẫu câu gợi ý, mệnh lệnh (吧, 别, 要…了).<br/>
            _ Rèn kỹ năng kể chuyện, miêu tả sự việc, trình bày ý kiến đơn giản.<br/>
            _ Tăng cường luyện nghe – nói qua hội thoại nhóm và thảo luận ngắn.
          </p>

          <h3 className='text-xl font-bold mt-4 text-black'>
            🎯 Kết quả đạt được
          </h3>
          <p className='mt-2 text-black'>
            _ Giao tiếp tự tin trong nhiều tình huống đời sống và học tập.<br/>
            _ Biết kể lại sự việc, bày tỏ cảm xúc, diễn đạt ý kiến cơ bản.<br/>
            _ Hoàn thiện nền tảng khẩu ngữ sơ cấp.
          </p>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Lộ Trình Lớp Sơ Cấp 2.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='mt-4 py-3 px-6 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.02] transition transform self-center sm:self-start w-full sm:w-auto'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default giaotiep