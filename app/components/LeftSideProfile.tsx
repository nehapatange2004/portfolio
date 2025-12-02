"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function LeftSideProfile() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 gap-4 bg-gray-700">

      {/* Profile Photo */}
      <div className="w-32 h-32 rounded-full overflow-hidden border">
        <img
          src="/profile.jpg" // replace with your image
          alt="Profile photo"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-semibold tracking-tight">
        Neha Patange
      </h1>

      {/* Title */}
      <p className="text-base opacity-80">
        Full-Stack Developer
      </p>

      {/* Tagline */}
      <p className="text-sm italic opacity-75 max-w-[240px]">
        “I build, break, and fix things — usually in that order.”
      </p>

      {/* Motivational / Purpose Line */}
      <p className="text-sm opacity-70 max-w-[260px]">
        Passionate about building scalable experiences and solving real-world problems with clean engineering.
      </p>


    </div>
  );
}
