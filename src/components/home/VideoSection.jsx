const VideoSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/public/videos/hood video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="w-1/2">
          <p className="text-5xl text-center font-light">Double Suction</p>
          <h1 className="text-7xl text-center font-bold">Modern Sensor</h1>
          <p className="text-black text-4xl text-center mt-5 tracking-widest">
            <span className="bg-white px-8 py-1">Smart Hood</span>
          </p>

          <div className="mt-40">
            <p className="text-center font-semibold text-4xl tracking-widest">
              No Smoke
            </p>
            <p className="text-center text-2xl tracking-widest font-extralight">
              Can Escape
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
