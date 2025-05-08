import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we'll just log the form data
        console.log(form);
        alert("Message sent!");
    };

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-2xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Company Input */}
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* License Type Select */}
                    <select
                        name="licenseType"
                        value={form.licenseType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Select License Type</option>
                        <option value="SaaS">SaaS</option>
                        <option value="On-Premise">On-Premise</option>
                        <option value="Open Source">Open Source</option>
                    </select>

                    {/* Message Input */}
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );

};

export default ContactForm;