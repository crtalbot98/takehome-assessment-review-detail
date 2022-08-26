import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import reviewJson from '../data/reviews.json';
import { IReview } from 'src/components/Review';

const useReviews = (): [IReview[], Dispatch<SetStateAction<IReview[]>>] => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  
  useEffect(() => {
    const reviewData: IReview[] = JSON.parse(JSON.stringify(reviewJson));
    const localReviews = localStorage.getItem('reviews');

    if(!localReviews || localReviews.length < 1) localStorage.setItem('reviews', JSON.stringify(reviewData));
    if(localReviews) setReviews(JSON.parse(localReviews));
    else setReviews(reviewData)
  }, []);

  return [ reviews, setReviews ]
};

export default useReviews