import React from 'react'

const Header: React.FC<{heading: string}> = ({ heading }) => {

  return <nav className='w-full flex justify-start items-center bg-slate-800 fixed top-0 h-14 z-50 border-b border-slate-600 p-4'>
    <h1 className='text-2xl'>{ heading }</h1>
  </nav>
};

export default Header;