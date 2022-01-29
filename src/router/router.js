import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home"
import Artists from "../view/Artists"
import Songs from "../view/Songs"
import Playlists from "../view/Playlists"
import ArtistPopup from "../components/ArtistPopup"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path:"/artists",
        name: "Artists",
        component: Artists,
        children:[
          {
              path: ":results",
              name: "Artist",
              component: ArtistPopup
            },
          
        ]
      },
      {
        path: "/Songs",
        name: "Songs",
        component: Songs,
        children:[
          
          {
            path: ":results",
            component: Songs
          },
        ]
      },
    

 { path:"/Song",
   name:"Song",
   component: Songs,  
   children:[  {
        path:':songId',
        component: Songs
      },]
    },
     
      {
        path:"/playlists",
        name: "Playlists",
        component: Playlists
      },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;