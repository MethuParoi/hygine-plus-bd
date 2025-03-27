import Marquee from "react-fast-marquee";
import partnerImg1 from "../../assets/partner/greatwall_logo.png";
import partnerImg2 from "../../assets/partner/rak_ceramics.png";
import partnerImg3 from "../../assets/partner/Bravat.png";
import partnerImg4 from "../../assets/partner/marquris.png";
import partnerImg5 from "../../assets/partner/Bashundhora.jpg";
import partnerImg6 from "../../assets/partner/rfl.png";



const partners = [
    {
        logo: partnerImg1,
        name: "Greatwall Ceramic",
        description:
            "A top-tier ceramics and sanitaryware brand in Bangladesh, offering premium tiles and bathroom solutions.",
    },
    {
        logo: partnerImg5,
        name: "Bashundhara Group",
        description:
            "A leading conglomerate in Bangladesh, providing high-quality sanitaryware and kitchen solutions for modern homes.",
    },
    {
        logo: partnerImg3,
        name: "Bravat Bangladesh",
        description:
            "A global leader in luxury bathware, delivering innovative and stylish bathroom solutions in Bangladesh.",
    },
    {
        logo: partnerImg2,
        name: "RAK Ceramics",
        description:
            "Providing high-end ceramic and sanitaryware solutions for elegant and modern bathrooms and enhence beauty",
    },
    {
        logo: partnerImg4,
        name: "Marquis Sanitary Ware",
        description:
            "A trusted brand for premium sanitaryware and bathroom accessories, ensuring quality and style.",
    },
    {
        logo: partnerImg6,
        name: "Shine Sanitary Ware",
        description:
            "Offering a wide range of innovative bathware products, combining functionality with aesthetics.",
    }
];


const PartnersSection = () => {
    return (
        <section className="py-16 bg-gray-50  overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-8 px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 ">
                    Our Partners & Collaborators
                </h2>
                <p className="text-gray-600  mt-2">
                    We’re proud to collaborate with industry leaders <br className="hidden md:block" /> and
                    organizations to bring the best opportunities.
                </p>
            </div>

            {/* ✅ Scrolling Partner Logos with Descriptions */}
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-6 mx-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 my-5"
                    >
                        {/* Logo */}
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-20 w-32 object-contain mb-4"
                        />

                        {/* Name */}
                        <h3 className="text-lg font-semibold text-gray-800 ">
                            {partner.name}
                        </h3>

                        {/* ✅ Small Description Below Logo */}
                        <p className="text-gray-600  text-sm mt-2">{partner.description}</p>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default PartnersSection;
