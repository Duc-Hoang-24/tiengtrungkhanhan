'use client'
import React from 'react'
import AutoplayVideo from '../video_khoa1-1/page';

const khoa11 = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 sm:p-6'>
      <div className='space-y-6'>
        {/* Image */}
        <img 
          src="/khoa1.png" 
          alt='Khóa 1-1' 
          className='w-full h-auto rounded-xl border-2 border-amber-500 lg:w-full lg:h-120'
        />

        {/* Title */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 text-center'>
          ✨ Khóa học Tiếng Trung 1–1 ✨
        </h1>

        {/* Intro paragraph */}
        <p className='text-black text-center max-w-3xl mx-auto'>
          Dành cho những bạn muốn học theo lộ trình cá nhân hóa, tập trung đúng nhu cầu: giao tiếp, thi HSK hay phục vụ công việc.
        </p>

        {/* Advantages */}
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <h3 className='text-xl sm:text-2xl font-bold text-black'>
            📌 Ưu điểm:
          </h3>
          <p className='text-black'>
            _ Giáo viên kèm riêng 100%, chỉnh phát âm & ngữ pháp trực tiếp.<br/>
            _ Lộ trình thiết kế linh hoạt, phù hợp mục tiêu của từng học viên.<br/>
            _ Tiến bộ nhanh, chắc kiến thức, phản xạ tự nhiên.
          </p>

          <h3 className='text-xl sm:text-2xl font-bold text-black'>
            👉 Lựa chọn khóa 1–1 để học hiệu quả hơn và đạt kết quả đúng như mong muốn!
          </h3>

          <h3 className='text-xl sm:text-2xl font-bold text-green-600'>
            🎁 Tặng kèm giáo trình + tư vấn lộ trình học thi HSK hoặc giao tiếp miễn phí!
          </h3>

          <h3 className='text-xl sm:text-2xl font-bold text-black'>
            🎉 Ưu đãi học phí đặc biệt
          </h3>
          <p className='text-black'>
            _ Học phí: 260.000đ/buổi (90 phút).
          </p>

          <h4 className='text-lg sm:text-xl font-bold text-black'>
            Ưu đãi khi đăng ký gói học:
          </h4>
          <p className='text-black'>
            _ Đăng ký 30 buổi → Tặng ngay 2 buổi học miễn phí.<br/>
            _ Đăng ký 50 buổi → Tặng ngay 5 buổi học miễn phí.
          </p>

          <h3 className='text-xl sm:text-2xl font-bold text-black'>
            👉 Càng đăng ký nhiều buổi, càng tiết kiệm chi phí và nhận thêm nhiều giá trị học tập!
          </h3>
        </div>

        {/* CTA Button */}
        <div className='flex justify-center mt-6'>
          <button 
            onClick={() => {
              const prefilledText = encodeURIComponent("Xin chào Tiếng Trung Khánh An, tôi muốn biết thêm thông tin về Khóa Học Tiếng Trung 1-1.");
              const url = `https://m.me/111525371864793?text=${prefilledText}`;
              window.location.href = url;
            }}
            className='py-3 px-8 text-lg font-extrabold text-red-900 border-2 border-red-900 rounded-lg hover:opacity-80 hover:scale-[1.03] transition transform w-full sm:w-auto max-w-xs'
          >
            Đăng ký ngay
          </button>
        </div>

        {/* Video */}
        <div className='mt-8'>
          <AutoplayVideo />
        </div>
      </div>
    </div>
  )
}

export default khoa11