import React from 'react';

const HotManga = () => {
    return (
        <div className='w-72 relative lg:w-96 px-5 py-4 bg-blue-300 hover:bg-white hover:shadow fine-transition rounded-lg h-full snap-start snap-stop'>
            <div className='flex gap-2 h-full'>
                <img src="https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/106/cover/processed-535ce0b005c485ec09186dcdf481f13b.jpg" alt=""  className='w-14 rounded-lg mr-2'/>
                <div>
                    <a href="" className='mb-2 block'>
                        <h3 className='font-extrabold text-black text-opacity-90 truncate'>Jujutsu Kaisen</h3>
                    </a>
                    <a href="" className='mb-1'>
                        <h3 className='text-sm uppercase tracking-wide text-black text-opacity-60 truncate'>
                            <span className='font-semibold'>CHƯƠNG 243</span> - <span>6 ngày trước</span>
                        </h3>
                    </a>
                    <div className='text-sm uppercase tracking-wide text-black text-opacity-60 truncate'>20k luot xem</div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default HotManga;