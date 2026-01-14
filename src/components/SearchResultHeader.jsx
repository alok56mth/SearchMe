import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const { imageSearch, setImageSearch, isDarkMode, setIsDarkMode } = useContext(Context);
    const [selectedMenu, setSelectedMenu] = useState(imageSearch ? "Images" : "All");

    // Sync selectedMenu with imageSearch context
    useEffect(() => {
        setSelectedMenu(imageSearch ? "Images" : "All");
    }, [imageSearch]);

    const clickHandler = (menuItem) => {
        const isImageSearch = menuItem.name === "Images";
        setImageSearch(isImageSearch);
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className={`p-4 pb-0 md:pr-5 md:pl-20 md:pt-7 flex md:block flex-col items-center sticky top-0 z-50 ${
            isDarkMode 
                ? 'border-b border-white/10 glass' 
                : 'border-b border-[#ebebeb] bg-white'
        }`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-2 rounded-full smooth-transition ${
                            isDarkMode 
                                ? 'glass hover:bg-white/10 text-yellow-400' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>

                    <Link to="/" onClick={() => setImageSearch(false)}>
                        <img
                            className={`hidden md:block w-[92px] smooth-transition hover:scale-105 ${
                                isDarkMode ? 'drop-shadow-[0_0_15px_rgba(66,133,244,0.3)]' : ''
                            }`}
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                <div className="hidden md:block">
                    <ProfileIcon />
                </div>
            </div>

            <div className="flex ml-[-12px] mt-4 gap-1">
                {menu.map((menuItem, index) => (
                    <span
                        key={index}
                        className={`flex items-center px-4 py-3 rounded-full cursor-pointer smooth-transition relative ${
                            selectedMenu === menuItem.name 
                                ? "text-google-blue bg-google-blue/10" 
                                : isDarkMode 
                                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                                    : "text-[#5f6368] hover:bg-gray-100"
                        }`}
                        onClick={() => clickHandler(menuItem)}
                    >
                        <span className="hidden md:block mr-2">
                            {menuItem.icon}
                        </span>
                        <span className="text-sm font-medium">{menuItem.name}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SearchResultHeader;