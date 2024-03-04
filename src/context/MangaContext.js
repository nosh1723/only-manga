import { createContext, useContext, useState, useEffect } from "react";

const MangaContext = createContext()

function ContextWrap({children}) {
    const [check, setCheck] = useState(true)
    const handleCheck = () => {
        check ? setCheck(false) : setCheck(true)
    }
    const data = {
        handleCheck,
        check
    }    
    return (
        <MangaContext.Provider value={data}>
            {children}
        </MangaContext.Provider>
    )
}
export {ContextWrap, MangaContext}
