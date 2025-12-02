
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { useState } from "react";
import Navbar from "./components/Navbar"
import LeftSideProfile from "./components/LeftSideProfile";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeProvider from "./providers/ThemeProvider";
import InfoProvider from "./providers/InfoProvider";
import { SparklesCore } from "@/components/ui/sparkles";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [theme, setTheme] = useState<"dark" | "light">("dark")

  return (
    <ThemeProvider>


      
        

        <main className="flex flex-col justify-center items-center  w-full z-2">
          
          <Navbar />
          {/* not-md - this is for when screen is smaller.. */}
          {/* <section className="flex h-screen p-4 w-[30vw] not-md:w-full  border">
            <LeftSideProfile />
          </section> */}
          <section className="flex flex-col min-h-screen items-center p-4 w-full ">
            <InfoProvider>

              {children}
            </InfoProvider>
          </section>

        </main>
        {/* Social Icons Row */}

        <footer className="flex justify-center p-2 gap-10 mt-3 border-t w-full">
          <a
            href="https://github.com/nehapatange2004"
            target="_blank"
            title="github profile"
            className="text-xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/neha-patange-a8844b271"
            target="_blank"
            title="Linkedin"
            className="text-xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:nehapatange2004@gmail.com"
            title="nehapatange2004@gmail.com"
            className="text-xl hover:scale-110 transition-transform"
          >
            <FaEnvelope />
          </a>
        </footer>
        {/* <SparklesCore
        
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}


    </ThemeProvider>
  );
}
