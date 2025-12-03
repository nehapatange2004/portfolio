'use client'
import Image from "next/image";
import { FC } from "react";
import { Item } from "../types/InfoType";
import { useInfo } from "../providers/InfoProvider";

const AboutSection: FC = () => {
  const { skills, tools, profileImg } = useInfo();
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 z-5">

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Know Who I Am
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Left content */}
        <div className="flex-1 space-y-4">
          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold">Neha Patange</span> — a third-year
            Computer Engineering student at <span className="font-semibold">
              SAOE - Savitribai Phule Pune University
            </span>.
          </p>

          <p className="text-lg leading-relaxed">
            I like building things that mix logic, creativity, and clean UI —
            from full-stack apps to small tools that make work easier.
          </p>

          <p className="text-lg leading-relaxed">
            When I’m not coding, you’ll find me singing, exploring places, or
            working on my sense of humour. I learn fast, break things often,
            fix them even faster, and enjoy that cycle.
          </p>
        </div>

        {/* Right Photo */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dm4avdso7/image/upload/v1764753655/images_us41st.jpg"
            alt="Neha Patange"
            width={300}
            height={300}
            className="object-cover border opacity-70"
          />
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill: Item) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="shadow-current/50 shadow-sm border rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium"
              >
                <Icon className="text-xl" />
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Tools I Use</h3>
        <div className="flex flex-wrap gap-4 ">
          {tools?.map((tool: Item) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="shadow-current/50 shadow-sm border rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium"
              >
                <Icon className="text-xl" />
                {tool.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
