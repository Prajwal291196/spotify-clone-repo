import React, { useState } from 'react'

import { Playing } from '../Context/Constants'

import { FaHeart } from "react-icons/fa";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineDevicesOther } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { RxShuffle } from "react-icons/rx";
import { IoIosSkipBackward, IoIosPlay, IoIosPause, IoIosSkipForward } from "react-icons/io";
import { SlLoop } from "react-icons/sl";

const Player = () => {

    return (
        <div className='flex items-center justify-between fixed bottom-0 bg-black h-[10vh] w-full z-50'>
            {Playing.map((item) => {
                return (
                    <div className="flex items-center m-2" key={item?.key}>
                        <div className='h-16 w-16 p-1'>
                            <img src={item.image.songCover}
                                alt={item.title} />
                        </div>
                        <div className="flex flex-col p-4">
                            <div className='text-white text-sm font-medium hover:underline'>{item.title}</div>
                            <div className='flex text-zinc-500 text-xs font-medium mt-0 '>
                                {item?.artist?.map((i, index) =>
                                    <React.Fragment key={index}>
                                        <div className='hover:text-white hover:underline '>{i}</div>
                                        {index < item?.artist?.length - 1 && <span className='pr-1'>,</span>}
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                        <FaHeart className='text-green-400 mx-1' />
                    </div>
                )
            })}
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-around text-zinc-400">
                    <RxShuffle className=' hover:text-white h-5 w-5 m-2' />
                    <IoIosSkipBackward className=' hover:text-white h-5 w-5 m-2' />
                    <div className="flex m-2 items-center justify-center ">
                        <IoIosPlay className=' text-black h-8 w-8 pl-1 bg-white rounded-full hover:scale-90' />
                        <IoIosPause className=' text-black h-8 w-8 p-1 bg-white rounded-full hover:scale-90' />
                    </div>
                    <IoIosSkipForward className=' hover:text-white h-5 w-5 m-2' />
                    <SlLoop className=' hover:text-white h-5 w-5 mx-2' />
                </div>
                <div className="flex justify-center items-center mb-2">
                    <p className='text-zinc-400 mx-2 text-xs'>0:40</p>
                    <input type='range' className='w-[600px]' />
                    <p className='text-zinc-400 mx-2 text-xs'>3:48</p>
                </div>
            </div>
            <div className="flex items-center justify-center text-zinc-400  m-3 ">
                <div className='group hover:text-white flex items-center justify-center'>
                    <AiOutlinePlaySquare className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Now Playing View</p>
                </div>
                <div className='group hover:text-white flex items-center justify-center'>
                    <TbMicrophone2 className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Lyrics</p>
                </div>
                <div className='group hover:text-white flex items-center justify-center'>
                    <HiOutlineQueueList className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Queue</p>
                </div>
                <div className='group hover:text-white flex items-center justify-center'>
                    <MdOutlineDevicesOther className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Connect to a device</p>
                </div>
                <div className='group hover:text-white flex items-center justify-center'>
                    <HiOutlineSpeakerWave className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Mute</p>
                </div>
                <input type='range' className='mr-2 text-white' />
                <div className='group hover:text-white flex items-center justify-end'>
                    <CgMiniPlayer className='mx-2  h-5 w-5 ' />
                    <p className='hidden group-hover:block text-zinc-300 absolute top-[-5px] px-2 py-1 h-6 bg-zinc-700 rounded-lg text-xs'>Open Miniplayer</p>
                </div>

            </div>
        </div>
    )
}

export default Player
