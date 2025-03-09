import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    // Tracking time
    const [track,setTrack] = useState(songsData[0]);
    // play or not
    const [playStatus,setPlayStatus] = useState(false);
    //Time of song
    const [time, setTime] = useState({
        currentTime: {
            second:0,
            minute:0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    }) 
    // Play method
    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }
    // Pause method
    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }

    // time display
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime%60),
                        minute: Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration%60),
                        minute: Math.floor(audioRef.current.duration/60)
                    }
                })
            }
        }, 1000)
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;