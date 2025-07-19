import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

const Header = () => {

    const [focusHeader, setFocusHeader] = useState(null)

    function handleOnClickSearch(item) {
        setFocusHeader(item)
    }


    return (
        <div className='fixed top-0 flex flex-col bg-zinc-900 h-28 w-[25vw] m-2 rounded-lg z-20'>
            <div className='flex flex-col justify-between m-3 text-gray-400'>
                <Link to="/" className={`flex items-center  h-9 mb-3 hover:text-white ${focusHeader === 'Home' ? 'text-white' : ''}`} onClick={() => handleOnClickSearch('Home')}>
                    <GoHomeFill className=' h-11 w-11 p-2' />
                    <div className=' font-bold  text-base pl-3'>
                        Home
                    </div>
                </Link>
                <Link to="/search" className={`flex items-center text-gray-400 hover:text-white h-9`} onClick={() => handleOnClickSearch('Search')}>
                    <div className={`flex items-center ${focusHeader === 'Search' ? 'text-white' : ''}`} >
                        <FiSearch className=' h-11 w-11 p-2' />
                        <div className='font-bold  text-base pl-3'>
                            Search
                        </div>
                    </div>

                </Link>

            </div>
        </div>
    )
}

export default Header;
