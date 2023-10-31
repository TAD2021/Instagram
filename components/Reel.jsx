'use client'

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi"

function Reel(){
    const videoRef = useRef(null);
    const [paddingBottom, setPaddingBottom] = useState('125%')
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to handle play/pause
    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };
    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(prev => !prev)
    }
    useEffect(() => {
        const videoElement = videoRef.current;
        videoRef.current.play()
        if(videoElement.videoWidth > videoElement.videoHeight){
            setPaddingBottom('80%')
        }
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const videoPosition = videoRef.current.getBoundingClientRect();
        
            // Kiểm tra nếu video nằm trong khung nhìn của trình duyệt
            if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {
                // Kiểm tra nếu video chưa được phát
                if (!isPlaying) {
                    videoRef.current.play();
                    setIsPlaying(true);
                }
            } else {
                // Kiểm tra nếu video đang phát
                if (isPlaying) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPlaying]);
    

    return (
        <div className="flex">
            <div className="relative w-full" style={{paddingBottom: paddingBottom}}>
                <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden flex">
                    <video
                        autoPlay
                        ref={videoRef} 
                        width='100%'
                        onClick={togglePlay}
                        className="cursor-pointer"
                    >
                        <source src="/videos/music2.mp4" type="video/mp4" />
                    </video>
                </div>
                {!isPlaying && <div onClick={togglePlay} 
                        className="
                            cursor-pointer absolute text-white 
                            w-20 h-20 top-1/2 left-1/2 -ml-10 -mt-10"
                    >
                    <FaPlay className="w-full h-full"/>
                </div>}
                <div className="absolute w-8 h-8 bottom-0 right-0 mr-4 mb-4">
                    <div onClick={toggleMute} className="cursor-pointer rounded-full bg-gray-700 w-full h-full flex justify-center items-center">
                        {isMuted ? <BiSolidVolumeMute className="w-3 h-3 fill-white"/> :
                        <BiSolidVolumeFull className="w-3 h-3 fill-white"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reel