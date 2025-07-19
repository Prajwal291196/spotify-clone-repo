import React, { useState, createContext, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [searchResult, setSearchResult] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("trending");

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory)
    },[selectedCategory]);

    const fetchSelectedCategoryData = (q) =>{
        fetchDataFromApi(`search/?q=${q}`).then((albums) =>{
            console.log(albums)
            setSearchResult(albums);
        })
    } 

return(
    <Context.Provider value={{searchResult,selectedCategory,setSelectedCategory}}>
        {props.children}
    </Context.Provider>
)
}