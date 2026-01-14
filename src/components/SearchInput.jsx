import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { Context } from "../utils/ContextApi";

const SearchInput = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();
    const { isDarkMode } = useContext(Context);

    const searchQueryHandler = (event) => {
        if (event?.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };

    return (
        <div
            id="searchBox"
            className={`
                h-14 w-full md:w-[600px] flex items-center gap-4 px-5 rounded-full smooth-transition
                ${isDarkMode 
                    ? `glass ${isFocused ? 'glow scale-[1.02]' : 'hover:glow-hover'}` 
                    : `border border-[#dfe1e5] bg-white ${isFocused ? 'shadow-c border-transparent' : 'hover:shadow-c hover:border-transparent'}`
                }
            `}
        >
            <AiOutlineSearch 
                size={22} 
                className={`smooth-transition ${
                    isDarkMode 
                        ? (isFocused ? 'text-google-blue' : 'text-gray-400')
                        : 'text-[#9aa0a6]'
                }`}
            />
            <input
                type="text"
                placeholder="Search the web..."
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={searchQuery}
                autoFocus
                className={`grow bg-transparent outline-none text-base ${
                    isDarkMode 
                        ? 'text-white placeholder-gray-500' 
                        : 'text-black/[0.87] placeholder-gray-400'
                }`}
            />
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={22}
                        className={`cursor-pointer smooth-transition ${
                            isDarkMode 
                                ? 'text-gray-400 hover:text-white' 
                                : 'text-[#70757a] hover:text-black'
                        }`}
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <div className={`h-6 w-[1px] ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <img 
                    className={`h-6 w-6 cursor-pointer hover:scale-110 smooth-transition ${isDarkMode ? 'opacity-70 hover:opacity-100' : ''}`}
                    src={MicIcon} 
                    alt="Voice Search" 
                />
                <img
                    className={`h-6 w-6 cursor-pointer hover:scale-110 smooth-transition ${isDarkMode ? 'opacity-70 hover:opacity-100' : ''}`}
                    src={ImageIcon}
                    alt="Image Search"
                />
            </div>
        </div>
    );
};

export default SearchInput;