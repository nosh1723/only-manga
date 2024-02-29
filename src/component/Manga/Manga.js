import React from 'react';

const Manga = ({manga}) => {
    return (
        <div className='snap-start'>
            <div className='flex flex-none flex-col justify-between items-stretch rounded-lg '>
                <a href="#" className='block flex-none w-[10rem] h-[15rem] rounded-lg hover:shadow-lg overflow-hidden'>
                    <picture>
                        <img src={manga.coverArt} alt="" className='w-full h-auto object-cover rounded-lg'/>
                    </picture>
                </a>
                <div className='mt-2 w-[10rem] h-[4.5rem] flex flex-col items-start justify-start'>
                    <a href="#" className='text-gray-800 font-bold text-sm mb-1 line-clamp-2'>{manga.title}</a>
                    <h4 className='text-xs uppercase tracking-wide text-gray-700 line-clamp-1'>
                        <a href="#">
                            <span className='font-semibold'>{manga.quantityChapter > 0 ? 'C. ' + manga.quantityChapter + 1 : 'Oneshot'}</span>
                            <pre className='inline-block'> - </pre>
                            <span>{manga.updatedAt}</span>
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Manga;