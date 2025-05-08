import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-6 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} SoftSell. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;