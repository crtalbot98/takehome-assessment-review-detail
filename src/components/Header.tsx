import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC<{heading: string}> = ({ heading }) => {
  return <nav className='w-full flex justify-start items-center bg-slate-800/20 backdrop-blur fixed top-0 h-14 z-50 border-b border-slate-600 p-4'>
    <Link to='/'>{ heading }</Link>
  </nav>
};

export default Header;