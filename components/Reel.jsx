'use client'

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi"

function Reel(){
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying, setIsPlaying] = useState(true);

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
        // videoElement.addEventListener('loadedmetadata', () => {
        //     console.log('Original video width: ', videoElement.videoWidth);
        //     console.log('Original video height: ', videoElement.videoHeight);
        // });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play().catch((error) => {
                        console.error('Failed to play video:', error)
                    });
                    setIsPlaying(true)
                } else {
                    videoElement.pause()
                    setIsPlaying(false)
                }
            });
        });
        observer.observe(videoElement);
        const handleVideoEnded = () => {
            videoElement.currentTime = 0; // Tua lại video về thời điểm 0
            videoElement.play(); // Phát video lại
        };
        videoElement.addEventListener('ended', handleVideoEnded);   
        return () => {
            observer.unobserve(videoElement);
            videoElement.removeEventListener('ended', handleVideoEnded);
        };
    }, []);

    return (
        <div className="flex">
            <div className="relative w-full" style={{paddingBottom: '125%'}}>
                <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden flex justify-center">
                    <video
                        ref={videoRef} 
                        onClick={togglePlay}
                        className="cursor-pointer"
                        muted
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