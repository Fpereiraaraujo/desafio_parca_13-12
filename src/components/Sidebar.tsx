import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-1/4 h-screen bg-slate-900 rounded-md px-6'>
            <div className='flex justify-center text-white font-bold mt-6'>
                <Image src="" alt="" />
                <p>Fpereiraaraujo_</p>
            </div>
            <div className=' border-slate-800 border-t-2'>
                <div className='mt-4 text-gray-300 text-xs  flex justify-between items-center font-semibold leading-tight'>
                    Top Repositories
                    <div className="w-16 h-7 pl-3 pr-4 py-1 bg-green-700 rounded-md border border-blue-50 border-opacity-10 justify-start items-center inline-flex">
                        <div className="w-4 h-4 relative" />
                        <div className="text-white text-xs font-medium font-['Noto Sans'] leading-tight">New</div>
                    </div>
                </div>
                <div className='mt-6 '> 
                    < input
                        type="text"
                        placeholder="Find repository"
                        className="border rounded-md w-full text-sm px-6 py-1
                        bg-slate-950 text-white "  />
                </div>
            </div>
        </div>
    )
}

export default Sidebar