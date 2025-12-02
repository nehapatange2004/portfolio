'use client'
import Link from "next/link"
import { useTheme } from "../providers/ThemeProvider"

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="sticky top-2 flex w-full h-12 items-center justify-center gap-2 mt-2 z-8">
            <div className="flex px-8 not-md:px-2 gap-15 not-md:gap-2 border rounded-2xl py-2 shadow-md shadow-secondary backdrop-blur-xl ">
                <Link href="/" className="hover:underline underline-offset-6 active:bg-accent-foreground/30 rounded-full">Home</Link>
                <Link href="/about" className=" hover:underline underline-offset-6 active:bg-accent-foreground/30 rounded-full">About</Link>
                <Link href="/projects" className=" hover:underline underline-offset-6 active:bg-accent-foreground/30 rounded-full">Projects</Link>
                <Link href="/resume" className=" hover:underline underline-offset-6 active:bg-accent-foreground/30 rounded-full">Resume</Link>
                <Link href="/todo" className=" hover:underline underline-offset-6 active:bg-accent-foreground/30 rounded-full">todo</Link>
                
            </div>
            <button type="button" className="border p-2 active:bg-accent-foreground/30 rounded-full" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>{theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                }</button>
        </nav>
    )
}