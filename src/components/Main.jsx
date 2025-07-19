import React, { useState } from 'react';
import "./style.css";

import MainFooter from './MainFooter';

import { LibraryPlaylists, FooterValues, HomeCard } from "../Context/Constants"

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GrInstallOption } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 


const Main = () => {
  const [hover, setHover] = useState(null)
  const [hoverPlaylist, setHoverPlaylist] = useState(null);
  const [onHoverRecentPlaylist, SetOnHoverRecentPlaylist] = useState(null)


  return (
    <div className='flex flex-col w-[74vw] h-[90vh] mb-[10vh] left-[25vw] fixed overflow-hidden z-50' >
      <div className='w-full flex flex-col my-2 mx-3 bg-zinc-900 overflow-auto rounded-lg'>
        <div className="flex items-center justify-between m-2 ">
          <div className="flex text-zinc-400 p-2">
            <BsChevronLeft className='h-8 w-8 bg-black rounded-full p-1 pr-2 mr-2 hover:text-white' />
            <BsChevronRight className='h-8 w-8 bg-black rounded-full p-1 pl-2 hover:text-white' />
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
        <div className='flex overflow-x-hidden overflow-y-auto scrollbar'>
          <div className="flex flex-col  ">
            <div className="flex bg-gradient-to-b  from-purple-500 to-zinc-900 px-4">
              <div className="flex flex-col my-4 p-1">
                <div className='text-3xl font-bold text-white'>Good afternoon</div>
                <div className='grid grid-cols-3 grid-rows-2 gap-3  mt-5'>
                  {LibraryPlaylists.slice(0, 6).map((item) => {
                    return (<div className="flex justify-between bg-zinc-800 hover:bg-zinc-600 h-16 w-full rounded-md " key={item?.key} onMouseEnter={() => { SetOnHoverRecentPlaylist(item.key) }}
                      onMouseLeave={() => { SetOnHoverRecentPlaylist(null) }}>
                      <div className='flex items-center '>
                        <div className='h-16 w-16'>
                          <img className="rounded-s-md" src={item?.url?.playlistImg} alt={item?.name} />
                        </div>
                        <div className="flex flex-col mx-4">
                          <div className='text-white text-base font-medium'>{item?.name}</div>
                        </div>

                      </div>

                      <div className="flex items-center justify-center h-16 w-16">
                        {onHoverRecentPlaylist === item.key && <div>
                          {/*<IoIosPlay className='h-12 w-12 p-2 pl-3 bg-green-400 text-xl rounded-full ' />*/}
                          <IoIosPause className='h-12 w-12 p-2 bg-green-500 text-xl rounded-full ' />
                        </div>}
                      </div>

                    </div>)
                  })
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mx-3 p-2" >
              {HomeCard.map((playList) => {
                return (
                  <div key={playList.key}>
                    <div className='text-white text-2xl font-bold my-5 w-full'>{playList?.playlistName}</div>
                    <div className="flex w-full">
                      {playList.playlistItems.slice(0, 7).map((item) => {
                        return (
                          <div key={item.key} className="flex h-64 w-44 mr-7 bg-zinc-800 rounded-md overflow-hidden hover:bg-zinc-700" onMouseEnter={() => {
                            setHover(item.key)
                            setHoverPlaylist(playList.key)
                          }}
                            onMouseLeave={() => {
                              setHover(null)
                              setHoverPlaylist(null)
                            }}>
                            <div className="flex flex-col w-full m-4">
                              <div className='relative'>
                                <img className='h-36 w-40 mb-2 rounded-md' src={item?.coverImg?.imge} alt="Cover Image" />
                                <div>
                                  {hover === item.key && hoverPlaylist === playList.key && <IoIosPlay className='h-14 w-14 p-3 pl-4 bg-green-500 absolute bottom-4 right-2 z-10 rounded-full' />}
                                </div>
                              </div>
                              <div className='text-white font-bold my-1'>{item?.title}</div>
                              <div className='flex flex-wrap text-zinc-400 text-sm whitespace-pre-wrap line-clamp-2'>{item?.artist.map((i, index) => {
                                return (<React.Fragment key={index}><p className=' inline-block hover:underline'>{i}</p>{index < item?.artist.length - 1 && <span classNa me='pr-1'>,</span>}</React.Fragment>)
                              })} </div>
                              <div className='text-zinc-400  text-sm line-clamp-2'>{item?.description}</div>
                            </div>
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>

                )
              })
              }
            </div>
            <MainFooter />
          </div>
        </div>

      </div>
    </div >
  )
}

export default Main
