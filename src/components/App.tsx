import React from 'react';
import ReviewList from './ReviewList';
import Header from './Header';
import { IReview, Review } from './Review';
import NotFound from './NotFound';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from "react-router-dom";
import '../styles/main.css';
import useReviews from '../hooks/useReviews';

const App: React.FC = () => {
  const [reviews] = useReviews();
  const routes: RouteObject[] = [
    { path: '/',
      children: [
        { index: true, element: <ReviewList reviews={reviews as IReview[]}/> },
        { path: ':id', element: <Review/> }
      ]
    },
    { path: '*', element: <NotFound/> },
  ]
  const routedElm = useRoutes(routes);

  return <div className='min-h-screen bg-gradient-to-bl from-slate-900 via-slate-900 to-indigo-900 text-slate-200 flex flex-col justify-start items-center space-y-8 py-20'>
    <Header heading='Reviews'/>
    { routedElm }
  </div>
};

export default App;