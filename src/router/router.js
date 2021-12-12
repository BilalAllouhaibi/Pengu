import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home"
import Artists from "../view/Artists"
import Songs from "../view/Songs"
import Playlists from "../view/Playlists"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path:"/Artists",
        name: "Artists",
        component: Artists
      },
      {
        path:"/Songs",
        name: "Songs",
        component: Songs
      },
      {
        path:"/Playlists",
        name: "Playlists",
        component: Playlists
      },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;