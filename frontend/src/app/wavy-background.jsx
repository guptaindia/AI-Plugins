"use client"
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "./(main)/navbar";

export default function Wavyground({title, description}) {
  return (
    <div>
      
    <WavyBackground className="max-w-4xl mx-auto pb-80 ">
      <p className="text-2xl md:text-4xl lg:text-5xl text-black font-bold inter-var text-center">
        {title}
      </p>
      <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
        {description}
      </p>
    </WavyBackground>
    </div>
  );
}
