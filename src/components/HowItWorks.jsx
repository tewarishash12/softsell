import { howItWorksSteps } from "../data/features";

const HowItWorks = ({ darkMode }) => {
    const sectionBg = darkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-[#f9f9f6] to-[#eaeaea]"; // warm beige-gray blend

    const headingColor = darkMode ? "text-yellow-400" : "text-gray-900";
    const cardBg = darkMode
        ? "bg-gradient-to-tr from-gray-800 to-gray-700"
        : "bg-gradient-to-tr from-white to-[#fdfdfd]";
    const cardTextColor = darkMode ? "text-yellow-300" : "text-gray-900";
    const cardDescriptionColor = darkMode ? "text-gray-300" : "text-gray-600";
    const cardShadow = darkMode
        ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        : "shadow-[0_4px_20px_rgba(0,0,0,0.1)]";

    return (
        <section className={`py-20 ${sectionBg} text-center transition-colors duration-500`}>
            <h2 className={`text-3xl md:text-4xl font-playfair-display font-semibold mb-14 ${headingColor}`}>
                How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                {howItWorksSteps.map((step, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl ${cardBg} ${cardShadow} transition-transform duration-300 hover:scale-105`}
                    >
                        <div className="text-5xl mb-6">{step.icon}</div>
                        <div className={`text-2xl font-playfair-display font-bold mb-3 ${cardTextColor}`}>
                            {step.title}
                        </div>
                        <p className={`font-open-sans text-base ${cardDescriptionColor}`}>
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
