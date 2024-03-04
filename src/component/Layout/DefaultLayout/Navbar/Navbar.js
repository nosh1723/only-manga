import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({scroll, isHome}) {
    return (
        <div>
            <nav data-v-3ed40230 className={`fixed px-2 z-40 top-0 left-0 w-full ${isHome ? (scroll < 1 ? '' : 'bg-white bg-opacity-60 backdrop-blur shadow-lg') : 'bg-white bg-opacity-60 backdrop-blur shadow-lg'}`}>
                <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
                    <div className='flex justify-between items-stretch py-2 gap-4'>
                        <div className='flex-1 items-center gap-3 hidden lg:flex'>
                            <a data-v-3ed40230 className='nav-link text-yellow-300 hover:text-yellow-200' href="#">CẮT WEBTOON</a>
                            <a data-v-3ed40230 className={`nav-link ${isHome ? (scroll > 0 ? 'text-black opacity-60' : 'nav-link-dark') : 'text-black opacity-60'} `} href="#">DISCORD</a>
                            <a data-v-3ed40230 className={`nav-link ${isHome ? (scroll > 0 ? 'text-black opacity-60' : 'nav-link-dark') : 'text-black opacity-60'}`} href="#">HỘI KÍN</a>
                            <a data-v-3ed40230 className={`nav-link ${isHome ? (scroll > 0 ? 'text-black opacity-60' : 'nav-link-dark') : 'text-black opacity-60'}`} href="#">ĐĂNG TRUYỆN</a>
                            <a data-v-3ed40230 className={`nav-link ${isHome ? (scroll > 0 ? 'text-black opacity-60' : 'nav-link-dark') : 'text-black opacity-60'}`} href="#">TIN TỨC</a>
                        </div>
                        <div className='flex-1 flex lg:justify-center items-center max-w-full'>
                            <Link data-v-3ed40230 className={`font-display font-extrabold uppercase select-none rounded-full flex items-center h-11 router-link-exact-active router-link-active ${isHome ? (scroll > 0 ? 'text-black text-opacity-60' : 'nav-link-dark') : 'text-black text-opacity-60'}  `} to="/">Cứu truyện</Link>
                        </div>
                        <div data-v-3ed40230 className='flex-1 flex justify-end max-w-full'>
                            <button data-v-3ed40230 className={`button-circle px-3 py-2 mr-2 h-11 w-11 flex justify-center items-center ${isHome ? (scroll > 0 ? 'button-transparent-dark' : 'bg-slate-500 opacity-70') : 'button-transparent-dark'} `}>
                                <span data-v-3ed40230 className={`material-design-icon magnify-icon `}>
                                    <svg data-v-3ed40230="" fill={`${isHome ? (scroll > 0 ? '' : 'white') : ''}`} width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg opacity-60"><path data-v-3ed40230="" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"><title data-v-3ed40230="">Magnify icon</title></path></svg>
                                </span>
                            </button>
                            <a href='#' data-v-3ed40230 className={`button-circle px-3 py-2 mr-2 h-11 w-11 flex justify-center items-center relative ${isHome ? (scroll > 0 ? 'button-transparent-dark' : 'bg-slate-500 opacity-70') : 'button-transparent-dark'}`}>
                                <span data-v-3ed40230 className={`material-design-icon magnify-icon`}>
                                    <svg data-v-3ed40230="" fill={`${isHome ? (scroll > 0 ? '' : 'white') : ''}`} width="16" height="16" viewBox="0 0 24 24" class="material-design-icon__svg opacity-60"><path data-v-3ed40230="" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"><title data-v-3ed40230="">Bell Outline icon</title></path></svg>
                                </span>
                            </a>
                            <div data-v-3ed40230 className='relative'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
