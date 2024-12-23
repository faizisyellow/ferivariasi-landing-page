"use client";

import Box from "@/components/box";
import { motion } from "motion/react";
import Testimonial, { testimonialsData } from "@/components/testimonial/Testimonial";
import React from "react";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
  return (
    <div
      className="max-w-full mt-16"
      id="testimonial"
    >
      <h1 className="mb-10 text-center">TESTIMONI</h1>
      <div className="relative">
        <div className="flex overflow-x-scroll gap-6 pb-6 mb-4 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
