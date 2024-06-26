import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Puff } from 'react-loader-spinner'

import HotManga from "../../component/HotManga/HotManga";
import { MangaContext } from "../../context/MangaContext";

const DetailManga = () => {
  const { id } = useParams();
  const context = useContext(MangaContext)
  useEffect(() => {
    context.fetchData(id)
  }, [context.reRender]);

  return (
    <div >
      {context.manga.isLoading ?
        <div className="min-h-screen w-full flex justify-center items-center">
          <Puff
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{ margin: 'auto' }}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
        :
        <div className="w-full max-w-screen-xl relative py-[8rem] m-auto">
          <div className="w-full h-[22rem] bg-black bg-opacity-40 backdrop-blur-sm absolute z-[-1] rounded-t-xl"></div>
          <div
            className="absolute -z-10 w-full h-[22rem] rounded-t-xl bg-cover bg-no-repeat bg-[center_top_-10rem]"
            style={{ backgroundImage: `url("${context.manga.mangas.coverUrl}")` }}
          ></div>
          <div className="mt-[8rem] pb-14 px-10 shadow-md relative rounded-xl">
            <div className="flex min-h-[280px]">
              <picture>
                <img
                  className="w-[200px] h-auto rounded-lg shadow-md"
                  src={context.manga.mangas.coverUrl}
                  alt=""
                />
              </picture>
              <div className="text-white max-w-4xl opacity-90 px-7 relative">
                <h1 className="text-7xl mb-5 line-clamp-1">
                  <span>{context.manga.mangas.title}</span>
                </h1>
                <p>
                  {context.manga.mangas.authorName}, {context.manga.mangas.artistName}
                </p>
                <div className="tags-name h-full max-h-[3rem] flex text-black text-opacity-60 text-sm font-bold mt-10  overflow-y-hidden ">
                  {context.manga.mangas.tags &&
                    context.manga.mangas.tags.map((tag, index) => (
                      <a
                        href="#"
                        key={`tag-` + index}
                        className="flex items-center max-h-8 px-3 pt-[4px] pb-[6px] bg-gray-100 rounded-3xl leading-3 mr-2"
                      >
                        <span className=" whitespace-nowrap">{tag}</span>
                      </a>
                    ))}
                </div>
                <div className="absolute bottom-0">
                  <button className="px-6 py-2 uppercase font-bold bg-slate-400 rounded-md">
                    Add to library
                  </button>
                  <Link
                    to={
                      context.chapters.data && context.chapters.data.length
                        ? `/manga/${id}/chapter/${context.chapters.data[context.chapters.data.length - 1].id
                        }`
                        : ""
                    }
                    className="px-6 py-2 ml-5 uppercase font-bold rounded-md hover:bg-gray-600 hover:text-white text-black text-opacity-60"
                  >
                    Read now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 absolute -z-30 w-full h-full top-0 left-0 right-0  rounded-xl"></div>
            <div className="w-full flex">
              <div className="w-[70%] h-full pr-10">
                <p className="pb-4 pt-10 text-sm text-opacity-60 text-black text-justify">
                  {context.manga.mangas.description}
                </p>
                <div className="w-full max-h-[600px] mt-10 overflow-hidden overflow-y-scroll bg-white">
                  {context.chapters.data &&
                    context.chapters.data.map((chapter) => {
                      const createAt = new Date(chapter.attributes.updatedAt);
                      return (
                        <Link
                          to={`/manga/${id}/chapter/${chapter.id}`}
                          key={"chapter-" + chapter.id}
                          className="w-full bg-gray-50 flex items-center border-l-4 border-solid border-gray-300 px-4 py-2 mb-1 hover:bg-opacity-70"
                        >
                          <h3 className="font-bold mr-4 min-w-[80px]">
                            Chap{" "}
                            {chapter.attributes.chapter
                              ? chapter.attributes.chapter
                              : "1"}
                          </h3>
                          <div className=" ">
                            <h4 className="leading-4 line-clamp-1">
                              {chapter.attributes.title
                                ? chapter.attributes.title
                                : context.manga.mangas.title}
                            </h4>
                            <span className="text-black text-opacity-60 text-sm">
                              {createAt.getDate() +
                                " - " +
                                (createAt.getMonth() + 1) +
                                " - " +
                                createAt.getFullYear()}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className="w-[30%] h-full px-5 py-3 bg-white rounded-lg">
                <h2 className="uppercase font-bold mb-3">Same author</h2>
                <div>
                  {context.manga.mangas.mangaSameAuthor &&
                    context.manga.mangas.mangaSameAuthor.length > 0 &&
                    context.manga.mangas.mangaSameAuthor.map((m) => (
                      <HotManga
                        key={"samemanga-" + m.id}
                        data={m}
                        handleClick={context.handleClick}
                      ></HotManga>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default DetailManga;
