"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
    const titles = [
        "Full-Stack Developer",
        "AI Enthusiast",
        "Problem Solver",
        "Builder of Bugs & Fixer of Them"
    ];

    const [currentTitle, setCurrentTitle] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter Effect
    useEffect(() => {
        const current = titles[titleIndex];
        let typingSpeed = isDeleting ? 40 : 80;

        const handleTyping = () => {
            if (!isDeleting && charIndex < current.length) {
                setCurrentTitle(current.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentTitle(current.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                if (!isDeleting) {
                    setTimeout(() => setIsDeleting(true), 700);
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between bg- py-16 px-6 md:px-20 gap-10">

            {/* Left side */}
            <div className="flex flex-col max-w-xl gap-4">


                <h1 className="text-6xl font-bold tracking-tight">
                    Hi, I'm Neha Patange
                </h1>


                <p className="text-xl  opacity-85 h-8 mb-6">
                    {currentTitle}
                    <span className="animate-pulse text-2xl">|</span>
                </p>


                <p className="text-base italic opacity-80 border-l-6 p-2 border-accent-foreground rounded-xl mb-6">
                    “I build, break, and fix things — usually in that order. 👀”
                </p>


                <p className="text-sm opacity-90 leading-relaxed">

                    I enjoy solving real problems, designing clean systems, and occasionally pretending
                    that debugging is a fun activity.
                    My work blends curiosity, logic, and a little chaos — the productive kind.

                </p>
            </div>


            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow">
                <img
                    src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?semt=ais_hybrid&w=740&q=80" // replace with your own photo
                    alt="Profile"
                    width={300}
                    height={300}
                    className="object-cover bg-amber-100 z-80"
                />
            </div>

        </section>
    );
}
