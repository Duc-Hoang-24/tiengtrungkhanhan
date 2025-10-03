'use client'
import React from 'react';
import GallerySlider from './components/Photo';
import Slide from "./components/Slide";
import { HiH3 } from 'react-icons/hi2';

export default function Home() {
  return (
    <div>
      <Slide/>
      {/* Đội Nguc Giáo Viên */}
      <h1 
        className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 mt-10 mb-5 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
        >
          ĐỘI NGŨ GIÁO VIÊN
        </h1>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full mx-auto gap-1 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-12'>
        <div className=''>
            <div className='bg-yellow-100 border-2 border-yellow-500 h-auto p-1 rounded-xl hover:translate-x-2 hover:shadow-[-5px_10px_20px_rgba(0,0,0)] transition-all duration-300 ease-in-out'>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Giáo Viên Việt Nam
              </h3>
                <p 
                className='sm:text-sm md:text-md lg:text-lg text-black'
                >
                  ✅ Tốt nghiệp các khoa tiếng Trung uy tín trong và ngoài nước.<br/>
                  ✅ Có kinh nghiệm <b className='font-bold'> luyện thi HSK từ cấp 0 đến HSK5</b>.<br/>
                  ✅ Giải thích bài học dễ hiểu, kết hợp so sánh với tiếng Việt giúp học viên tiếp thu nhanh.
                </p>
            </div>  
            <div className='bg-yellow-100 border-2 border-yellow-500 h-auto mt-1 p-1 rounded-xl hover:translate-x-2 hover:shadow-[-5px_10px_20px_rgba(0,0,0)] transition-all duration-300 ease-in-out'>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Phương Pháp Giảng Dạy Hiện Đại
              </h3>
              <p 
              className='sm:text-sm md:text-md lg:text-lg text-black'
              >
                🚀 Kết hợp <b className='font-bold'> lý thuyết – thực hành – luyện đề</b>.<br/>
                ⭐ Sử dụng giáo trình chuẩn quốc tế (HSK, 发展汉语).<br/>
                💡Lớp học nhiều hoạt động tương tác: thảo luận nhóm,<br/> đóng vai tình huống thực tế, luyện kỹ năng giao tiếp tự nhiên.
              </p>
            </div>
        </div>
            
        <div className=''>
            <div className='bg-yellow-100 border-2 border-yellow-500 h-auto p-1 rounded-xl hover:translate-x-2 hover:shadow-[-5px_10px_20px_rgba(0,0,0)] transition-all duration-300 ease-in-out'>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Giáo Viên Bản Ngữ Trung Quốc
              </h3>
                <p 
                className='sm:text-sm md:text-md lg:text-lg text-black'
                >
                  ✅ Giúp học viên <b className='font-bold'> luyện phát âm chuẩn Bắc Kinh</b>.<br/>
                  ✅ Hiểu đúng ngữ điệu và văn hóa Trung Quốc.<br/>
                  ✅ Kinh nghiệm giảng dạy HSK và giao tiếp cho học viên quốc tế.
                </p>
            </div> 
          
            <div className='bg-yellow-100 border-2 border-yellow-500 h-auto mt-1 p-1 rounded-xl hover:translate-x-2 hover:shadow-[-5px_10px_20px_rgba(0,0,0)] transition-all duration-300 ease-in-out'>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Trình Độ Chuyên Môn Cao
              </h3>
              <p 
              className='sm:text-sm md:text-md lg:text-lg text-black'
              >
                🚀 Đa số giảng viên là <b className='font-bold'> Thạc sĩ </b> chuyên ngành.<br/>
                🎯 Nhiều thầy cô từng <b className='font-bold'> du học và tốt nghiệp tại các trường Đại học top đầu Trung Quốc</b>.<br/>
                🚀 Có chứng chỉ giảng dạy tiếng Hán quốc tế (CTCSOL).<br/>
                ⭐ Nhiều năm kinh nghiệm giảng dạy cho học viên Việt Nam.
              </p>
            </div>
        </div> 
      </div>

        {/* Lịch Khai Giảng cho ipad trở lên */}
        <div 
          className='flex items-center justify-center flex-col px-4 mb-12 md:mb-20'
        >
          <h1 
            className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 pt-20 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
          >
            LỊCH KHAI GIẢNG
          </h1>
          <p 
            className='mt-3 md:mt-4 text-sm sm:text-base md:text-lg gap-1 text-center text-black'
          >
            Tiếng Trung Khánh An chỉ mở những khóa học <b className='font-bold ml-1'>ONLINE</b>, phù hợp những anh chị em đang đi làm
          </p>
          <p 
            className='flex items-center justify-center text-sm sm:text-base md:text-lg gap-1 text-center text-black'
          > 
            và muốn trao dồi thêm khả năng ngôn ngữ tiếng Trung, nhằm phát triển con đường sự nghiệp của mình.
          </p>
          <div 
            className='w-full max-w-7xl mx-auto mt-6 md:mt-8 rounded-lg overflow-x-auto'
          >
            <div className='hidden md:grid grid-cols-4 divide-x-2 bg-amber-100 min-w-[600px]'>
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='font-bold text-lg md:text-xl lg:text-2xl text-black border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Lớp Học
                </h3>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full border-b-2 border-t-2 flex items-center justify-center text-center p-2'>Sơ cấp <br/>(0-HSK2)</p>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full flex items-center justify-center text-center pb-2'>Sơ cấp 2 <br/>(HSK 1 - HSK2)</p>
              </div>  
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Khai Giảng
                </h3>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full border-b-2 border-t-2 flex items-center justify-center text-center py-6'>14/10</p>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full flex items-center justify-center text-center p-5'>22/10</p>
              </div>
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Lịch Học
                </h3>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full border-b-2 border-t-2 flex items-center justify-center text-center p-2'>Thứ 3 - 5 -7 <br/>(tổng số buổi: 35)</p>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full flex items-center justify-center text-center pb-2'>Thứ 2 - 4 - 6 <br/>(tổng số buổi: 17)</p>
              </div>
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Giờ Học
                </h3>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full border-b-2 border-t-2 flex items-center justify-center text-center py-6'>19h - 20h30</p>
                <p className='text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full flex items-center justify-center text-center p-5'>19h - 20h30</p>
              </div>
            </div>
          </div>
        </div>
        {/* Lịch khai giảng cho mobile */}
        <div className='grid md:hidden grid-cols-3 max-w-md h-auto rounded-lg -mt-15 mx-4 bg-amber-100'>
            <div className='flex items-center justify-center flex-col space-y-2'>
                  <h3 className='text-black w-full font-bold text-lg border-amber-700 border-l-4 border-t-4 flex items-center justify-center bg-amber-500 rounded-lg'>
                    Lớp Học
                  </h3>
                  <h3 className='text-black w-full font-bold text-lg border-amber-700 border-l-4 border-t-4 flex items-center justify-center bg-amber-500 rounded-lg'>
                    Khai Giảng
                  </h3>
                  <h3 className='text-black w-full font-bold text-lg border-amber-700 border-l-4 border-t-4 flex items-center justify-center bg-amber-500 rounded-lg'>
                    Lịch Học
                  </h3>
                  <h3 className='text-black w-full font-bold text-lg border-amber-700 border-l-4 border-t-4 flex items-center justify-center bg-amber-500 rounded-lg'>
                    Giờ Học
                  </h3>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 py-1'>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1 border-r-1'>Sơ cấp <br/>(0-HSK2)</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1 border-r-1'>14/10</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1 border-r-1'>Thứ 3 - 5 -7 <br/>(tổng số buổi: 35)</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-r-1'>19h - 20h30</p>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 py-1'>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1'>Sơ cấp 2<br/>(HSK1-HSK2)</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1'>22/10</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-b-1'>Thứ 2-4-6 <br/>(tổng số buổi: 17)</p>
                <p className='text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center'>19h - 20h30</p>
            </div>
          </div>
        {/* Các Khóa Học */}
        <h1 
        className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 pt-20 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
        >
          CÁC KHÓA HỌC TẠI KHÁNH AN
        </h1>
        
        <div 
        className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 sm:px-6 lg:px-18 items-center justify-center mt-2.5'
        >
          <div 
          className='sm:w-60 sm:h-80 lg:w-110 lg:h-120 border-t-4 border-l-4  bg-gradient-to-tr from-amber-950 to-amber-600 border-yellow-200 p-3 md:shadow-[10px_10px_30px] sm:shadow-[5px_5px_10px] shadow-black rounded-xl'
          >
            <h1 
            className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-200 flex items-center justify-center mt-2'
            >
              🌸 KHOÁ HSK
            </h1>
            <p 
            className='text-white sm:text-sm md:text-md lg:text-lg xl:text-2xl mt-4'
            >
              ✔ Phù hợp cho người mới bắt đầu đến HSK5<br/>
              ✔ Lộ trình rõ ràng, dễ hiểu, học từ vựng – ngữ pháp – luyện đề<br/>
              ✔ Giáo viên nhiệt tình, theo sát từng học viên<br/>
              ✔ Cam kết đầu ra, hỗ trợ học lại nếu chưa đạt<br/>
              ✔ Ôn thi HSK
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/hsk"}}
            className='w-full md:w-auto bg-yellow-200 text-amber-950 text-lg rounded-lg px-6 py-3 mt-4 hover:bg-amber-400 font-semibold shadow-[5px_5px_10px_rgba(225,225,225)] hover:scale-105 transition-all duration-300 ease-in-out'
            >
              Xem chi tiết
            </button>
          </div>

          <div 
          className='relative md:w-80 md:h-80 lg:w-110 lg:h-120 border-t-4 border-l-4 bg-gradient-to-tr from-amber-950 to-amber-600 border-yellow-200 p-3 shadow-[10px_10px_30px] shadow-black rounded-xl'
          >
            <h1 
            className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-200 flex items-center justify-center mt-2'
            >
              🌸 KHOÁ GIAO TIẾP
            </h1>
            <p 
            className='text-white sm:text-sm md:text-md lg:text-lg xl:text-2xl mt-4'
            >
              ✔ Dành cho người mới bắt đầu, học từ phát âm đến hội thoại<br/>
              ✔ Tập trung thực hành nghe – nói theo tình huống thực tế<br/>
              ✔ Giáo trình sinh động, dễ áp dụng trong cuộc sống<br/>
              ✔ Lớp học nhỏ, giáo viên chỉnh sửa phát âm trực tiếp từng học viên
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/giao-tiep"}}
            className='w-full md:w-auto bg-yellow-200 text-amber-950 text-lg rounded-lg px-6 py-3 mt-10 hover:bg-amber-400 font-semibold shadow-[5px_5px_10px_rgba(225,225,225)] hover:scale-105 transition-all duration-300 ease-in-out'
            >
              Xem chi tiết
            </button>
          </div>

          <div 
          className='relative md:w-80 md:h-80 lg:w-110 lg:h-120 border-t-4 border-l-4 bg-gradient-to-tr from-amber-950 to-amber-600 border-yellow-200 p-3 shadow-[10px_10px_30px] shadow-black rounded-xl'
          >
            <h1 
            className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-200 flex items-center justify-center mt-2'
            >
              🌸 KHOÁ 1-1
            </h1>
            <p 
            className='text-white sm:text-sm md:text-md lg:text-lg xl:text-2xl mt-4'
            >
              ✔ Lộ trình cá nhân hoá theo trình độ và mục tiêu học viên<br/>
              ✔ Linh hoạt thời gian, học online hoặc trực tiếp<br/>
              ✔ Tập trung giải quyết điểm yếu, tăng tốc tiến bộ<br/>
              ✔ Giáo viên theo sát 100%, hỗ trợ ngoài giờ nếu cần
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/khoa1-1"}}
            className='w-full md:w-auto bg-yellow-200 text-amber-950 text-lg rounded-lg px-6 py-3 mt-10 hover:bg-amber-400 font-semibold shadow-[5px_5px_10px_rgba(225,225,225)] hover:scale-105 transition-all duration-300 ease-in-out'
            >
              Xem chi tiết
            </button>
          </div>

        </div>
        {/* Cảm Nhận */}
        <div 
        className='flex items-center flex-col justify-center'
        >
          <h1 
          className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 pt-20 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
          >
            CẢM NHẬN HỌC VIÊN
          </h1>
          <p 
          className='flex items-center justify-center sm:text-xs md:text-md lg:text-lg xl:text-xl mt-2 text-black'
          >
            Cảm ơn các học viên đã tin tưởng học tại
          </p>
          <p className='sm:flex items-center justify-center sm:text-xs md:text-md lg:text-lg xl:text-xl mb-2 text-black'> Tiếng Trung Khánh An</p>
          <GallerySlider/>
        </div>
    </div>    
    )
}
