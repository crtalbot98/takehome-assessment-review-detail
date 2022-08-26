import React from 'react';
import type { IResponse } from './Response';

export interface IReview {
  id: string
  author: string
  place: string
  published_at: string | Date
  rating: number
  content: string
  responses?: IResponse[]
}

export const Review: React.FC<{ review: IReview | null }> = ({ review }) => {
  if(!review) return null;

  return <div 
    className='h-auto flex flex-col bg-slate-800 border border-slate-600 p-6 rounded'
  >
    <h2 className='text-xl'>{review.place}</h2>
    <p className='absolute self-end'>{review.rating}/5</p>
    <h3>{review.author}</h3>
    <p className='mt-2'>{review.content}</p>
  </div>
};