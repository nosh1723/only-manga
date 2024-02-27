import React from 'react'
import Banner from '../../component/Banner/Banner'
import Navbar from '../../component/Navbar/Navbar'
import Manga from '../../component/Manga/Manga'
import Button from '../../component/Button/Button'
import HeadTitle from './HeadTitle/HeadTitle'
import HotManga from '../../component/HotManga/HotManga'
import Footer from '../../component/Footer/Footer'


export default function Home() {
  if (window.scrollY) {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  }
  console.log(window.scrollY);
  return (
      <div className='relative w-full h-auto'>
        <div className='w-full bg-gray-300 absolute z-[-100]'>
          <Navbar />
          <div className='w-full h-[31rem] 2xl:h-[36rem] absolute z-[-10] bg-slate-400'></div>
          {/* list banner */}
          <div className='flex flex-col'>
            <div className='relative mb-6'>
              <div className='relative z-0 gap-4 px-2 flex flex-col flex-wrap w-full 2xl:h-[38rem] xl:h-[30rem] top-0 justify-center items-center mt-[7rem] snap-x snap-mandatory overflow-x-scroll hide-scrollbar'>
                <div className='snap-align-none snap-none flex-none 2xl:w-[calc((100vw-1280px-2rem)/2)] xl:w-[calc((100vw-1024px-2rem)/2)] lg:w-[calc((100vw-768px-2rem)/2)] md:w-[calc((100vw-768px-2rem)/2)]'></div>
                <Banner />  
                <Banner />  
                <Banner />  
                <Banner />  
                <div className='snap-align-none snap-none w-[calc((100vw-768px-2rem)/2)]'></div>
              </div>
            </div>
            <div className='flex justify-center gap-1'>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition'></button>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition bg-opacity-30'></button>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition bg-opacity-30'></button>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition bg-opacity-30'></button>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition bg-opacity-30'></button>
              <button className='rounded-full w-3 h-3 bg-gray-800 transition bg-opacity-30'></button>
            </div>  
          </div>

          {/* last update manga */}
          <div className='py-24 px-2 w-full 2xl:max-w-screen-xl container mx-auto'>
            <HeadTitle />
            <div className='relative container mx-auto'>
              <div className=' container snap-x snap-mandatory overflow-x-scroll hide-scrollbar mx-auto mb-6 grid grid-flow-col grid-rows-2 gap-4 h-full py-2'>
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
              </div>
              <Button />
            </div>
            <div className='container mx-auto flex justify-end mb-16'>
              <a href="#" className='flex items-center text-gray-600 transition text-sm font-bold'>
                <span>
                  <svg data-v-708b75e0="" fill="currentColor" width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-708b75e0="" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"><title data-v-708b75e0="">Chevron Right icon</title></path></svg>
                </span>
                <span>Xem danh sách truyện</span>
              </a>
            </div>
          </div>

          {/* manga hot */}
          <div id='bg-im' className='w-full'>
            <div className='max-w-screen-xl mx-auto py-16 lg:py-24'>
              <HeadTitle />
              <div className='py-8 flex justify-end'>
                <div className='rounded-full bg-gray-100 flex'>
                  <button className='time-range-tab-item active'>
                    Tuan
                  </button>
                  <button className='time-range-tab-item'>
                    Thang
                  </button>
                  <button className='time-range-tab-item'>
                    Moi luc
                  </button>
                </div>
              </div>
              <div className='relative mb-8 lg:mb-16'>
                <div className='snap-x snap-mandatory overflow-x-auto hide-scrollbar w-full grid grid-flow-col grid-rows-3 gap-4 pb-4'>
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                  <HotManga />
                </div>
                <Button />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
  )
}
