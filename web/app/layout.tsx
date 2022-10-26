"use client";

import "./globals.css";
import { useState } from "react";
import clsx from "clsx";
import NavLinks from "../components/navLinks";
import DarkmodeToggle from "../components/darkmodeToggle";
import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <html className={clsx(darkMode && "dark")} lang="en">
            <head>
                <title>Simon Bjørnøy</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="bg-secondary text-primary dark:bg-darkSecondary dark:text-darkPrimary transition-colors">
                <header className="border-b border-primary/30 dark:border-darkPrimary">
                    <div className="flex justify-end md:justify-between items-center py-4 container">
                        <div className="hidden md:block">
                            <h2 className="text-xl font-semibold">
                                <Link href="/">Simon Bjørnøy</Link>
                            </h2>
                        </div>
                        <nav className="flex items-center gap-8">
                            <ul>
                                <NavLinks
                                    links={[
                                        {
                                            href: "/",
                                            label: "Home",
                                        },
                                        {
                                            href: "/blog/list",
                                            label: "Blog",
                                        },
                                    ]}
                                />
                            </ul>
                            <DarkmodeToggle
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                            />
                        </nav>
                    </div>
                </header>
                {children}
                <footer></footer>
            </body>
        </html>
    );
}
