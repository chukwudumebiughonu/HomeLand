import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>HomeLand</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input type='text' placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>
          <Link to='/profile'>
            <li className="hidden sm:inline">
              {currentUser ? (
                <img
                  className='rounded-full h-7 w-7 object-cover'
                  src={currentUser.avatar}
                  alt='profile'
                />
              ) : (
                <span className='text-slate-700 hover:underline'> Sign in</span>
              )}
            </li>
          </Link>
        </ul>
        <div className="mobile-menu-icon" onClick={handleMobileMenuClick}>
          {isMobileMenuOpen ? <FaTimes className='text-slate-50' /> : <FaBars className='text-slate-700' />}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu fixed top-0 right-0 w-full h-3/4 space-y-2 transition-transform duration-2000 transform translate-x-0">
          <div className="mobile-menu-close-icon transform translate-x-3.5 sm:translate-x-0 mt-3" onClick={handleMobileMenuClick}>
            <FaTimes className='text-slate-700' />
          </div>
          <ul className="flex flex-col">
            <Link to='/profile' onClick={handleMenuItemClick}>
              <li>
                {currentUser ? (
                  <img
                    className='rounded-full h-7 w-7 object-cover'
                    src={currentUser.avatar}
                    alt='profile'
                  />
                ) : (
                  <span className='text-slate-700 hover:underline'> Sign in</span>
                )}
              </li>
            </Link>
            <Link to="/" onClick={handleMenuItemClick}>
              <li className="text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to="/about" onClick={handleMenuItemClick}>
              <li className="text-slate-700 hover:underline">About</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  )
}