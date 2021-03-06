import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state:{
        playlistIndex: 0,
        song:{
            type: "",
            videoId: "",
            name: "",
            artist:{
                name: "",
                description: "",
                views: 0,
                products: {
                    songs: {
                        content: [],
                        videoId: "",
                        params: ""
                    },
                    albums: {
                        content: [],
                        browseId: "",
                        params: ""
                    },
                    singles: {
                        content: [],
                        browseId: "",
                        params: ""
                    },
                    videos: {
                        content: [],
                        videoId: "",
                        params: ""
                    }
                },
                thumbnails: [
                    {
                        url: "",
                        width: 0,
                        height: 0
                    }
                ]
                
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
        
 artists:[
    ],
    songs:[],
    playlists:[]
        },

    mutations:{
        setSongs(state,data){
            state.songs = data
        },
        setArtists(state,data){
            state.artists = data
        },
        setArtist (state,data){
            state.artist = data
        },
        setPlaylistIndex (state,data){
            state.playlistIndex = data
        },
        setPlaylists (state,data){
            state.playlists = data
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
        },
        async searchArtist(context, searchTerm){
            let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/artists/${searchTerm}`)
            console.log(data)
            context.commit("setArtists", data.data)

            
        },
        async getArtistById(context, artistId){
            console.log(artistId)
            let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/artist/${artistId}`)
            console.log(data)
            context.commit("setArtist", data.data)
        },
        getPlaylistIndex(context){
            let data = window.player.getPlaylistIndex()
            context.commit("setPlaylistIdex", data.data)
    },
    async searchPlaylist(context,searchTerm){
        let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/playlists/${searchTerm}`)
        context.commit("setPlaylists", data.data)
        console.log(data)
        console.log(this.state.playlists)
    }
},
    getters:{

    }
});
export default store