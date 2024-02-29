import React, {useState, useEffect} from 'react'

import * as apiService from '../../apiService/listmangaService'
import Navbar from '../../component/Navbar/Navbar'
import Manga from '../../component/Manga/Manga'
import Button from '../../component/Button/Button'
import HeadTitle from './HeadTitle/HeadTitle'
import Footer from '../../component/Footer/Footer'


export default function Home() {
  const [listManga, setListManga] = useState([])

  const includedTagNames = ['Action', 'Romance'];
  const excludedTagNames = ['Tragedy'];
  useEffect(() => {
    const fetchListManga= async () => {
      const result = await apiService.listManga()
      setListManga(result)    
    }
    fetchListManga()
  },[])

  console.log(listManga);

  return (
      <div className='relative w-full h-auto'>
        <div className='w-full bg-gray-300 absolute z-[-100]'>
          <Navbar />
          <div className='w-full h-[32rem] 2xl:h-[36rem] z-[-10] bg-no-repeat bg-center bg-cover' style={{backgroundImage: "url('https://embed.pixiv.net/spotlight.php?id=9439&lang=en')"}}></div>

          {/* last update manga */}
          <div className='py-24 px-2 w-full 2xl:max-w-screen-xl container mx-auto'>
            <HeadTitle />
            <div className='relative container mx-auto'>
              <div className=' container snap-x snap-mandatory overflow-x-scroll hide-scrollbar mx-auto mb-6 grid grid-flow-col grid-rows-2 gap-4 h-full py-2'>
                {listManga.map(manga => <Manga key={manga.id} manga={manga}/>)}
              </div>
            </div>
            <div className='container mx-auto flex justify-end mb-16'>
              <a href="#" className='flex items-center text-gray-600 transition text-sm font-bold'>
                <span>
                  <svg data-v-708b75e0="" fill="currentColor" width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-708b75e0="" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"><title data-v-708b75e0="">Chevron Right icon</title></path></svg>
                </span>
                <span>See More</span>
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
  )
}
