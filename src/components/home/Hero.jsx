// import bgImage from '/images/main-banner-Top.jpg';

// const Hero = () => {
//     return (
//         <div 
//             className="h-screen flex items-center justify-center text-white w-full overflow-x-hidden"
//             // style={{
//             //     backgroundImage: `url(${bgImage})`,
//             //     backgroundSize: "cover",
//             //     backgroundPosition: "center",
//             // }}
//         >
//             <h1>Hero</h1>
//         </div>
//     );
// };

// export default Hero;

import bgImage from '/images/main-banner-Top.jpg';

const Hero = () => {
    return (
        <div 
            className="h-screen w-full max-w-full flex items-center  text-white overflow-hidden "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='w-11/12 mx-auto'>
                <div className='w-1/2'>
                    <p className='text-5xl  text-center font-light'>Double Suction</p>
                    <h1 className='text-7xl text-center font-bold'>Modern Sensor</h1>
                    <p className=' text-black text-4xl text-center mt-5 tracking-widest'> <span className='bg-white px-8 py-1'>Smart Hood</span> </p>

                    <div className='mt-40'>
                        <p className='text-center font-semibold text-4xl tracking-widest '>No Smoke</p>
                        <p className='text-center text-2xl tracking-widest font-extralight '>Can Escape</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
