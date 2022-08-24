import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';

export interface IReview {
  id: string
  author: string
  place: string
  published_at: string | Date
  rating: number
  content: string
}

export const Review: React.FC = () => {
  const { id } = useParams();
  const [review] = useReviews(id);
  
  if(!review || (Array.isArray(review))) {
    return <div>
      <p>Sorry! There is nothing here...</p>
      <Link to='/'>Go back to list</Link>
    </div>
  }

  return <div 
      className='w-10/12 md:max-w-3xl h-auto flex flex-col bg-slate-800 border border-slate-600 p-6 rounded'
    >
      <h2 className='text-xl'>{review.place}</h2>
      <p className='absolute self-end'>{review.rating}/5</p>
      <h3>{review.author}</h3>
      <p className='mt-2'>{review.content}</p>
    </div>
};