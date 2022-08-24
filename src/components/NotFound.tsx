import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return <div className='w-96 h-96 bg-white flex flex-col items-center justify-center bg-slate-800'>
    <h2 className='text-2xl'>404 Not Found</h2>
    <p>This page does not exist!</p>
    <Link to='/'>Go back to list</Link>
  </div>
};

export default NotFound