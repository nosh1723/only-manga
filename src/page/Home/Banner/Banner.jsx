import React from 'react';

const Banner = () => {
    return (
        <div  className='relative max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full h-full rounded-lg bg-slate-300 snap-center'>
            <img className='absolute w-full h-full object-cover z-0 object-center rounded-lg brightness-75' src="https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/501/panorama/processed-7a8fe1bdd012631672d44cf12a60020a.jpg" alt="" />
            <div className='absolute w-full h-full bg-hero rounded-lg z-1'></div>
            <div className='absolute w-full flex justify-between items-center p-6 text-white bottom-0 left-0'>
                <div className='flex flex-col gap-2 w-full overflow-hidden'>
                    <a className='flex-0' href="#">
                        <h2 className='text-xl font-bold opacity-75'>  Kagurabachi (FULL HD) </h2>
                    </a>
                    <p className='flex-1 max-w-[32rem] opacity-70'> Cậu bé Chihiro dành cả ngày để luyện tập dưới sự hướng dẫn của người cha rèn kiếm nổi tiếng của mình. Một ngày nào đó anh hy vọng sẽ trở thành một thợ rèn kiếm vĩ đại. Người cha... </p>
                </div>
                <div>
                    <a href='#' className='bg-blue-600 button hover:bg-blue-800 bg-opacity-50 hover:bg-opacity-50 px-8 py-2 text-sm uppercase font-bold'> Xem thông tin </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;