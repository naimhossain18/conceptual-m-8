import React from 'react';
import { CiMenuFries } from "react-icons/ci";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router';
// import NavLinks from './NavLinks';
const Navbar = () => {
    return (
        <>
        <nav className='bg-amber-200' >

            <div className='flex justify-between py-3 container mx-auto'>
            <div className="nav-left flex gap-4 items-center">
            <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
                        <NavLink className={ ({isActive})=> (isActive? 'text-indigo-500':'')} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/'}><MdShoppingCart size={25} /></NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/favorites'}><MdBookmarkAdd size={25} /></NavLink>
                    </li>
      </ul>
    </div>
    <h3 className='text-2xl font-bold'>FlagShipsOff</h3>
  </div>
            {/* <CiMenuFries size={20} className=' lg:hidden text-black '> </CiMenuFries> 
            */}
            </div>
            <div className="nav-right">
            <ul className='flex gap-4'>
                    <li>
                        <NavLink className={ ({isActive})=> (isActive? 'text-indigo-500':'')} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/'}><MdShoppingCart size={25} /></NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> (isActive? 'text-indigo-500':'')} to={'/favorites'}><MdBookmarkAdd size={25} /></NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;