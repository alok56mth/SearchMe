import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Context } from "../utils/ContextApi";

import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    const { isDarkMode, setIsDarkMode } = useContext(Context);

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]' 
                : 'bg-white'
        }`}>
            <HomeHeader />
            
            {/* Theme Toggle Button */}
            <div className="absolute top-4 left-4 md:left-6">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-3 rounded-full smooth-transition ${
                        isDarkMode 
                            ? 'glass hover:bg-white/10 text-yellow-400' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
            </div>

            <main className="grow flex justify-center items-center">
                <div className="w-full px-5 flex flex-col items-center -mt-20">
                    {/* Logo with Glow Effect */}
                    <div className={`mb-10 ${isDarkMode ? 'float-animation' : ''}`}>
                        <img
                            className={`w-[200px] md:w-[300px] ${
                                isDarkMode ? 'drop-shadow-[0_0_30px_rgba(66,133,244,0.4)]' : ''
                            }`}
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    
                    {/* Search Input */}
                    <SearchInput />
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-10">
                        <button className={`h-10 px-6 text-sm font-medium rounded-full smooth-transition ${
                            isDarkMode 
                                ? 'btn-modern' 
                                : 'bg-[#f8f9fa] text-[#3c4043] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'
                        }`}>
                            Google Search
                        </button>
                        <button className={`h-10 px-6 text-sm font-medium rounded-full smooth-transition ${
                            isDarkMode 
                                ? 'btn-modern' 
                                : 'bg-[#f8f9fa] text-[#3c4043] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'
                        }`}>
                            I'm Feeling Lucky
                        </button>
                    </div>
                    
                    {/* Tagline */}
                    <p className={`mt-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {isDarkMode ? 'Search the web with style' : 'Search the web'}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;