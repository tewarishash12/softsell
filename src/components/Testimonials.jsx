import { testimonials } from "../data/testimonials";

const Testimonials = () => {

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
                    What Our Customers Say
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <p className="italic mb-4 text-gray-900 dark:text-white">“{t.quote}”</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
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