import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { query, startIndex } = useParams();
    const { imageSearch, isDarkMode } = useContext(Context);

    useEffect(() => {
        fetchSearchResults();
        window.scrollTo(0, 0);
    }, [query, startIndex, imageSearch]);

    const fetchSearchResults = () => {
        setLoading(true);
        setError(null);
        let payload = { q: query, start: startIndex };
        if (imageSearch) {
            payload.searchType = "image";
        }
        fetchDataFromApi(payload)
            .then((res) => {
                console.log(res);
                setResult(res);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch results. Please try again.");
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]' : 'bg-white'}`}>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-google-blue border-t-transparent rounded-full animate-spin"></div>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Searching...</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Finding the best results for you</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]' : 'bg-white'}`}>
                <div className={`rounded-2xl p-8 text-center max-w-md ${isDarkMode ? 'glass' : 'bg-gray-100'}`}>
                    <div className="text-6xl mb-4">😕</div>
                    <p className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Oops!</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{error}</p>
                </div>
            </div>
        );
    }

    if (!result) return null;
    const { items, queries, searchInformation } = result;

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]' : 'bg-white'}`}>
            <SearchResultHeader />
            <main className="grow p-6 pb-0 md:pr-8 md:pl-24 mt-4">
                {/* Results Info */}
                <div className={`inline-flex items-center text-sm mb-8 rounded-full px-5 py-3 ${isDarkMode ? 'text-gray-400 glass' : 'text-gray-600 bg-gray-100'}`}>
                    <span className="mr-2">📊</span>
                    <span>
                        About <span className="text-google-blue font-semibold">{searchInformation.formattedTotalResults}</span> results 
                        <span className="mx-2">•</span>
                        <span className="text-google-green font-semibold">{searchInformation.formattedSearchTime}</span> seconds
                    </span>
                </div>

                {/* Results Grid */}
                {!imageSearch ? (
                    <div className="space-y-5 max-w-4xl">
                        {items?.map((item, index) => (
                            <SearchedItemTemplate key={index} data={item} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                        {items?.map((item, index) => (
                            <SearchedImageItemTemplate
                                key={index}
                                data={item}
                            />
                        ))}
                    </div>
                )}
                
                <Pagination queries={queries} />
            </main>
            <Footer />
        </div>
    );
};

export default SearchResult;