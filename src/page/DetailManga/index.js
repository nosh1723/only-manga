import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HotManga from '../../component/HotManga/HotManga'
import { chaptersService, dataManga } from '../../apiService/chaptersService';

const DetailManga = () => {
    const [chapters, setChapters] = useState({})
    const [manga, setManga] = useState({})
    const [reRender, setReRender] = useState(true)
    const {id} = useParams()
    useEffect(() =>{
        const fetchChapters = async () => {
            const result = await chaptersService(id)
            setChapters(result)
        }
        fetchChapters()
        const fetchManga = async () => {
            const result = await dataManga(id)
            setManga(result)
        }
        fetchManga()
    }, [reRender]) 
    const handleClick =() => {
        reRender ? setReRender(false) : setReRender(true)
    }
    return (
        <div>
            <div className='w-full max-w-screen-xl relative py-[8rem] m-auto'>
                <div className='w-full h-[22rem] bg-black bg-opacity-40 backdrop-blur-sm absolute z-[-1] rounded-t-xl'></div>
                <div className='absolute -z-10 w-full h-[22rem] rounded-t-xl bg-cover bg-no-repeat bg-[center_top_-10rem]' style={{backgroundImage: `url("${manga.coverUrl}")`}}></div>
                <div className='mt-[8rem] pb-14 px-10 shadow-md relative rounded-xl'>
                    <div className='flex min-h-[280px]'>
                        <picture>
                            <img className='w-[200px] h-auto rounded-lg shadow-md' src={manga.coverUrl} alt="" />
                        </picture>
                        <div className='text-white max-w-4xl opacity-90 px-7 relative'>
                            <h1 className='text-7xl mb-5 line-clamp-1'><span>{manga.title}</span></h1>
                            <p>{manga.authorName}, {manga.artistName}</p>
                            <div className='tags-name h-full max-h-[3rem] flex text-black text-opacity-60 text-sm font-bold mt-10  overflow-y-hidden '>
                                {manga.tags && manga.tags.map((tag, index) => (
                                    <a href="#" key={`tag-`+index} className='flex items-center max-h-8 px-3 pt-[4px] pb-[6px] bg-gray-100 rounded-3xl leading-3 mr-2'><span className=' whitespace-nowrap'>{tag}</span></a>
                                ))}
                            </div>
                            <div className='absolute bottom-0'>
                                <button className='px-6 py-2 uppercase font-bold bg-slate-400 rounded-md'>Add to library</button>
                                <button className='px-6 py-2 ml-5 uppercase font-bold rounded-md hover:bg-gray-600 hover:text-white text-black text-opacity-60'>Read now!</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-200 absolute -z-30 w-full h-full top-0 left-0 right-0  rounded-xl'></div>
                    <div className='w-full flex'>
                        <div className='w-[70%] h-full pr-10'>
                            <p className='pb-4 pt-10 text-sm text-opacity-60 text-black text-justify'>{manga.description}</p>
                            <div className='w-full max-h-[600px] mt-10 overflow-hidden overflow-y-scroll bg-white'>
                                {chapters.length && chapters.map((chapter) => {
                                    const createAt = new Date(chapter.attributes.updatedAt)
                                    return (
                                        <a key={"chapter-"+chapter.id} href="" className='w-full bg-gray-50 flex items-center border-l-4 border-solid border-gray-300 px-4 py-2 mb-1 hover:bg-opacity-70'>
                                            <h3 className='font-bold mr-4 min-w-[80px]'>Chap {chapter.attributes.chapter}</h3>
                                            <div className=' '>
                                                <h4 className='leading-4 line-clamp-1'>{chapter.attributes.title ? chapter.attributes.title : manga.title}</h4>
                                                <span className='text-black text-opacity-60 text-sm'>{(createAt.getDate() + ' - ' + (createAt.getMonth() + 1) + ' - ' + createAt.getFullYear())}</span>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='w-[30%] h-full px-5 py-3 bg-white rounded-lg'>
                            <h2 className='uppercase font-bold mb-3'>Cung tac gia</h2>
                            <div>
                                {manga.mangaSameAuthor && manga.mangaSameAuthor.length > 0 && 
                                manga.mangaSameAuthor.map(m => (
                                    <HotManga key={'samemanga-'+m.id} data={m} handleClick={handleClick}></HotManga>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailManga;