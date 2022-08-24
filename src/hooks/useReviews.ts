import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import reviewJson from '../data/reviews.json';
import { IReview } from 'src/components/Review';

const useReviews = (id: string | null = null): [IReview | IReview[], Dispatch<SetStateAction<IReview | IReview[]>>] => {
  const [reviews, setReviews] = useState<IReview[] | IReview>([]);
  
  useEffect(() => {
    const reviewData: IReview[] = JSON.parse(JSON.stringify(reviewJson));

    if(id) {
      const selectedIndex = reviewData.findIndex((review) => id === review.id);
      if(selectedIndex !== -1) setReviews(reviewData[selectedIndex]);
      return
    }

    setReviews(reviewData)
  }, []);

  return [ reviews, setReviews ]
};

export default useReviews