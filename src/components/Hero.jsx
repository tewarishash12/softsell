import React from "react";

const Hero = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center dark:from-teal-600 dark:to-teal-800">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-gray-900">
                    Unlock the Value of Unused Software Licenses
                </h1>
                <p className="text-lg mb-6 text-white dark:text-gray-800">
                    SoftSell helps you resell unused software licenses and get paid—fast.
                </p>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-800 dark:text-teal-600 dark:hover:bg-gray-700">
                    Sell My Licenses
                </button>
            </div>
        </section>
    );
};

export default Hero;