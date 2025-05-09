import React from "react";

const Hero = ({ darkMode }) => {
    const sectionBg = darkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-[#f5f5dc] to-[#d3d3d3]"; // beige to light gray

    const headingColor = darkMode ? "text-yellow-400" : "text-gray-800";
    const paragraphColor = darkMode ? "text-gray-300" : "text-gray-600";
    const buttonBg = darkMode
        ? "bg-gradient-to-tr from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
        : "bg-gradient-to-tr from-white to-[#f9f9f9] hover:from-[#f0f0f0] hover:to-[#e0e0e0]";
    const buttonText = darkMode ? "text-yellow-300" : "text-gray-800";
    const shadowStyle = darkMode ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.1)]";

    return (
        <section className={`py-20 ${sectionBg} text-center transition-colors duration-500`}>
            <div className="max-w-4xl mx-auto px-6">
                <h1 className={`text-4xl md:text-5xl font-playfair-display font-bold mb-6 ${headingColor}`}>
                    Unlock the Value of Unused Software Licenses
                </h1>
                <p className={`text-lg font-open-sans mb-8 ${paragraphColor}`}>
                    SoftSell helps you resell unused software licenses and get paid—fast.
                </p>
                <button
                    className={`
                        ${buttonBg} ${buttonText} 
                        font-semibold px-6 py-3 rounded-xl 
                        ${shadowStyle} transition duration-300 ease-in-out transform hover:scale-105
                    `}
                >
                    Sell My Licenses
                </button>
            </div>
        </section>
    );
};

export default Hero;
