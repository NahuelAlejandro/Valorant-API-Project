import  { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayoutMain = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col w-full min-h-screen items-center bg-zinc-950 font-sans'>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default LayoutMain