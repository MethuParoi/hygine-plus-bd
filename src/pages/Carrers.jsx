import React from 'react'
import carrersVideo from "../assets/Carrers/career 1st .mp4"

const Carrers = () => {
  return (
    <div>
      {/* video section */}
      <div>
        <video
          className="w-full max-h-screen object-cover"
          src={carrersVideo} autoPlay
          loop
          muted
          playsInline ></video>
      </div>
    </div>
  )
}

export default Carrers