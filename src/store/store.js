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
            try{console.log("-----------store----------")
            console.log(searchTerm)
            let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchTerm}`)
            console.log(data)
            context.commit("setSongs", data.data)}catch(error){
                alert("error")
            }
        },
         async playSong(context, videoId){ 
             console.log(videoId)
            await window.player.loadVideoById(videoId)
        },
         playPausedSong(){
            console.log("play")
          window.player.playVideo()
        },
         pauseSong(){
            console.log("pause")
            window.player.pauseVideo()
        },
        changeVolume(context ,volume){
            console.log(volume)
            window.player.setVolume(volume)
        }
    
    },
    getters:{

    }
});
export default store