import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='mx-auto bg-slate-950 px-16 py-2 md:px-6 md:py-6'>
      <Navbar />
      <div className='flex mt-16'>
        <Sidebar/>
      </div>
    </main>
  ) 

}
