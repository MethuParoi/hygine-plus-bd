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
            className="h-screen w-full max-w-full flex items-center justify-center text-white overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1>Hero</h1>
        </div>
    );
};

export default Hero;
