import React, { useContext, useEffect, useState } from 'react';
import Manga from '../../component/Manga/Manga';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MangaContext } from '../../context/MangaContext';
import * as apiService from "../../apiService/listmangaService";
import { Puff } from 'react-loader-spinner'
import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';

const Mangas = () => {
    const { title } = useParams()
    const path = useLocation().pathname
    const context = useContext(MangaContext)
    const [tag, setTag] = useState([])
    const [mangaResult, setMangaResut] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let result
            if (path === '/manga') {
                if (mangaResult.length > 0) {
                    result = await apiService.listmanga('', 15, mangaResult)
                } else {
                    result = await apiService.listmanga('', 15)
                }
            } else {
                result = await apiService.listmanga(title, 15)
            }
            context.setMangasSearchResult({ ...context.mangasSearchResult, mangas: result });
        }
        fetchData()
        const fetchTag = async () => {
            try {
                const result = await apiService.mangaTag()
                setTag(result)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTag()
        context.mangasSearchResult.isLoading = false
    }, [context.reRender, mangaResult])

    const handleFilterByTag = (t) => {
        const fetchFilterByTag = async () => {
            try {
                const result = await apiService.filterByTag([t])
                setMangaResut(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFilterByTag()
    }

    return (
        <div className='w-full max-w-screen-xl relative py-[8rem] m-auto'>
            <h2 className='text-lg font-bold text-opacity-80 text-gray-700'>{path === "/manga" ? '' : `Search result for  "${title}"`}</h2>


            <div className='flex justify-between mt-10'>
                {path === "/manga" ?
                    <div className='w-[20%] h-max shadow-md border-solid border-[1px] border-[#E3E3E3] bg-white rounded-lg'>
                        <h3 className='font-medium  border-b-[1px] border-solid border-[#E3E3E3]'><span className='mx-4 my-2 inline-block'>Filters</span></h3>
                        <div className='mx-4 mt-2 mb-4 '>
                            <h4> <span className=' inline-block mb-2'>Genres</span></h4>
                            <div className='text-sm flex flex-wrap gap-2'>
                                {tag.length > 0 && tag.map(t => (
                                    <div key={"tag" + t.attributes.name.en} onClick={() => handleFilterByTag(t.attributes.name.en)} className='bg-gray-400 w-max px-2 py-1 rounded-2xl cursor-pointer text-white'>{t.attributes.name.en}</div>
                                ))}
                            </div>
                        </div>
                    </div> :
                    <></>
                }
                {context.mangasSearchResult.isLoading ? <Puff
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{ margin: 'auto' }}
                    wrapperClass="wrapper-class"
                    visible={true}
                /> :
                    <div className='w-[75%] m-auto'>
                        <div className=' flex flex-wrap gap-6'>
                            {context.mangasSearchResult.mangas.map((manga) => (
                                <Manga key={manga.id} manga={manga} />
                            ))}
                        </div>
                        <div className='flex gap-4 justify-center mt-10'>
                            <Link to={''} className='block w-max px-4 py-2 rounded-md bg-gray-200 shadow-sm'>
                                <span className='leading-4 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{ fill: 'rgba(0, 0, 0, .6)' }}><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                                    <span className='sm:inline-block hidden'>Previous page</span></span>
                            </Link>
                            <Link to={''} className='block w-max px-4 py-2 rounded-md bg-gray-200 shadow-sm'>
                                <span className='leading-4 flex justify-center items-center'>
                                    <span className='sm:inline-block hidden'>Next page</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='align-middle mt-[3px] text-opacity-60' style={{ fill: 'rgba(0, 0, 0, .6)' }}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default Mangas;