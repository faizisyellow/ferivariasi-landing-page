"use client";

import Testimonial from "@/components/testimonial/Testimonial";
import React, { useEffect, useState } from "react";
import { data } from "./data";

interface ReviewsProps {}

export interface Review {
  rating: number;
  date: string;
  iso_date: string;
  review_id: string;
  user: {
    name: string;
    contributor_id: string;
    thumbnail: string;
  };
  snippet: string;
}

const Reviews: React.FC<ReviewsProps> = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(data.reviews as Review[]);
  }, []);

  // Create a sorted copy of the array

  const sortedReviews = [...reviews].sort((a, b) => {
    const dateA = new Date(a.iso_date);
    const dateB = new Date(b.iso_date);

    return dateB - dateA; // Descending order
  });

  console.log(sortedReviews);

  return (
    <div
      className="max-w-full mt-16"
      id="testimonial"
    >
      <h1 className="mb-10 text-center">TESTIMONI</h1>
      <div className="relative">
        <div className="flex overflow-x-scroll gap-6 pb-6 mb-4 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
          {sortedReviews.map((review) => (
            <Testimonial
              data={review}
              key={review.review_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
