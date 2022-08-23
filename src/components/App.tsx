import React from 'react';
import ReviewList from './ReviewList';
import Header from './Header';
import '../styles/main.css';

const App: React.FC = () => {
  return <div className='bg-slate-900 text-slate-200 flex flex-col justify-start items-center space-y-8 py-20'>
    <Header heading='Reviews'/>
    <ReviewList/>
  </div>
};

export default App;