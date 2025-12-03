"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    setTheme: (value: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <html className={`${theme} font-serif`}>
                <body
                    className={`relative
                  
                   antialiased transition-all ease-in delay-75`}
                >
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.7}
                        maxSize={0.8}
                        particleDensity={70}
                        className="w-full h-full absolute z-0"
                        particleColor={theme === "light" ? "#871F78" : "#FFFFFF"}
                    />

                    {children}

                </body>
            </html>
        </ThemeContext.Provider>
    );
}
