"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CgTerminal } from "react-icons/cg";
import { FaComments, FaDatabase, FaMagic, FaMobileAlt } from "react-icons/fa";
import { SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { ProjectsTypes, SkillsType, ToolsType } from "../types/InfoType";
import { FaCloudBolt } from "react-icons/fa6";
type Info = "dark" | "light";



const InfoContext = createContext<any>({});

export const useInfo = () => useContext(InfoContext);

export default function InfoProvider({ children }: { children: ReactNode }) {
    //   const [Info, setInfo] = useState<Info>("dark");
    const skills: SkillsType = [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "REST APIs", icon: CgTerminal },
        { name: "SQL", icon: FaDatabase },
    ]
    const tools: ToolsType = [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Thunder Client", icon: FaCloudBolt },
    ];
    const projects: ProjectsTypes = [
        {
            name: "YapsChat",
            icon: FaComments,
            img: "https://res.cloudinary.com/dm4avdso7/image/upload/v1764703495/tanChat_alyj3k.png",
            description:
                "A real-time chat platform with message delivery states, presence detection, and scalable backend logic.",
            tech: [
                { name: "React", icon: SiReact },
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "MongoDB", icon: SiMongodb },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "JavaScript", icon: SiJavascript },
            ],
            github: "https://github.com/nehapatange2004/yapschat",
            live: "https://yaps-chats.netlify.app",
            status: "Completed",
        },

        {
            name: "Builderly",
            icon: FaMobileAlt,
            img: "/projects/builderly.png",
            description:
                "A no-code app builder that lets users visually design UI components and auto-exports production-ready code.",
            tech: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
            ],
            github: "https://github.com/nehapatange2004/builderly",
            live: "",
            status: "Ongoing",
        },
        {
            name: "VibeScape",
            icon: FaMagic,
            img: "https://res.cloudinary.com/dm4avdso7/image/upload/v1764703320/vibescape_tdwk5p.png", // replace with real local file
            description:
                "An AI-driven music and emotion explorer that generates playlists, mood insights, and interactive visuals.",
            tech: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "ReactJs", icon: SiReact },
                { name: "Javascript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
            ],
            github: "https://github.com/nehapatange2004/vibescape",
            live: "https://vibescape.netlify.app",
            status: "MVP",
        },
    ];

    return (
        <InfoContext.Provider value={{ skills, tools, projects }}>
            {children}
        </InfoContext.Provider>
    );
}
