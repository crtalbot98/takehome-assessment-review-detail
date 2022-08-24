import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IReview } from './Review';

const ReviewList: React.FC<{reviews: IReview[]}> = ({ reviews }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  console.log(reviews)
  const reviewElms = reviews.map((review) =>
    <div 
      key={review.id}
      className='w-10/12 md:w-72 h-56 flex flex-col bg-slate-800/40 backdrop-blur border border-slate-600 text-ellipsis p-3 rounded cursor-pointer subpixel-antialiased hover:scale-105 hover:bg-slate-800/100 hover:backdrop-blur-none'
      onClick={() => navigate(`/${review.id}`)}
    >
      <h2 className='text-xl'>{review.place}</h2>
      <p className='absolute self-end'>{review.rating}/5</p>
      <h3>{review.author}</h3>
      <p className='line-clamp-4 mt-auto'>{review.content}</p>
    </div>
  );

  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-cols-auto justify-items-center lg:max-w-6xl'>
    {reviewElms}
  </div>
};

export default ReviewList;