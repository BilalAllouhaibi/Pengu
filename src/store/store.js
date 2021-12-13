import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state:{
        song:{
            type: "",
            videoId: "",
            name: "",
            artist:{
                name:"",
                browseId:"",
            },
            album: {
                name: "",
                browseId: ""
            },
            duration: 0,
            thumbnails: [
                {
                    url: "",
                    width: 0,
                    height: 0,
                },
            ],
            params: "",
        },

        songs:[],
        },

    mutations:{
        setSongs(state,data){
            state.songs = data
        }
    },
    actions:{
        async searchSong(context,searchTerm){
            console.log("-----------store----------")
            console.log(searchTerm)
            let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchTerm}`)
            console.log(data)
            context.commit("setSongs", data.data)
        },
        test(){
            console.log("test")
        }
    },
    getters:{

    }
});
export default store