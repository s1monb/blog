"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type IProps = {
    links: {
        href: string;
        label: string;
    }[];
};
export default function NavLinks({ links }: IProps) {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <nav>
            <ul className="flex gap-8 text-sm font-mono">
                {links.map(({ href, label }) => (
                    <li
                        className={clsx(
                            href === pathname
                                ? "opacity-100"
                                : "opacity-60 hover:opacity-100"
                        )}
                        key={href}
                    >
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
