import Home from "../page/Home/Home";
import DetailManga from "../page/DetailManga";
import ReadManga from "../page/ReadManga";
import Mangas from "../page/Mangas";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/manga/:id", component: DetailManga },
  { path: "/manga/:mangaid/chapter/:id", component: ReadManga },
  { path: "/search/:title", component: Mangas },
  { path: "/manga", component: Mangas },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
