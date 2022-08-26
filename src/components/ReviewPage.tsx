import React, { useContext, useMemo, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { reviewContext } from './App';
import { Review } from './Review';
import Input from './Input';
import { IResponse, Response } from './Response';

const ReviewPage: React.FC = () => {
  const { reviews, setReviews } = useContext(reviewContext);
  const { id } = useParams();
  const { state } = useLocation();
  const review = useMemo(() => {
    const selectedIndex = reviews.findIndex((review) =>  id === review.id || state.reviewId === review.id);
    return selectedIndex !== -1 ? reviews[selectedIndex] : null
  }, [reviews]);

  const updateResponses = (selectedIndex: number) => {
    if(!review?.responses) return;
    const updatedReviews = [...reviews];

    updatedReviews[selectedIndex] = review;
    setReviews(updatedReviews)
  }

  const submitResponse = (value: string) => {
    if(!review || (review?.responses && review.responses.length >= 1)) return;
    if(!review?.responses) review.responses = [];

    const response = {
      id: review?.responses.length.toString(),
      author: 'RandomName123',
      date: new Date(),
      content: value
    }

    review.responses.push(response);
    const selectedIndex = reviews.findIndex((review) => id === review.id || state.reviewId === review.id);
    if(selectedIndex !== -1) updateResponses(selectedIndex)
  }

  const editResponse = (id: string, value: string) => {
    if(!review?.responses) return;

    const selectedIndex = review.responses.findIndex((res) => {
      return res.id === id
    });
    if(selectedIndex === -1) return;

    const editedResponse = review.responses[selectedIndex];
    editedResponse.content = value;

    const reviewIndex = reviews.findIndex((review) => id === review.id || state.reviewId === review.id);
    if(reviewIndex !== -1) updateResponses(reviewIndex)
  }

  const responseElms = review?.responses && review.responses.map((elm) => 
    <Response key={elm.author+elm.date} response={elm} onSubmit={editResponse} />
  );

  if(!review) {
    return <div className='text-center'>
      <p>Sorry! There is nothing here...</p>
      <Link to='/'>Go back to list</Link>
    </div>
  }

  return <div className='w-10/12 md:max-w-3xl space-y-2'>
      <Review review={review}/>
      <div className='bg-slate-500/80 rounded flex flex-col p-3 rounded space-y-4'>
        <Input onSubmit={submitResponse}/>
        { responseElms }
      </div>
  </div>
};

export default ReviewPage