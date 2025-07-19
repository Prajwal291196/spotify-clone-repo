import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PlaylistCard from './PlaylistCard'
import MainFooter from './MainFooter';

import { LibraryPlaylists } from '../Context/Constants';
import { LikedSongs } from '../Context/Constants';
import LibraryLikedImg from '../images/LibraryLiked.png';
import LibraryYourEpisodesImg from '../images/LibraryYourEpisodes.png';


import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GrInstallOption } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { FaHeart, FaRegHeart, FaRegFolder, FaSpotify } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaEllipsis, FaList } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCheck } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { PiQueueFill } from "react-icons/pi";
import { MdOutlineReport } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { FiShare, FiSearch, FiPlus } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { PiCopyLight } from "react-icons/pi";
import { ImEmbed } from "react-icons/im";

const CollectionCard = () => {
  const { key } = useParams();

  const [likedSongsList, setLikedSongsList] = useState(null);
  const [isHovered, setIsHovered] = useState(null)
  const [showTableOptions, setShowTableOptions] = useState(false);
  const [showTable, setShowTable] = useState('List');
  const [showEllipsisOption, setShowEllipsisOption] = useState(false);
  const [optionsMoveToFolder, setOptionsMoveToFolder] = useState(false)
  const [optionsShare, setOptionsShare] = useState(false);
  const [yourEpisodesRowIcons, setYourEpisodesRowIcons] = useState(null)

  // Create a ref for the ellipsis and options divs
  const ellipsisRef = useRef(null);
  const optionsRef = useRef(null);
  const optionsTableRef = useRef(null);
  const optionsTableOptionsRef = useRef(null);


  // Function to close ellipsis and options divs
  const closeDivs = () => {
    setShowEllipsisOption(false);
    console.log(showEllipsisOption)
    setOptionsMoveToFolder(false);
    setOptionsShare(false);
    setShowTableOptions(false);
  };

  // Effect to add event listener for clicks on the document body
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside of ellipsis and options divs
      if (
        (ellipsisRef.current && !ellipsisRef.current.contains(e.target) &&
          optionsRef.current && !optionsRef.current.contains(e.target)) ||
        (optionsTableRef.current && !optionsTableRef.current.contains(e.target) &&
          optionsTableOptionsRef.current && !optionsTableOptionsRef.current.contains(e.target))
      ) {
        closeDivs();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleTableOptions = () => {
    setShowTableOptions(!showTableOptions);

  };

  const toggleTable = (option) => {
    toggleTableOptions();
    setShowTable(option);

  }

  const toggleEllipsisOption = () => {
    setShowEllipsisOption(!showEllipsisOption)

  }

  const handleOptionsMoveToFolder = () => {
    setOptionsMoveToFolder(!optionsMoveToFolder)
  }
  const handleOptionsShare = () => {
    setOptionsShare(!optionsShare)
  }

  const handleIconClick = (key) => {
    // Update the liked property for the corresponding song
    const updatedPlaylist = likedSongsList?.playlist.map((song) => {
      if (song.key === key) {
        return { ...song, liked: !song.liked };
      }
      return song;
    });

    // Update the state with the new playlist array
    setLikedSongsList((prevPlaylistData) => (
      {
        ...prevPlaylistData,
        playlist: updatedPlaylist,
      }));
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    if (key === "tracks") {
      let likedSongsList = LikedSongs.find((item) => item.key === "tracks");
      setLikedSongsList(likedSongsList);
    }
    else if (key === "your-episodes") {
      let likedSongsList = LikedSongs.find((item) => item.key === "your-episodes");
      setLikedSongsList(likedSongsList);
    }

    // if (likedSongsList) {
    //   setLikedSongsList(likedSongsList);

    // } else {
    //   // Handle the case
    // }
  }, [key]);

  // const handleYourEpisodesRowIcons = () => {
  //   setYourEpisodesRowIcons(!yourEpisodesRowIcons);
  // }

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
        <div className="flex flex-col">
          <div className="flex w-full p-6 ">
            <img src={likedSongsList?.url?.playlistImg} alt='Liked Songs' className='w-60 h-60  shadow-white shadow-2xl rounded ' />
            <div className="flex flex-col-reverse px-6 ">
              <div className="flex items-center ">
                <div className='px-1 text-white font-semibold text-sm'>{likedSongsList?.loginId}</div>
                <LuDot className='text-white' />
                <div className='text-white pr-1 font-semibold text-sm' >100 songs</div>
              </div>
              <div className='font-bold text-white text-8xl pb-4'>{likedSongsList?.name}</div>
              <span className='text-white text-sm '>Playlist</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center ">
              <div className="flex items-center">
                <div className="flex items-center justify-center px-7">
                  <IoIosPlay className=' text-black h-14 w-14 p-3 pr-2 bg-green-400 rounded-full hover:scale-110' />
                  {/*<IoIosPause className=' ext-black h-14 w-14 p-3 bg-green-400 rounded-full hover:scale-110' />*/}
                </div>
              </div>
            </div>
            {key === "tracks" && <div className="relative" ref={optionsTableRef}>
              {showTable === 'List' && <div className="flex items-center justify-center text-zinc-400  hover:text-white"
                onClick={toggleTableOptions}>
                <p className='pr-2'>Compact</p>
                <RxHamburgerMenu />
              </div>}
              {showTable === 'Compact' && <div className="flex items-center justify-center text-zinc-400  hover:text-white"
                onClick={toggleTableOptions}>
                <p className='pr-2'>List</p>
                <FaList />
              </div>}
              {showTableOptions && (
                <div className="absolute mt-2 right-0 bg-zinc-800  rounded shadow-black shadow-lg w-40"
                  ref={optionsTableOptionsRef} >
                  <div className="p-2 m-1 px-4 text-zinc-400 text-xs font-medium">View as</div>
                  <div className="p-2 m-1 px-4 hover:bg-zinc-700"
                    onClick={() => toggleTable('List')}>
                    <div className="flex items-center justify-between  text-zinc-400  hover:text-white"
                    >
                      <div className='flex'>

                        <RxHamburgerMenu className='mr-2' />
                        <p className='text-sm font-medium'>Compact</p>
                      </div>
                      {showTable === 'List' && <MdOutlineCheck className='text-green-400' />}
                    </div>
                  </div>
                  <div className="p-2 m-1 px-4 hover:bg-zinc-700"
                    onClick={() => toggleTable('Compact')}>
                    <div className="flex items-center justify-between text-zinc-400  hover:text-white"
                    >
                      <div className="flex">

                        <FaList className=' mr-2' />
                        <p className='text-sm font-medium'>List</p>
                      </div>
                      {showTable === 'Compact' && <MdOutlineCheck className='text-green-400' />}
                    </div>
                  </div>
                </div>
              )}
            </div>}
          </div>
          {key === "tracks" && <div className="flex w-full px-7 text-white">
            {showTable === 'Compact' && <table className='w-full'>
              <thead>
                <tr className='text-left'>
                  <th className='text-right w-3 pl-5 pt-5 pb-2 font-medium text-lg text-zinc-500'>#</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Title</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Album</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Date Added</th>
                  <th className='text-right px-3 pt-5 pb-2 font-medium text-sm text-zinc-500 w-2'></th>
                  <th className='pr-10 pt-5 pb-2 font-medium text-sm text-zinc-500 w-2'><CiClock2 className='w-5 h-5 ' /></th>
                </tr>
                <tr >
                  <td colSpan="6" className='pb-4'>
                    <hr className='bg-zinc-500 h-[1px] border-none' />
                  </td>
                </tr>
              </thead>
              <tbody>
                {likedSongsList?.playlist.map((song, index) => (
                  <tr key={index}
                    className={`text-left hover:bg-zinc-800 `}
                    onMouseEnter={() => setIsHovered(song.key)}
                    onMouseLeave={() => setIsHovered(null)}>
                    <td className=' rounded-l-lg text-right w-3 pl-5 font-medium text-lg text-zinc-500'>{index + 1}</td>
                    <td className='px-4 '>
                      <div className="flex items-center">
                        <div className=' h-10 w-10 '>
                          <img className='h-10 w-10 rounded-md' src={song?.image?.songCover}
                            alt={song?.title} />
                        </div>
                        <div className="flex flex-col p-2">
                          <div className='text-white text-base font-medium hover:underline'>{song.title}</div>
                          <div className='flex text-zinc-500 text-sm font-medium mt-0 '>
                            {song?.artist?.map((i, index) =>
                              <React.Fragment key={index}>
                                <div className='hover:text-white hover:underline '>{i}</div>
                                {index < song?.artist?.length - 1 && <span className='pr-1'>,</span>}
                              </React.Fragment>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-3  font-medium text-sm text-zinc-500'>{song.album}</td>
                    <td className='px-3  font-medium text-sm text-zinc-500'>{song.dateAdded}</td>
                    <td className='px-3 text-right font-medium text-sm text-zinc-500'>
                      <div className='relative mr-4 '>
                        {isHovered === song.key && <FaRegHeart
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4 hover:scale-105 hover:text-zinc-300 `}
                          onClick={() => handleIconClick(song.key)} />}
                        {song.liked && <FaHeart className='absolute transform -translate-x-1/2 -translate-y-1/2 text-green-400 h-4 w-4 hover:scale-105'
                          onClick={() => handleIconClick(song.key)} />}

                      </div>
                    </td>
                    <td className='rounded-r-lg pr-10 font-medium text-sm text-zinc-500'>{formatDuration(song.duration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
            {showTable === 'List' && <table className='w-full'>
              <thead>
                <tr className='text-left'>
                  <th className='text-right w-3 pl-5 pt-5 pb-2 font-medium text-lg text-zinc-500'>#</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Title</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Artist</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Album</th>
                  <th className='px-3 pt-5 pb-2 font-medium text-sm text-zinc-500'>Date Added</th>
                  <th className='text-right px-3 pt-5 pb-2 font-medium text-sm text-zinc-500 w-2'></th>
                  <th className='pr-10 pt-5 pb-2 font-medium text-sm text-zinc-500 w-2'><CiClock2 className='w-5 h-5 ' /></th>
                </tr>
                <tr >
                  <td colSpan="7" className='pb-4'>
                    <hr className='bg-zinc-500 h-[1px] border-none' />
                  </td>
                </tr>
              </thead>
              <tbody>
                {likedSongsList?.playlist.map((song, index) => (
                  <tr key={index}
                    className={`text-left hover:bg-zinc-800 `}
                    onMouseEnter={() => setIsHovered(song.key)}
                    onMouseLeave={() => setIsHovered(null)}>
                    <td className=' rounded-l-lg text-right w-3 pl-5 font-medium text-lg text-zinc-500'>{index + 1}</td>
                    <td className='px-4 text-white text-base font-semibold'>
                      {song?.title}
                    </td>
                    <td className='px-3  font-medium text-base text-zinc-500'>
                      <div className='flex text-zinc-500 text-sm font-medium mt-0 '>
                        {song?.artist?.map((i, index) =>
                          <React.Fragment key={index}>
                            <div className='hover:text-white hover:underline '>{i}</div>
                            {index < song?.artist?.length - 1 && <span className='pr-1'>,</span>}
                          </React.Fragment>
                        )}
                      </div>
                    </td>
                    <td className='px-3  font-medium text-base text-zinc-500'>{song.album}</td>
                    <td className='px-3  font-medium text-base text-zinc-500'>{song.dateAdded}</td>
                    <td className='px-3 text-right font-medium text-sm text-zinc-500'>
                      <div className='relative mr-4 '>
                        {isHovered === song.key && <FaRegHeart
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4 hover:scale-105 hover:text-zinc-300 `}
                          onClick={() => handleIconClick(song.key)} />}
                        {song.liked && <FaHeart className='absolute transform -translate-x-1/2 -translate-y-1/2 text-green-400 h-4 w-4 hover:scale-105'
                          onClick={() => handleIconClick(song.key)} />}

                      </div>
                    </td>
                    <td className='rounded-r-lg pr-10 font-medium text-sm text-zinc-500'>{formatDuration(song.duration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
          </div>}
          {key === "your-episodes" && <div className="flex w-full px-7 text-white">
            <table>
              <tbody>
                {likedSongsList?.playlist?.map((episode) => (
                  
                    <tr className='h-40 border-t-[1px] border-zinc-800 hover:bg-zinc-800 hover:border-t-0' 
                    onMouseEnter={() => setYourEpisodesRowIcons(episode.key)}
                    onMouseLeave={() => setYourEpisodesRowIcons(null)}>
                      <td className='w-44 px-8 pt-8 align-top rounded-l-lg'>
                        <img src={episode?.image?.episodeCover} alt='Episode Cover Image' className='w-full h-auto  rounded' />
                      </td>
                      <td className='w-[700px] align-top pt-8 pr-5 rounded-r-lg'>
                        <div>
                          <div className='text-base font-semibold'>
                            {episode?.episodeTitle}
                          </div>
                          <div className='text-base font-semibold text-zinc-600 pl-2 pb-4'>
                            {episode?.podcastTitle}
                          </div>
                          <div className='text-sm font-semibold text-zinc-600'>
                            {episode?.description}
                          </div>

                          <div className='flex items-center text-base font-semibold py-4'>
                            Feb 2022 <LuDot /> {episode?.duration}
                          </div>

                          <div className='flex items-center justify-between pb-4'>

                            <div className='flex items-center'>
                              <FaCircleCheck className='text-green-400 h-5 w-5 mr-4' />
                              {yourEpisodesRowIcons === episode.key && <FiShare className=' h-5 w-5 mx-4' />}
                              {yourEpisodesRowIcons === episode.key && <FaEllipsis className=' h-5 w-5 ml-4' />}
                            </div>
                            <div className='text-black'>
                              <IoIosPlay className='bg-white rounded-full h-7 w-7 pl-1' />
                              {/* <IoIosPause className='bg-white rounded-full h-7 w-7 ' /> */}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    
                ))}
              </tbody>
            </table>
          </div>}
        </div>
        <MainFooter />
      </div>
    </div>
  )
}

export default CollectionCard
