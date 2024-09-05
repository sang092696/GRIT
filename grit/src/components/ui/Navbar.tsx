import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './button'
import { ArrowDown } from 'lucide-react'
import HamburgerIcon from '@/assets/icons/icons8-menu.svg'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">
        <Link href='/' className='text-white z-40 font-semibold'>
          <span>Grit.</span>
        </Link>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <ArrowDown/>
        </div>
        <nav className="sm:flex gap-6 items-center hidden">
          {<a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>}
          {<a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Pricing</a>}
          {<a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Sign in</a>}
          {<button className="bg-white text-black py-2 px-4 rounded-lg">Get started</button>}
        </nav>
      </div>
    </div>

  )
}

export default Navbar