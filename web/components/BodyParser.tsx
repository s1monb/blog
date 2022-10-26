"use client";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Link from "next/link";
import useClipboard from "react-use-clipboard";
import Refractor from "react-refractor";
import { Clipboard, Check } from "react-feather";
import ts from "refractor/lang/typescript";
import js from "refractor/lang/javascript";
import rust from "refractor/lang/rust";
import css from "refractor/lang/css";
import html from "refractor/lang/markup";
import { useEffect } from "react";

Refractor.registerLanguage(ts);
Refractor.registerLanguage(js);
Refractor.registerLanguage(rust);
Refractor.registerLanguage(css);
Refractor.registerLanguage(html);

export const BodyParser = ({
    data,
    className = "",
}: {
    data: any[];
    className?: string;
}) => {
    return (
        <div className={clsx(className, "prose")}>
            <PortableText
                value={data}
                components={{
                    block: {
                        normal: ({ children }) => (
                            <p className={clsx(className)}>{children}</p>
                        ),
                    },
                    marks: {
                        link: ({ text, value: { href, url } }: any) => {
                            return (
                                <Link href={href || url}>
                                    <a
                                        className={clsx(
                                            className || "text-primary",
                                            "underline"
                                        )}
                                    >
                                        {text}
                                    </a>
                                </Link>
                            );
                        },
                        section: ({ text, value: { id } }: any) => (
                            <span id={id}>{text}</span>
                        ),
                    },
                    types: {
                        code: ({ value }) => {
                            const [isCopied, setCopied] = useClipboard(
                                value.code,
                                {
                                    successDuration: 4000,
                                }
                            );

                            return (
                                <div className="relative">
                                    <button
                                        onClick={setCopied}
                                        className="absolute right-4 top-4 p-1 hover:bg-white/10 text-white/50 rounded-md"
                                    >
                                        {isCopied ? (
                                            <>
                                                <Check className="text-white" />
                                                <p className="text-xs absolute bottom-2 -left-[45px] text-white">
                                                    copied
                                                </p>
                                            </>
                                        ) : (
                                            <Clipboard />
                                        )}
                                    </button>
                                    <Refractor
                                        language={value.language}
                                        value={value.code}
                                        markers={value.highlightedLines}
                                    />
                                </div>
                            );
                        },
                    },
                }}
            />
        </div>
    );
};
