"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

// Function to generate a background color based on the user's name
const getColorFromName = (name: string): string => {
  const hash = name
    .split("") // Split the name into an array of characters
    .reduce((acc, char) => acc + char.charCodeAt(0), 0); // Sum the character codes of the name
  const colorIndex = hash % colors.length; // Use the modulo operation to get a valid index for the colors array
  return colors[colorIndex]; // Return the color based on the calculated index
};

// List of predefined background colors for the avatars
const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500", "bg-orange-500", "bg-gray-500"];

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// Updated AvatarFallback to apply background color and show first letter of the user's name
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, children, ...props }, ref) => {
  const backgroundColor = getColorFromName(children as string); // Generate color based on name

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        `flex h-full w-full items-center justify-center rounded-full ${backgroundColor}`, // Apply background color
        className
      )}
      {...props}
    >
      <strong>{children?.toString()[0]}</strong> {/* Display the first letter of the name */}
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
