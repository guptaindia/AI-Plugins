"use client"
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "./(main)/navbar";
import Link from "next/link";

export default function Wavyground({ title, description }) {
  return (
    <div>

      <WavyBackground className="max-w-4xl mx-auto pb-80 ">
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-bold inter-var text-center">
          {title}
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          {description}
        </p>
        <div className="text-center mt-20 ">
          {/* <Link href={'/browse-plugin'} className="px-8 py-4 rounded-md bg-blue-700 text-white">Get Started</Link> */}
          <a href={'/browse-plugin'}>
            <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
          </a>
        </div>
      </WavyBackground>
    </div>
  );
}
