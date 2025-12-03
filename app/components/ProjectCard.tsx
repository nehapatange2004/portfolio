"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectItem } from "../types/InfoType";



export default function ProjectCard({
    name,
    icon: Icon,
    img,
    description,
    tech,
    github,
    live,
    status,
}: ProjectItem) {
    return (
        <div className="border rounded-xl p-2 hover:scale-101 shadow-md transition-all w-full md:w-[48%] lg:w-[31%] bg-background/60 backdrop-blur-sm">

            {/* Thumbnail */}
            <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                <Image
                    src={img}
                    alt={name}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Title + Status */}
            <div className="flex justify-between items-center mb-2 px-5">
                <div className="flex items-center gap-2">
                    <Icon className="text-lg" />
                    <h3 className="text-xl font-semibold">{name}</h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-md border opacity-80">
                    {status}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm opacity-90 mb-4 leading-relaxed px-5">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 px-5">
                {tech.map((t) => (
                    <span
                        key={t.name}
                        className="flex items-center gap-1 text-xs px-2 py-1 border rounded-md opacity-85"
                    >
                        <t.icon className="text-sm" />
                        {t.name}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex justify-end gap-4 text-sm px-5">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        className="flex items-center gap-2 hover:underline"
                    >
                        <FaGithub /> Code
                    </a>
                )}

                {live && (
                    <a
                        href={live}
                        target="_blank"
                        className="flex items-center gap-2 hover:underline"
                    >
                        <FaExternalLinkAlt /> Live
                    </a>
                )}
            </div>
        </div>
    );
}
