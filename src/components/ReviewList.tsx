import React, { useEffect, useState } from 'react'
import reviewJson from '../data/reviews.json';

interface Review {
  id: string
  author: string
  place: string
  published_at: string | Date
  rating: number
  content: string
}

const ReviewList: React.FC = () => {

  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReviewId, setSelectedReviewId] = useState<string>('');

  useEffect(() => {
    const reviewData = JSON.parse(JSON.stringify(reviewJson));
    setReviews(reviewData)
  }, []);

  const reviewElms = reviews.map((review) =>
    <div 
      key={review.id}
      className='w-96 md:w-72 h-56 flex flex-col bg-slate-800 border border-slate-600 text-ellipsis p-3 hover:hover:scale-105 rounded cursor-pointer'
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