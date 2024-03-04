import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import React, {useState} from 'react'

export default function DefaultLayout({children}) {
  const [scroll, setScroll] = useState(0)
    document.addEventListener("scroll", (event) => {
        setScroll(window.scrollY)
    });
    
  return (
    <div className="w-full bg-gray-300 relative z-0">
        {children.type.name === 'Home' || children.type.name === 'ReadManga' ? <Navbar scroll={scroll} isHome={true}></Navbar> : <Navbar styleData='text-black opacity-60'></Navbar>}
        <div>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
