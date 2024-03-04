import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { chaptersService, dataManga, getImageUrl } from '../../apiService/chaptersService';

const ReadManga = () => {
    const [manga, setManga] = useState([])
    const [imageUrl, setImageUrl] = useState([])
    const [chapter, setChapter] = useState([])
    const [check, setCheck] = useState(true)
    const [isHide, setIsHide] = useState(true)
    const { id, mangaid } = useParams()
    useEffect(() => {
        const fetchImage = async () => {
            const res = await getImageUrl(id)
            setImageUrl(res);
        }
        fetchImage()
        const fetchManga = async () => {
            const res = await dataManga(mangaid)
            setManga(res);
        }
        fetchManga()
        const fetchChapter = async () => {
            const res = await chaptersService(mangaid)
            setChapter(res);
        }
        fetchChapter()
    }, [check])
    const handleHideList = () => {
        isHide ? setIsHide(false) : setIsHide(true)
    }
    const handleCheck = ()  => {
        isHide ? setIsHide(false) : setIsHide(true)
        check ? setCheck(false) : setCheck(true)
    }
    console.log(Object.keys( chapter.find(c => c.id === id)));
    return (
        <div className='w-full h-full bg-[#191A1C] pt-28'>
            <div className='text-white text-opacity-60 px-8 m-auto border-solid border-b-[#2C2C2C] border-b-2'>
                <h1 className='text-2xl mb-1'><a src='' className='cursor-pointer text-[#50C4ED] hover:underline'>{manga.title}</a> - Chapter {imageUrl.getChapter && imageUrl.getChapter.attributes.chapter}</h1>
                <div className='w-full flex justify-between text-center  my-4 relative'>
                    <a href="" className='w-[33%] bg-[#2C2C2C] hover:bg-opacity-60 rounded-sm py-2'>
                        <span className='leading-4 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{fill: 'rgba(225, 225, 225, .6)'}}><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                        Previous Chapter</span>
                    </a>
                    <a href='#' onClick={handleHideList} className='w-[33%] bg-[#2C2C2C] rounded-sm py-2'>
                        <span className='leading-4 flex hover:bg-opacity-60  justify-center items-center'>Chapter {imageUrl.getChapter && imageUrl.getChapter.attributes.chapter}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60 transition-transform' style={{fill: 'rgba(225, 225, 225, .6)', transform: !isHide ? 'rotate(180deg)' : 'rotate(360deg)'}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                        </span>
                    </a>
                    <a href="" className='w-[33%] bg-[#2C2C2C] hover:bg-opacity-60 rounded-sm py-2'>
                        <span className='leading-4 flex justify-center items-center'>Next Chapter
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{fill: 'rgba(225, 225, 225, .6)'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                        </span>
                    </a>
                    <div className={`absolute top-12 w-full ${!isHide ? 'block translate-y-0' : 'hidden -translate-y-2'} `}>
                        <div id='listchapters' className={`bg-[#2C2C2C] m-auto w-[33%] max-h-[20rem] overflow-hidden overflow-y-scroll rounded-sm transition duration-150`}>
                            {chapter && chapter.map(c => (
                                <Link to={`/manga/${mangaid}/chapter/${c.id}`} onClick={handleCheck} key={'lis-c-'+c.id} className='px-4 py-1 block w-full text-left border-solid border-b-2 border-b-[#363636]'>Chapter {c.attributes.chapter} {c.attributes.title === null ? '' : '. ' + c.attributes.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='w-full h-full max-w-screen-lg mx-auto'>
                {imageUrl.urls && imageUrl.urls.map(url => {
                    return (
                        <div key={'urlimage-' + url} className='w-full h-full'>
                            <img className='w-full h-auto' src={url} alt="" />
                        </div>
                    )
                })}
            </div>
            <a href="" className='w-full bg-slate-300 bg-opacity-60 text-white text-opacity-80 hover:bg-opacity-50 py-2 text-center block'>Next Chapter</a>
        </div>
    );
};

export default ReadManga;