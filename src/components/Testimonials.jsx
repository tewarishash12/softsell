import { testimonials } from "../data/testimonials";

const Testimonials = ({ darkMode }) => {
    const sectionBg = darkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-[#f6f5f2] to-[#eaeaea]";

    const headingColor = darkMode ? "text-yellow-400" : "text-gray-900";
    const cardBg = darkMode
        ? "bg-gradient-to-tr from-gray-800 to-gray-700"
        : "bg-gradient-to-tr from-white to-[#fdfdfd]";
    const quoteColor = darkMode ? "text-white" : "text-gray-800";
    const nameColor = darkMode ? "text-yellow-300" : "text-gray-900";
    const roleColor = darkMode ? "text-gray-400" : "text-gray-600";
    const shadowStyle = darkMode
        ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        : "shadow-[0_4px_20px_rgba(0,0,0,0.1)]";

    return (
        <section className={`py-20 ${sectionBg} transition-colors duration-500`}>
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className={`text-3xl md:text-4xl font-playfair-display font-semibold mb-14 ${headingColor}`}>
                    What Our Customers Say
                </h2>
                <div className="grid gap-10 md:grid-cols-2">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-2xl ${cardBg} ${shadowStyle} transition-transform duration-300 hover:scale-105`}
                        >
                            <p className={`italic text-lg mb-6 font-open-sans ${quoteColor}`}>
                                “{t.quote}”
                            </p>
                            <p className={`font-semibold text-lg ${nameColor}`}>{t.name}</p>
                            <p className={`text-sm ${roleColor}`}>
                                {t.role}, {t.company}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
