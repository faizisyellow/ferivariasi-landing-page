"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

// Dumy data
export const testimonialsData: TestimonialProps[] = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque debitis cum expedita incidunt labore quasi.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Sarah Williams",
    role: "Product Designer",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/api/placeholder/40/40",
  },
];

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, image }) => {
  return (
    <Card className="min-w-[300px] md:min-w-[350px] bg-primary border-purple-500/20 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage
              src={image}
              alt={name}
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-sm text-purple-200/60">{role}</p>
          </div>
        </div>
        <p className="text-purple-100/80">{content}</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
