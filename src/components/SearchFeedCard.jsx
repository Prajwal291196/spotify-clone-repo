import React, { useState } from 'react'

import { LibraryPlaylists } from '../Context/Constants';
import { FooterValues } from '../Context/Constants';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GrInstallOption } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import MainFooter from './MainFooter';


const SearchFeedCard = () => {

  return (
    <div className='flex flex-col w-[74vw] h-[90vh] mb-[10vh] left-[25vw] fixed overflow-hidden z-50'>
      <div className=" w-full flex flex-col my-2 mx-3 bg-zinc-900 overflow-auto rounded-lg text-white">
        <div className="flex items-center justify-between m-2 ">
          <div className="flex items-center justify-center text-zinc-400 p-2">
            <BsChevronLeft className='h-8 w-8 bg-black rounded-full p-1 pr-2 mr-2 hover:text-white' />
            <BsChevronRight className='h-8 w-8 bg-black rounded-full p-1 pl-2 mr-2 hover:text-white' />
            <div className=' flex items-center justify-center h-12 bg-zinc-800 rounded-full hover:border-zinc-600 hover:border hover:bg-zinc-700'>
              <FiSearch className='text-white h-6 w-6 p-1 mx-2 ' />
              <input type='text'
                placeholder='What do you want to listen to?' className='bg-transparent text-white w-96 outline-none text-xs font-medium placeholder-zinc-500'
                autoFocus
              />
            </div>
          </div>
          <div className="flex items-center justify-around">
            <button className='text-black bg-white text-sm font-bold px-3 py-1 rounded-2xl mx-1 hover:scale-105'>Explore Premium</button>
            <div className="flex items-center justify-around text-white bg-black text-sm font-bold px-3 py-1 rounded-2xl mx-1 hover:scale-105">
              <GrInstallOption className='mx-1 ' />
              <button>install App</button>
            </div>
            <GoBell className='h-9 w-9 bg-black rounded-full p-2 mx-1 text-zinc-400 hover:text-white' />
            <CgProfile className='h-9 w-9 bg-black rounded-full p-2 mx-1 text-zinc-400 hover:text-white' />
          </div>
        </div>
        <div className="flex flex-col p-6">
          <div className="flex text-white font-semibold text-2xl">Browse all</div>
          <div className="grid grid-cols-7 gap-1 pt-5">
            {LibraryPlaylists.map((items) => {
              return (
                <div key={items?.key} className='block relative bg-red-500 w-44 h-48 m-1 overflow-hidden rounded-lg'>
                  <div className="flex font-bold text-2xl p-3">{items?.profile}</div>
                  <img className=" absolute -right-5 -bottom-4 w-28 h-28 transform rotate-[30deg]" src={items?.url?.playlistImg} />
                </div>
              )
            })
            }
          </div>
        </div>
        <MainFooter />
      </div>

    </div>
  )
}

export default SearchFeedCard
