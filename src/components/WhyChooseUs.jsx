import { whyChooseUs } from "../data/features";

const WhyChooseUs = ({ darkMode }) => {
    const sectionBg = darkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-[#fefefe] to-[#f5f5f5]"; // soft warm white tones

    const headingColor = darkMode ? "text-yellow-400" : "text-gray-900";
    const cardBorder = darkMode ? "border-gray-700" : "border-gray-200";
    const cardBg = darkMode
        ? "bg-gradient-to-tr from-gray-800 to-gray-700"
        : "bg-gradient-to-tr from-white to-[#fafafa]";
    const iconColor = darkMode ? "text-yellow-300" : "text-gray-800";
    const titleColor = darkMode ? "text-white" : "text-gray-900";
    const descriptionColor = darkMode ? "text-gray-400" : "text-gray-600";
    const shadowStyle = darkMode
        ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        : "shadow-[0_4px_20px_rgba(0,0,0,0.1)]";

    return (
        <section className={`py-20 ${sectionBg} transition-colors duration-500`}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className={`text-3xl md:text-4xl font-playfair-display font-semibold mb-14 ${headingColor}`}>
                    Why Choose SoftSell?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {whyChooseUs.map((feature, i) => (
                        <div
                            key={i}
                            className={`p-8 border ${cardBorder} rounded-2xl ${cardBg} ${shadowStyle} transition-transform duration-300 hover:scale-105`}
                        >
                            <div className={`text-5xl mb-6 ${iconColor}`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-2xl font-playfair-display font-bold mb-3 ${titleColor}`}>
                                {feature.title}
                            </h3>
                            <p className={`font-open-sans text-base ${descriptionColor}`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
