import { useContext } from "react";
import { TbGridDots } from "react-icons/tb";
import Profile from "../assets/profile-200x200.jpg";
import { Context } from "../utils/ContextApi";

const ProfileIcon = () => {
    const { isDarkMode } = useContext(Context);

    return (
        <div className="flex items-center gap-3">
            {/* Grid Icon */}
            <span className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer smooth-transition ${
                isDarkMode 
                    ? 'glass hover:bg-white/10' 
                    : 'hover:bg-gray-100'
            }`}>
                <TbGridDots size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
            </span>
            
            {/* Profile Photo */}
            <span className={`w-10 h-10 rounded-full overflow-hidden cursor-pointer smooth-transition hover:scale-105 ${
                isDarkMode 
                    ? 'ring-2 ring-google-blue/50 hover:ring-google-blue' 
                    : 'ring-2 ring-gray-200 hover:ring-gray-400'
            }`}>
                <img 
                    className="h-full w-full object-cover" 
                    src={Profile} 
                    alt="Profile"
                />
            </span>
        </div>
    );
};

export default ProfileIcon;
