import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const index = ({ mangaid, manga, imageUrl, chapter, handleCheck, setIsHide, isHide }, ref) => {
    return (
        <div ref={ref} className='text-white text-opacity-60 sm:px-8 px-2 m-auto border-solid border-b-[#2C2C2C] border-b-2'>
            <h1 className='text-2xl mb-1'>
                <Link to={`/manga/${mangaid}`} className='cursor-pointer text-[#50C4ED] hover:underline'>{manga.title + ' '}</Link>
                - Chapter {imageUrl.getChapter && imageUrl.getChapter.attributes.chapter}
            </h1>
            <div className='w-full flex justify-between text-center  my-4 relative'>
                <Link to={chapter.previous ? `/manga/${mangaid}/chapter/${chapter.previous.id}` : ''} onClick={handleCheck} className='sm:w-[33%] w-[20%] bg-[#2C2C2C] hover:bg-opacity-60 rounded-sm py-2'>
                    <span className='leading-4 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{ fill: 'rgba(225, 225, 225, .6)' }}><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                        <span className='sm:inline-block hidden'>Previous Chapter</span></span>
                </Link>
                <div onClick={() => setIsHide(!isHide)} className='sm:w-[33%] w-[55%] bg-[#2C2C2C] rounded-sm py-2 cursor-pointer'>
                    <span className='leading-4 flex hover:bg-opacity-60  justify-center items-center'><span className='sm:text-lg text-sm'>Chapter {imageUrl.getChapter && imageUrl.getChapter.attributes.chapter}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60 transition-transform' style={{ fill: 'rgba(225, 225, 225, .6)', transform: !isHide ? 'rotate(180deg)' : 'rotate(360deg)' }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </span>
                </div>
                <Link to={chapter.next ? `/manga/${mangaid}/chapter/${chapter.next.id}` : ''} onClick={handleCheck} className='sm:w-[33%] w-[20%] bg-[#2C2C2C] hover:bg-opacity-60 rounded-sm py-2'>
                    <span className='leading-4 flex justify-center items-center'><span className='sm:inline-block hidden'>Next Chapter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{ fill: 'rgba(225, 225, 225, .6)' }}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </span>
                </Link>
                <div className={`absolute top-12 w-full ${!isHide ? 'block translate-y-0' : 'hidden -translate-y-2'} `}>
                    <div id='listchapters' className={`bg-[#2C2C2C] m-auto sm:w-[33%] w-[55%] max-h-[20rem] overflow-hidden overflow-y-scroll rounded-sm transition duration-150`}>
                        {chapter.data && chapter.data.map(c => (
                            <Link to={`/manga/${mangaid}/chapter/${c.id}`} onClick={handleCheck} key={'lis-c-' + c.id} className='px-4 py-1 flex justify-start w-full text-left border-solid border-b-2 border-b-[#363636]'><span className='inline-block mr-1 '>Chapter {c.attributes.chapter}</span> <p className='truncate inline-block '>{c.attributes.title === null ? '' : '. ' + c.attributes.title}</p></Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default forwardRef(index);