"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Review } from "@/containers/reviews/Reviews";
import Rating from "../rating";

interface TestimonialProps {
  data: Review;
}

const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <Card className="min-w-[300px] md:min-w-[350px] bg-primary border-purple-500/20 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage
              src={data.user?.thumbnail}
              alt={data.user.name}
            />
            <AvatarFallback>{data.user.name}</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <h3 className="font-semibold text-white">{data.user.name}</h3>
            <Rating value={data.rating} />
          </div>
        </div>
        <p className="text-purple-100/80">{data.snippet}</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
