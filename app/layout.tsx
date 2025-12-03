import "./globals.css";
import Navbar from "./components/Navbar"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeProvider from "./providers/ThemeProvider";
import InfoProvider from "./providers/InfoProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>

      <main className="flex flex-col justify-center items-center  w-full z-2">

        <Navbar />
        {/* not-md - this is for when screen is smaller.. */}
        
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
          className="text-xl hover:scale-110 transition-transform active:bg-foreground/30 rounded-full z-5"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/neha-patange-a8844b271"
          target="_blank"
          title="Linkedin"
          className="text-xl hover:scale-110 transition-transform active:bg-foreground/30 rounded-full z-5"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:nehapatange2004@gmail.com"
          title="nehapatange2004@gmail.com"
          className="text-xl hover:scale-110 transition-transform active:bg-foreground/30 rounded-full z-5"
        >
          <FaEnvelope />
        </a>
      </footer>
    </ThemeProvider>
  );
}
