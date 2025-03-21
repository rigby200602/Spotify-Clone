import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    // Ref from playerContext
    const {track,seekBar,seekBg,playStatus,play,pause, time,prev,next,seekSong} = useContext(PlayerContext);
    
    
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            {/* Songs Info  */}
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="Song image" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            {/* Control icon  */}
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={prev} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev" />
                    {/* render btn base on playStatus, false = play, true = pause */}
                    {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause"  />
                    : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />}
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>
                {/* Timer */}
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div onClick={seekSong}ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-400 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            {/* button */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="Play" />
                <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="Mic" />
                <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="Queue" />
                <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="Speaker" />
                <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="Volume" />
                {/* Volume setting */}
                <div className='w-20 h-1 bg-slate-50 rounded-sm cursor-pointer'>

                </div>
                <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="MiniPlay" />
                <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    )
}

export default Player
