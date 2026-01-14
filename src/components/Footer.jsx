import React, { useContext } from "react";
import { quickLinks, settingMenu } from '../utils/Constants';
import { Context } from "../utils/ContextApi";

const Footer = () => {
    const { isDarkMode } = useContext(Context);

    return (
        <footer className={`${isDarkMode ? 'glass border-t border-white/10' : 'bg-[#f2f2f2]'}`}>
            <div className={`flex py-4 px-5 md:px-8 ${isDarkMode ? 'border-b border-white/5' : 'border-b border-[#dadce0]'}`}>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-[#70757a]'}`}>
                    🌍 India
                </span>
            </div>

            <div className={`flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-4 ${isDarkMode ? '' : 'border-b border-[#dadce0]'}`}>
                <div className="flex justify-center flex-wrap">
                    {quickLinks.map((menu, index) => (
                        <span
                            key={index}
                            className={`text-xs md:text-sm p-3 md:p-4 cursor-pointer smooth-transition ${
                                isDarkMode 
                                    ? 'text-gray-400 hover:text-white link-hover' 
                                    : 'text-[#70757a] hover:underline'
                            }`}
                        >
                            {menu}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center flex-wrap">
                    {settingMenu.map((menu, index) => (
                        <span
                            key={index}
                            className={`text-xs md:text-sm p-3 md:p-4 cursor-pointer smooth-transition ${
                                isDarkMode 
                                    ? 'text-gray-400 hover:text-white link-hover' 
                                    : 'text-[#70757a] hover:underline'
                            }`}
                        >
                            {menu}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;