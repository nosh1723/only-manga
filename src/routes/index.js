import Home from "../page/Home/Home";
import DetailManga from '../page/DetailManga'
import ReadManga from "../page/ReadManga";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/manga/:id', component: DetailManga},
    {path: '/manga/:mangaid/chapter/:id', component: ReadManga}
]

const privateRoute = [

]

export {publicRoutes, privateRoute}