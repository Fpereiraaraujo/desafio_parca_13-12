import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center gap-4 justify-between '>
            <Image src="/logo.svg" alt="" height={32} width={32} />
            <input
                type="text"
                placeholder="Search or jump to…"
                className="border rounded-md px-[126px]
          bg-slate-950 text-white  md:w-auto"  />
            <div className='flex items-center gap-4 max-md:hidden '>
                <Image src="/notifications.svg" alt="not" height={16} width={16} />
                <Image src="/plus.svg" alt="not" height={21} width={27} />
                <Image src="/notifications.svg" alt="not" height={16} width={16} />
            </div>
        </div>
    )
}

export default Navbar