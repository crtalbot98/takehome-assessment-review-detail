import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IReview } from './Review';
import { reviewContext } from './App';

const ReviewList: React.FC = () => {
  const navigate = useNavigate();
  const { reviews } = useContext(reviewContext);
  
  const selectReview = (review: IReview) => {
    navigate(`/${review.id}`, { state: { reviewId: review.id } })
  }
  
  const reviewElms = reviews.map((review) =>
    <div 
      key={review.id}
      className='w-10/12 md:w-72 h-56 flex flex-col bg-slate-800/40 backdrop-blur border border-slate-600 text-ellipsis p-3 rounded cursor-pointer subpixel-antialiased hover:scale-105 hover:bg-slate-800/100 hover:backdrop-blur-none'
      onClick={() => selectReview(review) }
    >
      <h2 className='text-xl'>{review.place}</h2>
      <p className='absolute self-end'>{review.rating}/5</p>
      <h3>{review.author}</h3>
      <p>{new Date(review.published_at).toLocaleString()}</p>
      <p className='line-clamp-4 mt-auto'>{review.content}</p>
    </div>
  );

  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-cols-auto justify-items-center lg:max-w-6xl'>
    {reviewElms}
  </div>
};

export default ReviewList;