'use client'
import React from 'react';
import GallerySlider from './components/Photo';
import Slide from "./components/Slide";
import { CheckSquare, Rocket, Star, Lightbulb, Target  } from 'lucide-react'

export default function Home() {
  const giao_vien_styles = 'bg-yellow-100 border-2 border-yellow-500 h-50 p-1 rounded-xl hover:translate-x-1 hover:shadow-[-5px_10px_20px_rgba(0,0,0)] transition-all duration-300 ease-in-out m-2'
  const khai_giang_styles = 'text-black font-bold text-base sm:text-xs md:text-lg lg:text-2xl w-full border-t-2 flex items-center justify-center text-center py-6'
  const khai_hiang_styles_mobileh3 = 'text-black w-full font-bold text-sm border-amber-700 border-l-2 border-t-2 flex items-center justify-center bg-amber-500 rounded-l-md'
  const khai_hiang_styles_mobilep = 'text-black flex-1 font-bold text-xs w-full flex items-center justify-center text-center border-l-1'
  const khoa_hoc_styles_h1 = 'sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400 flex items-center justify-center mt-2'
  const khoa_hoc_styles_p = 'text-yellow-100 sm:text-sm md:text-md lg:text-lg xl:text-2xl mt-4'
  const xem_chi_tiet_btn = 'w-full mt-auto bg-yellow-400 text-amber-950 text-lg rounded-lg py-3 hover:bg-yellow-300 font-semibold hover:scale-101 transition-all duration-300 ease-in-out'
  const khoa_hoc_box = 'md:w-70 md:h-80 lg:w-100 lg:h-110 border-t-4 border-l-4  bg-amber-900 border-yellow-200 p-3 rounded-xl flex flex-col'
  return (
    <div>
      <Slide/>
      {/* Đội Nguc Giáo Viên */}
      <div className='w-full max-w-7xl mx-auto p-10 lg:p-0'>
      <h1 
        className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 mt-10 mb-5 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
        >
          ĐỘI NGŨ GIÁO VIÊN
        </h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 w-full mx-auto'>
        <div className=''>
            <div className={giao_vien_styles}>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Giáo Viên Việt Nam
              </h3>
                <p 
                className='sm:text-sm md:text-md lg:text-lg text-black'
                >
                  <CheckSquare size={18} className='inline'/> Tốt nghiệp các khoa tiếng Trung uy tín trong và ngoài nước.<br/>
                  <CheckSquare size={18} className='inline'/> Có kinh nghiệm <b className='font-bold'> luyện thi HSK từ cấp 0 đến HSK5</b>.<br/>
                  <CheckSquare size={18} className='inline'/> Giải thích bài học dễ hiểu, kết hợp so sánh với tiếng Việt giúp học viên tiếp thu nhanh.
                </p>
            </div>  
            <div className={giao_vien_styles}>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Phương Pháp Giảng Dạy Hiện Đại
              </h3>
              <p 
              className='sm:text-sm md:text-md lg:text-lg text-black'
              >
                <Rocket size={18} className='inline'/> Kết hợp <b className='font-bold'> lý thuyết – thực hành – luyện đề</b>.<br/>
                <Star size={18} className='inline'/> Sử dụng giáo trình chuẩn quốc tế (HSK, 发展汉语).<br/>
                <Lightbulb size={18} className='inline'/>Lớp học nhiều hoạt động tương tác: thảo luận nhóm,<br/> đóng vai tình huống thực tế, luyện kỹ năng giao tiếp tự nhiên.
              </p>
            </div>
        </div>
            
        <div>
            <div className={giao_vien_styles}>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Giáo Viên Bản Ngữ Trung Quốc
              </h3>
                <p 
                className='sm:text-sm md:text-md lg:text-lg text-black'
                >
                  <CheckSquare size={18} className='inline'/> Giúp học viên <b className='font-bold'> luyện phát âm chuẩn Bắc Kinh</b>.<br/>
                  <CheckSquare size={18} className='inline'/> Hiểu đúng ngữ điệu và văn hóa Trung Quốc.<br/>
                  <CheckSquare size={18} className='inline'/> Kinh nghiệm giảng dạy HSK và giao tiếp cho học viên quốc tế.
                </p>
            </div> 
          
            <div className={giao_vien_styles}>
              <h3 
              className='font-bold sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center text-yellow-800'
              >
                Trình Độ Chuyên Môn Cao
              </h3>
              <p 
              className='sm:text-sm md:text-md lg:text-lg text-black'
              >
                <Rocket size={18} className='inline'/> Đa số giảng viên là <b className='font-bold'> Thạc sĩ </b> chuyên ngành.<br/>
                <Target size={18} className='inline'/> Nhiều thầy cô từng <b className='font-bold'> du học và tốt nghiệp tại các trường Đại học top đầu Trung Quốc</b>.<br/>
                <Rocket size={18} className='inline'/> Có chứng chỉ giảng dạy tiếng Hán quốc tế (CTCSOL).<br/>
                <Star size={18} className='inline'/> Nhiều năm kinh nghiệm giảng dạy cho học viên Việt Nam.
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
                <p className={khai_giang_styles}>HSK1</p>
                <p className={khai_giang_styles}>HSK1</p>
                <p className={khai_giang_styles}>HSK2</p>
              </div>   
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Khai Giảng
                </h3>
                <p className={khai_giang_styles}>2/3</p>
                <p className={khai_giang_styles}>3/3</p>
                <p className={khai_giang_styles}>2/3</p>
              </div>
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                >
                  Lịch Học
                </h3>
                <p className={khai_giang_styles}>Thứ 2 - 4 - 6</p>
                <p className={khai_giang_styles}>Thứ 3 - 5 - 7</p>
                <p className={khai_giang_styles}>Thứ 2 - 4 - 6</p>
              </div>
              <div className='flex items-center justify-center flex-col space-y-2 p-4'>
                <h3 
                  className='text-black font-bold text-lg md:text-xl lg:text-2xl border-amber-700 border-l-4 border-t-4 flex items-center justify-center w-full p-2 mb-0.5 bg-amber-500 rounded-lg'
                > 
                  Giờ Học
                </h3>
                <p className={khai_giang_styles}>19h - 20h30</p>
                <p className={khai_giang_styles}>19h - 20h30</p>
                <p className={khai_giang_styles}>20h30 - 22h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lịch khai giảng cho mobile */}
        <div className='grid md:hidden grid-cols-4 max-w-md h-auto rounded-lg -mt-15 mx-4 bg-amber-100'>
            <div className='flex items-center justify-center flex-col space-y-2'>
                  <h3 className={khai_hiang_styles_mobileh3}>
                    Lớp Học
                  </h3>
                  <h3 className={khai_hiang_styles_mobileh3}>
                    Khai Giảng
                  </h3>
                  <h3 className={khai_hiang_styles_mobileh3}>
                    Lịch Học
                  </h3>
                  <h3 className={khai_hiang_styles_mobileh3}>
                    Giờ Học
                  </h3>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 py-1'>
                <p className={khai_hiang_styles_mobilep}>HSK1</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>2/3</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>Thứ 2 - 4 - 6</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>19h - 20h30</p>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 py-1'>
                <p className={`${khai_hiang_styles_mobilep} `}>HSK2</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>2/3</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>Thứ 2 - 4 - 6</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>20h30 - 22h</p>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 py-1'>
                <p className={`${khai_hiang_styles_mobilep}`}>HSK1</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>3/3</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>Thứ 3 - 5 - 7</p>
                <p className={`${khai_hiang_styles_mobilep}  border-t-1`}>19h - 20h30</p>
            </div>
          </div>
        {/* Các Khóa Học */}
        <h1 
        className='flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-amber-800 pt-20 text-shadow-[7px_4px_8px_rgba(184,131,0)]'
        >
          CÁC KHÓA HỌC TẠI KHÁNH AN
        </h1>
        
        <div 
        className='grid grid-cols-1 md:grid-cols-3 gap-5 px-4 items-center justify-center mt-2.5'
        >
          <div 
          className={khoa_hoc_box}
          >
            <h1 
            className={khoa_hoc_styles_h1}
            >
              🌸 KHOÁ HSK
            </h1>
            <p 
            className={khoa_hoc_styles_p}
            >
              🗸 Phù hợp cho người mới bắt đầu đến HSK5<br/>
              🗸 Lộ trình rõ ràng, dễ hiểu, học từ vựng – ngữ pháp – luyện đề<br/>
              🗸 Giáo viên nhiệt tình, theo sát từng học viên<br/>
              🗸 Cam kết đầu ra, hỗ trợ học lại nếu chưa đạt<br/>
              🗸 Ôn thi HSK
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/hsk"}}
            className={xem_chi_tiet_btn}
            >
              Xem chi tiết
            </button>
          </div>

          <div 
          className={khoa_hoc_box}
          >
            <h1 
            className={khoa_hoc_styles_h1}
            >
              🌸 KHOÁ GIAO TIẾP
            </h1>
            <p 
            className={khoa_hoc_styles_p}
            >
              🗸 Dành cho người mới bắt đầu, học từ phát âm đến hội thoại<br/>
              🗸 Tập trung thực hành nghe – nói theo tình huống thực tế<br/>
              🗸 Giáo trình sinh động, dễ áp dụng trong cuộc sống<br/>
              🗸 Lớp học nhỏ, giáo viên chỉnh sửa phát âm trực tiếp từng học viên
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/giao-tiep"}}
            className={xem_chi_tiet_btn}
            >
              Xem chi tiết
            </button>
          </div>

          <div 
          className={khoa_hoc_box}
          >
            <h1 
            className={khoa_hoc_styles_h1}
            >
              🌸 KHOÁ 1-1
            </h1>
            <p 
            className={khoa_hoc_styles_p}
            >
              🗸 Lộ trình cá nhân hoá theo trình độ và mục tiêu học viên<br/>
              🗸 Linh hoạt thời gian, học online hoặc trực tiếp<br/>
              🗸 Tập trung giải quyết điểm yếu, tăng tốc tiến bộ<br/>
              🗸 Giáo viên theo sát 100%, hỗ trợ ngoài giờ nếu cần<br/>
            </p>
            <button
            onClick={() => {window.location.href="/khoa-hoc/khoa1-1"}}
            className={xem_chi_tiet_btn}
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
    </div>    
    )
}
