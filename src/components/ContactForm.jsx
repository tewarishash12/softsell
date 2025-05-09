import React, { useState } from "react";

const ContactForm = ({ darkMode }) => {
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
        console.log(form);
        alert("Message sent!");
        setForm({name: "",
        email: "",
        company: "",
        licenseType: "",
        message: ""})
    };

    const bgColor = darkMode ? "bg-[#1c1c1c]" : "bg-[#f9f6f2]";
    const textColor = darkMode ? "text-[#f0c674]" : "text-gray-800";
    const inputBg = darkMode ? "bg-[#2b2b2b]" : "bg-white";
    const borderColor = darkMode ? "border-gray-700" : "border-gray-300";
    const inputText = darkMode ? "text-white" : "text-gray-800";
    const buttonText = darkMode ? "text-gray-900" : "text-white";

    return (
        <section className={`py-20 ${bgColor} transition-colors duration-500`}>
            <div className="max-w-2xl mx-auto px-6">
                <h2 className={`text-4xl font-serif mb-10 text-center ${textColor}`}>
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inputs */}
                    {["name", "email", "company"].map((field) => (
                        <input
                            key={field}
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={form[field]}
                            onChange={handleChange}
                            required
                            className={`w-full p-4 border ${borderColor} ${inputBg} ${inputText} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6a75c] transition`}
                        />
                    ))}

                    {/* License Select */}
                    <select
                        name="licenseType"
                        value={form.licenseType}
                        onChange={handleChange}
                        required
                        className={`w-full p-4 border ${borderColor} ${inputBg} ${inputText} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6a75c] transition`}
                    >
                        <option value="">Select License Type</option>
                        <option value="SaaS">SaaS</option>
                        <option value="On-Premise">On-Premise</option>
                        <option value="Open Source">Open Source</option>
                    </select>

                    {/* Message */}
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className={`w-full p-4 border ${borderColor} ${inputBg} ${inputText} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6a75c] transition`}
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-[#d6a75c] to-[#f0c674] ${buttonText} font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#d6a75c] transition`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;