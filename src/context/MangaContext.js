import { createContext, useContext, useState, useEffect } from "react";

const MangaContext = createContext()

function ContextWrap({children}) {
    const data = {
        
    }    
    return (
        <MangaContext.Provider value={data}>
            {children}
        </MangaContext.Provider>
    )
}
export {ContextWrap, MangaContext}
