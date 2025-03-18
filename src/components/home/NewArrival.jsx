
import bgImage from '/images/new-arrival-banner.jpg';

const NewArrival = () => {
    return (
        <div className="h-screen w-full max-w-full flex items-center  text-white overflow-hidden "
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} >
            <div className='w-11/12 mx-auto mt-20'>
                <div className='text-center mb-10'>
                    <h1 className='text-black text-5xl font-extrabold'>NEW ARRIVAL</h1>
                    <p className='text-xl text-black'>Redifine your home with our unique Bathware & Kitchenware <br></br> collection, craffted for modern living.</p>
                </div>
                
            </div>
        </div>
    );
};

export default NewArrival;