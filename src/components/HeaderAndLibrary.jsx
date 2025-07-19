import React from 'react'
import { BrowserRouter, Routes, Route} from  "react-router-dom";


import Header from './Header'
import YourLibrary from './YourLibrary'

const HeaderAndLibrary = () => {
  return (
    <div className='w-[25vw] h-[90vh] '> 
     <Header />
     <div className='fixed bg-black h-40 w-full z-10'></div>
     <YourLibrary  />
    </div>
  )
}

export default HeaderAndLibrary
