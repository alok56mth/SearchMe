import { useState, useEffect, useContext } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import { pagination } from "../utils/Constants";
import { Context } from "../utils/ContextApi";

const Pagination = ({ queries }) => {
    const { query } = useParams();
    const [page, setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();
    const { isDarkMode } = useContext(Context);

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query]);

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    return (
        <div className="flex flex-col items-center py-14 max-w-[700px]">
            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mb-6">
                {queries.previousPage && (
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full smooth-transition ${
                            isDarkMode 
                                ? 'btn-modern' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                        onClick={() =>
                            paginationClickHandler(
                                queries.previousPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronLeft size={18} />
                        <span className="hidden md:block text-sm">Previous</span>
                    </button>
                )}
                
                {queries.nextPage && (
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full smooth-transition ${
                            isDarkMode 
                                ? 'btn-modern' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                        onClick={() =>
                            paginationClickHandler(
                                queries.nextPage[0].startIndex
                            )
                        }
                    >
                        <span className="hidden md:block text-sm">Next</span>
                        <FiChevronRight size={18} />
                    </button>
                )}
            </div>
            
            {/* Page Numbers */}
            <div className="flex gap-2">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer smooth-transition ${
                            page === p.startIndex 
                                ? "bg-google-blue text-white" 
                                : isDarkMode 
                                    ? "glass text-gray-400 hover:text-white hover:bg-white/10"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {p.page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Pagination;