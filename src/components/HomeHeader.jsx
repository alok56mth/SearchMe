import { useContext } from "react";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";

const HomeHeader = () => {
    const { isDarkMode } = useContext(Context);

    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-6">
                <span className={`text-sm font-medium cursor-pointer smooth-transition ${
                    isDarkMode 
                        ? 'text-gray-300 link-hover hover:text-white' 
                        : 'text-black/[0.87] hover:underline'
                }`}>
                    Gmail
                </span>
                <span className={`text-sm font-medium cursor-pointer smooth-transition ${
                    isDarkMode 
                        ? 'text-gray-300 link-hover hover:text-white' 
                        : 'text-black/[0.87] hover:underline'
                }`}>
                    Images
                </span>
            </div>
            <ProfileIcon/>
        </header>
    );
};

export default HomeHeader;
