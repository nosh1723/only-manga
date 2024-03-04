import React, { useEffect, useState } from 'react';
import { listManga } from '../../apiService/listmangaService';
import { lastChapterSameAuthor } from '../../apiService/chaptersService';
import { Link } from 'react-router-dom';

const HotManga = ({data, handleClick}) => {
    const coverFileName = data.relationships.find((relation) => relation.type === 'cover_art').attributes.fileName
    const coverArt = `https://uploads.mangadex.org/covers/${data.id}/${coverFileName}`

    const [lastChapter, setLastChapter] = useState(0)
    useEffect(() => {
        const fetchLastChapter = async () => {
            const result = await lastChapterSameAuthor(data.id)
            setLastChapter(result)
        }
        fetchLastChapter()
    }, [])
    return (
        <div className='w-full relative py-2  fine-transition rounded-lg h-full snap-start snap-stop'>
            <div className='flex gap-2 h-full'>
                <img src={coverArt} alt=""  className='w-10 rounded-lg mr-2'/>
                <Link to={`/manga/${data.id}`} onClick={handleClick}>
                    <div href="" className='mb-2 block'>
                        <h3 className='font-extrabold text-black text-opacity-90 line-clamp-1'><span>{data.attributes.title.en}</span></h3>
                    </div>
                    <div className='mb-1'>
                        <h3 className='text-sm  tracking-wide text-black text-opacity-60 truncate'>
                            <span className='font-semibold'>{lastChapter === null || lastChapter === undefined ? 'No Chapters' : 'C. ' + lastChapter}</span> - <span>6 ngày trước</span>
                        </h3>
                    </div>
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default HotManga;