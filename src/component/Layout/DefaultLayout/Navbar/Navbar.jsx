import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import * as apiService from "../../../../apiService/listmangaService"
import "./navbar.scss"
import { MangaContext } from '../../../../context/MangaContext'
import { Puff } from 'react-loader-spinner'

export default function Navbar({ scroll, isHome, isRead }) {
    const context = useContext(MangaContext)
    const [searchResult, setSearchResult] = useState({
        isLoading: null,
        result: []
    })
    const [showResult, setShowResult] = useState(false)
    const navigate = useNavigate()
    const ref = useRef()
    const ipRef = useRef()
    useEffect(() => {
        const handle = (e) => {
            if (!ref.current.contains(e.target)) {
                setShowResult(false)
            }
        }

        document.addEventListener("mousedown", handle)
    })

    const handleChangeSearch = _.debounce(async (e) => {
        const value = e.target.value
        if (!value) {
            searchResult.result = []
            context.setInpValue('')
            return
        }
        setSearchResult({ ...searchResult, isLoading: true })
        const result = await apiService.listmanga(value, 4)
        setSearchResult({ ...searchResult, isLoading: false, result })
        context.setInpValue(value)
    }, 300)

    const handleSearch = async () => {
        if (context.ipValue) {
            context.setReRender(!context.reRender)
            setShowResult(false)
            ipRef.current.value = ''
            ipRef.current.blur()
            context.setInpValue('')
            searchResult.result = []
            navigate(`/search/${context.ipValue}`)
        }
    }

    const handleEnterSearch = (e) => {
        if (e.key === "enter" || e.keyCode === 13) {
            handleSearch()
        }
    }

    const hanldeSearchResult = (id) => {
        context.fetchData(id)
        handleSearch()
    }
    return (
        <div className='navbar'>
            <nav data-v-3ed40230 className={`fixed px-2 z-40 top-0 left-0 w-full ${!isRead ? (isHome ? (scroll < 1 ? '' : 'bg-white bg-opacity-60 backdrop-blur shadow-lg') : 'bg-white bg-opacity-60 backdrop-blur shadow-lg') : 'relative bg-[#191A1C]'}`}>
                <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
                    <div className='flex justify-between items-stretch py-2 gap-4'>
                        <div className='flex-1 flex lg:justify-start items-center max-w-full'>
                            <Link data-v-3ed40230 className={`font-display font-extrabold uppercase select-none rounded-full flex items-center h-11 router-link-exact-active router-link-active ${isHome ? (scroll > 0 ? 'text-black text-opacity-60' : 'nav-link-dark') : 'text-black text-opacity-60'}  `} to="/">JUST MANGA</Link>
                        </div>
                        <div data-v-3ed40230 className='flex-1 flex justify-end max-w-full'>
                            <div ref={ref} className='relative w-full flex items-center justify-end'>
                                <input ref={ipRef} onKeyUp={handleEnterSearch} onFocus={() => setShowResult(true)} onChange={handleChangeSearch} placeholder='Search . . .' className='search w-[100%] md:w-[60%] lg:w-[50%] px-3 py-2 text-sm border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1' type="text" />
                                <button data-v-3ed40230 className={` absolute top-0 right-0 button-circle px-3 py-2  h-11 w-11 flex justify-center items-center`}>
                                    <span data-v-3ed40230 className={`material-design-icon magnify-icon `}>
                                        <svg data-v-3ed40230="" fill='#31363F' width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg "><path data-v-3ed40230="" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"><title data-v-3ed40230="">Magnify icon</title></path></svg>
                                    </span>
                                </button>
                                <div className={`absolute top-[55px] w-[100%] md:w-[60%] lg:w-[50%] h-9 ${!showResult ? "hidden" : "block"}`}>
                                    <div className='bg-gray-200 rounded-lg shadow-md max-h-[500px] flex flex-col justify-center '>
                                        <Puff
                                            height="50"
                                            width="50"
                                            color="#4fa94d"
                                            ariaLabel="audio-loading"
                                            wrapperStyle={{ margin: "auto" }}
                                            wrapperClass="wrapper-class"
                                            visible={searchResult.isLoading}
                                        />
                                        {
                                            !searchResult.isLoading && searchResult.result.map(manga => (
                                                <Link key={"re" + manga.id} to={`/manga/${manga.id}`} className='flex px-3 py-2 hover:bg-slate-100' onClick={() => hanldeSearchResult(manga.id)}>
                                                    <img className='w-14 h-20 mr-2 ' src={manga.coverArt} alt="" />
                                                    <div className='w-[70%]'>
                                                        <p className='w-full truncate'>{manga.title}</p>
                                                        <span className='text-sm text-gray-700'>{manga.quantityChapter ? `C. ` + manga.quantityChapter : "None"}</span>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                        {context.ipValue && (searchResult.result.length ? <div onClick={handleSearch} className='cursor-pointer block px-3 py-2 hover:bg-slate-100'>See more result for <span className='font-bold'>{context.ipValue}</span></div> :
                                            <div className='block px-3 py-2'>No result for <span className='font-bold'>{context.ipValue}</span></div>)}

                                    </div>
                                    {/* <HotManga /> */}
                                </div>
                            </div>

                            {/* <div data-v-3ed40230 className='relative'>
                                <button className='button-circle px-4 py-2 h-11 w-11 flex justify-center items-center uppercase button-transparent-dark hidden'>b</button>
                                <div class="bg-white absolute shadow-lg rounded-lg mt-2 right-0 overflow-hidden flex flex-col whitespace-nowrap text-gray-800 z-10 hidden">
                                    <div class="px-4 py-3">
                                        <div class="uppercase text-xs font-bold text-gray-500">Đã đăng nhập là:</div>
                                        <div class="font-bold">bethu123</div></div><div class="border-b border-gray-300"></div>
                                    <a href="/following" class="px-4 py-3 hover:bg-gray-200 cursor-pointer">Danh sách theo dõi</a>
                                    <a href="/configuration" class="px-4 py-3 hover:bg-gray-200 cursor-pointer">Thiết lập</a>
                                    <a class="px-4 py-3 hover:bg-gray-200 cursor-pointer">Đăng xuất</a>
                                    <div class="border-b border-gray-300"></div><a href="/saved-offline" class="px-4 py-3 hover:bg-gray-200">Truyện đã tải xuống</a>
                                    <div class="lg:hidden flex flex-col">
                                        <div class="border-b border-gray-300"></div>
                                        <a href="https://splitter.cuutruyen.net" target="_blank" rel="noopener noreferrer" class="px-4 py-3 text-yellow-700 hover:text-yellow-800 hover:bg-yellow-200">Cắt Webtoon</a>
                                        <a href="http://congdong.cuutruyen.net" target="_blank" rel="noopener noreferrer" class="px-4 py-3 text-green-700 hover:text-green-800 hover:bg-green-200">Ủng hộ</a>
                                        <a href="https://www.facebook.com/CuuTruyenTranh/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 hover:bg-gray-200">Fanpage</a>
                                        <a href="https://cuunews.net/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 text-green-700 hover:text-green-800 hover:bg-green-200">Tin tức</a>
                                        <a href="https://www.facebook.com/groups/noromcomnolife" target="_blank" rel="noopener noreferrer" class="px-4 py-3 text-green-700 hover:text-green-800 hover:bg-green-200">Động RomCom</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
