import Link from "next/link";
import { ArrowRight } from "react-feather";

export default function Home() {
    return (
        <div>
            <main className="container">
                <div className="mt-24">
                    <p className="font-mono">Hei, mitt navn er</p>
                    <h1 className="text-4xl font-semibold flex gap-4 items-center">
                        Simon Bjørnøy{" "}
                        {/* <button className="text-gray-500">
                            <Volume2 className="h-8 w-8 text-primary dark:text-darkPrimary" />
                        </button> */}
                    </h1>
                    <h2 className="text-4xl font-semibold opacity-30 md:-rotate-3 md:-mt-4">
                        Fullstack Utvikler
                    </h2>
                </div>

                <div className="mt-8 md:mt-16">
                    <pre className=" whitespace-pre-line max-w-[560px]">
                        23 år gammel utvikler fra Haugesund, bor nå i Oslo.
                        <ul className="list-disc list-inside mt-4">
                            <li>
                                Jobber for tiden i{" "}
                                <a
                                    target="_blank"
                                    className="underline cursor-pointer"
                                    rel="noopener noreferrer"
                                    href="https://inevo.no"
                                >
                                    INEVO
                                </a>
                                .
                            </li>
                            <li>Studerer også ved OsloMet.</li>
                            <li>
                                Driver{" "}
                                <a
                                    target="_blank"
                                    className="underline cursor-pointer"
                                    rel="noopener noreferrer"
                                    href="https://teachit.no"
                                >
                                    Teachit.no
                                </a>{" "}
                                sammen med noen venner.
                            </li>
                        </ul>
                        {/* <p className="mt-4 flex items-center gap-[3px] group">
                            <ArrowRight className="w-3 h-3 mt-[2px] group-hover:translate-x-44 transition-all" />
                            <Link
                                href="/projects"
                                className="underline cursor-pointer"
                            >
                                Tidligere prosjekter
                            </Link>{" "}
                        </p> */}
                    </pre>
                    <div className="mt-12">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/cv.pdf"
                            className="border text-xs dark:hover:bg-darkPrimary dark:hover:text-darkSecondary hover:bg-primary hover:text-secondary border-primary dark:border-darkPrimary text-primary dark:text-darkPrimary rounded-md px-4 py-2 inline-block transition-colors"
                        >
                            Last ned CV
                        </a>
                    </div>
                </div>
                <div></div>
            </main>
        </div>
    );
}
