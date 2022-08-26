import React, { createContext, Dispatch, SetStateAction, useEffect } from 'react';
import ReviewList from './ReviewList';
import Header from './Header';
import type { IReview } from './Review';
import ReviewPage from './ReviewPage';
import NotFound from './NotFound';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from "react-router-dom";
import '../styles/main.css';
import useReviews from '../hooks/useReviews';

interface IReviewContext {
  reviews: IReview[]
  setReviews: Dispatch<SetStateAction<IReview[]>>
}

export const reviewContext = createContext<IReviewContext>(
  { reviews: [], setReviews: () => {} }
);

export const App: React.FC = () => {
  const [reviews, setReviews] = useReviews();
  const routes: RouteObject[] = [
    { path: '/',
      children: [
        { index: true, element: <ReviewList/> },
        { path: ':id', element: <ReviewPage/> }
      ]
    },
    { path: '*', element: <NotFound/> },
  ]
  const routedElm = useRoutes(routes);

  useEffect(() => {
    if(!reviews) return;
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }, [reviews]);

  return <div className='min-h-screen bg-gradient-to-bl from-slate-900 via-slate-900 to-indigo-900 text-slate-200 flex flex-col justify-start items-center space-y-8 py-20'>
    <Header heading='Reviews'/>
    <reviewContext.Provider value={{ reviews: reviews, setReviews: setReviews }}>
      { routedElm }
    </reviewContext.Provider>
  </div>
};