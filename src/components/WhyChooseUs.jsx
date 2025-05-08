import React from "react";

const WhyChooseUs = () => {
    const features = [
        "Instant Quotes",
        "Secure Transactions",
        "Trusted by 1,000+ Clients",
        "24/7 Customer Support",
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
                    Why Choose SoftSell?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-xl shadow-sm dark:border-gray-700 dark:bg-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                {feature}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;