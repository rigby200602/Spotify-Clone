import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    // Tracking time
    const [track,setTrack] = useState(songsData[0]);
    // play or not
    const [playStatus,setPlayStatue] = useState(false);
    //Time of song
    const [time, setTime] = use({
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
        setPlayStatue(true)
    }
    // Pause method
    const pause = () => {
        audioRef.current.pause()
        setPlayStatue(false)
    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatue,
        time,
        setTime,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;