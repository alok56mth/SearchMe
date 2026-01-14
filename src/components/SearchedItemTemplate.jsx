import { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Context } from "../utils/ContextApi";

const SearchedItemTemplate = ({ data, index }) => {
    const { isDarkMode } = useContext(Context);

    function createMarkup(html) {
        return { __html: html };
    }

    return (
        <div 
            className={`group rounded-2xl p-5 smooth-transition cursor-pointer border ${
                isDarkMode 
                    ? 'glass hover:glow-hover border-transparent hover:border-google-blue/30' 
                    : 'bg-white hover:shadow-lg border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => window.open(data.link, "_blank")}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* URL & External Link */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                        <img 
                            src={`https://www.google.com/s2/favicons?domain=${data.displayLink}&sz=32`} 
                            alt="" 
                            className="w-4 h-4"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    </div>
                    <div>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{data.displayLink}</p>
                        <p className={`text-xs truncate max-w-[300px] md:max-w-[500px] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{data.formattedUrl}</p>
                    </div>
                </div>
                <FiExternalLink className={`smooth-transition opacity-0 group-hover:opacity-100 ${isDarkMode ? 'text-gray-500 group-hover:text-google-blue' : 'text-gray-400 group-hover:text-google-blue'}`} />
            </div>

            {/* Title */}
            <h3 className="text-xl text-google-blue font-medium mb-2 group-hover:underline decoration-google-blue/50">
                {data.title}
            </h3>

            {/* Description */}
            <div
                className={`text-sm leading-relaxed line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
            />
        </div>
    );
};

export default SearchedItemTemplate;