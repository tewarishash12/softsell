import React from "react";

const HowItWorks = () => {
    const steps = [
        { title: "Upload License", description: "Submit your software license details securely." },
        { title: "Get Valuation", description: "We evaluate your license and offer a fair price." },
        { title: "Get Paid", description: "Receive payment quickly after approval." },
    ];

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
            <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
                How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                        <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            {step.title}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;