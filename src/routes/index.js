import Home from "../page/Home/Home";
import DetailManga from '../page/DetailManga'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/manga/:id', component: DetailManga},
]

const privateRoute = [

]

export {publicRoutes, privateRoute}