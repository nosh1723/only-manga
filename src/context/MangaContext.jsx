import { createContext, useContext, useState, useEffect } from "react";
import { chaptersService, dataManga } from "../apiService/chaptersService";

const MangaContext = createContext()

function ContextWrap({ children }) {
    const [check, setCheck] = useState(true)
    const [reRender, setReRender] = useState(true);
    const [chapters, setChapters] = useState({});
    const [manga, setManga] = useState({
        isLoading: true,
        mangas: []
    });
    const [ipValue, setInpValue] = useState('')
    const [mangasSearchResult, setMangasSearchResult] = useState({
        isLoading: true,
        mangas: []
    })
    const handleCheck = () => {
        check ? setCheck(false) : setCheck(true)
    }
    const handleClick = () => {
        setReRender(!reRender)
    };

    const fetchData = (id) => {
        const fetchChapters = async () => {
            const result = await chaptersService(id);
            setChapters(result);
        };
        fetchChapters();
        const fetchManga = async () => {
            const result = await dataManga(id);
            setManga({ ...manga, isLoading: false, mangas: result });
        };
        fetchManga();
    }

    const data = {
        handleCheck,
        check,
        setReRender,
        reRender,
        handleClick,
        chapters,
        manga,
        fetchData,
        mangasSearchResult,
        setMangasSearchResult,
        setInpValue,
        ipValue
    }
    return (
        <MangaContext.Provider value={data}>
            {children}
        </MangaContext.Provider>
    )
}
export { ContextWrap, MangaContext }
