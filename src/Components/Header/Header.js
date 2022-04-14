import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='bg-slate-200 py-5'>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
                </div>
                <ul className={`flex flex-col md:flex-row justify-center w-full absolute md:sticky duration-300 ease-in bg-slate-200 ${open ? 'top-10' : 'top-[-220px]'}`}>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/reviews'>Reviews</CustomLink>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;