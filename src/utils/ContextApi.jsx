import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode

    return (
        <Context.Provider
            value={{
                imageSearch,
                setImageSearch,
                isDarkMode,
                setIsDarkMode,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};