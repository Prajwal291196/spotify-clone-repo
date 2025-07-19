import React from 'react'

import { FooterValues } from '../Context/Constants';

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const MainFooter = () => {
    return (
        <div>
            <div className="flex flex-col mx-5 pb-5">
                <div className="flex justify-between">
                    <div className="flex mt-24">
                        {FooterValues.map((section) => {
                            return (
                                <div className='flex flex-col mr-32'>
                                    <div className="flex font-bold text-base text-white">{section?.category?.title}</div>
                                    <div className="flex flex-col text-zinc-500 font-medium">{section?.category?.items.map((item) => <div className='flex flex-col leading-8 hover:text-white hover:underline'>{item?.name}</div>)}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="flex mt-24 justify-around text-white">
                        <FaInstagram className='h-9 w-9 p-2 mx-2 bg-zinc-700 rounded-full hover:bg-zinc-500' />
                        <FaXTwitter className='h-9 w-9 p-2 mx-2 bg-zinc-700 rounded-full hover:bg-zinc-500' />
                        <FaFacebook className='h-9 w-9 p-2 mx-2 bg-zinc-700 rounded-full hover:bg-zinc-500' />
                    </div>
                </div>
                <hr className='my-12 bg-zinc-800 h-[1px] border-none'></hr>
                <div className="flex justify-between mb-12">
                    <div>

                        {
                            FooterValues.map((item) => {
                                return (
                                    <div className='flex text-zinc-500 font-medium' >{item?.legalities?.map((items) => <div className='mr-6 text-sm hover:text-white'>{items?.name}</div>)
                                    } </div>)
                            })
                        }
                    </div>
                    <div className='text-zinc-500 font-medium text-sm'>
                        &#169; 2024 Spotify AB
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter
