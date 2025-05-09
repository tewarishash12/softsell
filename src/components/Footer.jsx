import React from "react";

const Footer = ({ darkMode }) => {
    const bgColor = darkMode ? "bg-[#1c1c1c]" : "bg-[#f9f6f2]";
    const textColor = darkMode ? "text-[#f0c674]" : "text-gray-700";

    return (
        <footer className={`${bgColor} ${textColor} py-6 text-center font-light transition-colors duration-500`}>
            <p className="text-sm tracking-wide">
                © {new Date().getFullYear()} SoftSell. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
