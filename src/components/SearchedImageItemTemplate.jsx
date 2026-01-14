import { useState, useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Context } from "../utils/ContextApi";

const SearchedImageItemTemplate = ({ data }) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { isDarkMode } = useContext(Context);

    return (
        <div
            className="group flex flex-col cursor-pointer"
            onClick={() => window.open(data.image?.contextLink || data.link, "_blank")}
        >
            {/* Image Container */}
            <div className={`relative rounded-xl overflow-hidden h-[140px] md:h-[160px] lg:h-[180px] smooth-transition group-hover:scale-[1.03] ${
                isDarkMode 
                    ? 'glass group-hover:glow-hover' 
                    : 'bg-gray-100 group-hover:shadow-lg'
            }`}>
                {isLoading && (
                    <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <div className="w-6 h-6 border-2 border-google-blue border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                {!imageError ? (
                    <img
                        className={`h-full w-full object-cover smooth-transition ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        src={data.link}
                        alt={data.title}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setImageError(true);
                            setIsLoading(false);
                        }}
                    />
                ) : (
                    <div className={`h-full w-full flex items-center justify-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <span>Image unavailable</span>
                    </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end justify-between p-3">
                    <span className="text-white text-xs font-medium truncate max-w-[80%]">{data.title}</span>
                    <FiExternalLink className="text-white text-sm flex-shrink-0" />
                </div>
            </div>

            {/* Image Info */}
            <div className="mt-3 px-1">
                <p className={`text-xs truncate flex items-center gap-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    <img 
                        src={`https://www.google.com/s2/favicons?domain=${data.displayLink}&sz=16`} 
                        alt="" 
                        className="w-3 h-3"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    {data.displayLink}
                </p>
                <p className={`text-sm truncate mt-1 smooth-transition group-hover:text-google-blue ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {data.title}
                </p>
            </div>
        </div>
    );
};

export default SearchedImageItemTemplate;