


// const VideoSection = () => {
//   return (
//     <div className="relative min-h-screen w-full flex items-center text-white overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/videos/hood-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoSection;


import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
      >
        <source src="/videos/hood-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute right-2 bottom-2 md:bottom-5 md:right-5 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
};

export default VideoSection;


