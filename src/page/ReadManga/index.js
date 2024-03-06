import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import { chaptersService, dataManga, getImageUrl } from '../../apiService/chaptersService';
import HeaderPage from './HeaderPage'

const ReadManga = () => {
    const [manga, setManga] = useState([])
    const [imageUrl, setImageUrl] = useState([])
    const [chapter, setChapter] = useState([])
    const [np, setNp] = useState([])
    const [check, setCheck] = useState(true)
    const [isHide, setIsHide] = useState(true)
    const { id, mangaid } = useParams()
    const ref = useRef(null)
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
            const res = await chaptersService(mangaid,id)
            setChapter(res);
        }
        fetchChapter()
    }, [check])
    const handleHideList = () => {
        isHide ? setIsHide(false) : setIsHide(true)
    }
    const handleCheck = ()  => {
        setIsHide(true)
        check ? setCheck(false) : setCheck(true)
    }
    const handleScrollTop = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className='w-full h-full bg-[#191A1C] pt-28 relative'>
            <HeaderPage mangaid={mangaid} manga={manga} imageUrl={imageUrl} chapter={chapter} handleCheck={handleCheck} handleHideList={handleHideList} isHide={isHide} ref={ref}/>
            <div className='w-full h-full max-w-screen-lg mx-auto'>
                {imageUrl.urls && imageUrl.urls.map(url => {
                    return (
                        <div key={'urlimage-' + url} className='w-full h-full'>
                            <img loading='lazy' className='w-full h-auto' src={url} alt="" />
                        </div>
                    )
                })}
            </div>
            <Link to={chapter.next ? `/manga/${mangaid}/chapter/${chapter.next.id}` : ''}  onClick={handleCheck} className='w-full bg-slate-300 bg-opacity-60 text-white text-opacity-80 hover:bg-opacity-50 py-2 text-center block'>Next Chapter</Link>
            <div onClick={handleScrollTop} className='fixed z-50 w-12 h-12 flex justify-center items-center border-solid border-gray-400 border-2 bottom-14 right-20 rounded-full cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(225, 225, 225, 0.6)"}}><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
            </div>
        </div>
    );
};

export default ReadManga;