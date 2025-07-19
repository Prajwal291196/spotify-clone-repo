import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

import { BiLibrary } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaList } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";

import { LibraryOptions } from "../Context/Constants";
import { LibraryPlaylists } from '../Context/Constants';

import LibraryLiked from "../images/LibraryLiked.png"
import LibraryYourEpisodes from "../images/LibraryYourEpisodes.png"


const YourLibrary = ({}) => {
  const [searchLibraryInput, setSearchLibraryInput] = useState(false);
  const [onHoverLibraryElement, setOnHoverLibraryElement] = useState(null);

  const handleLibrarySearch = () => {
    setSearchLibraryInput(!searchLibraryInput)
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='fixed w-[25vw] bg-zinc-900 h-28 m-2 mt-[128px] rounded-t-lg shadow-2xl z-20'>
        <div className='flex justify-between m-3 bg-zinc-900'>
          <div className={`flex items-center text-gray-400 hover:text-white h-9`}>
            <BiLibrary className=' h-11 w-11 p-2' />
            <div className='font-bold  text-base pl-1'>
              Your Library
            </div>
          </div>
          <div className={`flex items-center h-9`}>
            <LuPlus className='text-gray-400 hover:text-white  h-10 w-10 p-2' />
            <FaArrowRight className='text-gray-400 hover:text-white h-9 w-9 p-2' />
          </div>
        </div>
        <div className="flex items-center ml-3">
          {LibraryOptions.map((item) => {
            return (<div key={item.key} className='flex items-center text-gray-200  text-sm font-medium bg-zinc-800 hover:bg-zinc-700 m-1 p-3 rounded-full h-8'>
              {item.name}
            </div>)
          })}
        </div>
      </div>
      <div className='flex flex-col m-2 mt-[240px] mb-[80px] bg-zinc-900 h-[64vh] w-full top-0 rounded-b-lg z-0 overflow-y-auto scrollbar'>
        <div className='w-full'>
          <div className='flex items-center justify-between m-2 pl-1'>
            {!searchLibraryInput && (<button className='h-7 w-7 hover:bg-zinc-700 rounded-full' onClick={handleLibrarySearch}>
              <FiSearch className=' h-7 w-7 p-1 text-gray-400 hover:text-white' />
            </button>)}
            {searchLibraryInput && (<div className=' flex items-center justify-center h-7 bg-zinc-700 rounded-md'>
              <button onClick={handleLibrarySearch}>
                <FiSearch className='text-white h-7 w-7 p-1 ' />
              </button>
              <input type='text'
                placeholder='Search in Your Library' className='bg-transparent text-white w-40 outline-none text-sm font-medium placeholder-gray-400'
                autoFocus
              />
            </div>
            )}
            <div className="flex  items-center h-7 p-1 text-gray-400 text-sm font-medium hover:text-white">
              <div className="mr-1">Recents</div>
              <FaList />
            </div>
          </div>
          <div className="flex flex-col">
            <Link to="/collection/tracks" className="flex hover:bg-zinc-800 h-16 w-full rounded-md items-center justify-between">
              <div className='flex items-center'>
                <div className='h-12 w-12 m-2 '>
                  <img className="rounded-md" src={LibraryLiked} alt="Liked" />
                </div>
                <div className="flex flex-col mx-1">
                  <div className='text-white text-base font-medium'>Liked Songs</div>
                  <div className='flex items-center text-zinc-400 font-medium text-sm '>Playlist <LuDot /> 246 Songs</div>
                </div>
              </div>
              <HiMiniSpeakerWave className='m-2 text-xl text-green-400' />
            </Link>
            <Link to="/collection/your-episodes" className="flex hover:bg-zinc-800 h-16 w-full rounded-md items-center justify-between">
              <div className='flex items-center'>
                <div className='h-12 w-12 m-2 '>
                  <img className="object-cover h-12 w-12 rounded-md " src={LibraryYourEpisodes} alt="Your Episodes" />
                </div>
                <div className="flex flex-col mx-1">
                  <div className='text-white text-base font-medium'>Your Episodes</div>
                  <div className='flex items-center text-zinc-400 font-medium text-sm '>Saved & downloaded episodes</div>
                </div>
              </div>
              <HiMiniSpeakerWave className='m-2 text-xl text-green-400' />
            </Link>
            {LibraryPlaylists.map((item) => {
              return (<Link to={`/playlist/${item?.key}`} className="flex hover:bg-zinc-800 h-16 w-full rounded-md items-center justify-between" key={item?.key} 
              onMouseEnter={() => setOnHoverLibraryElement(item?.key)}
              onMouseLeave={() => setOnHoverLibraryElement(null)}>
                <div className='flex items-center'>
                  <div className='h-12 w-12 m-2 '>
                    <img className="rounded-md" src={item?.url?.playlistImg} alt={item?.name} />
                  </div>
                  <div className="flex flex-col mx-1">
                    <div className='text-white text-base font-medium'>{item?.name}</div>
                    <div className='flex items-center text-zinc-400 font-medium text-sm '>Playlist <LuDot /> {item?.profile}</div>
                  </div>
                </div>
                {onHoverLibraryElement === item.key && <HiMiniSpeakerWave className='m-2 text-xl text-green-400' />}
              </Link>)
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourLibrary
