import Link from "next/link";

export default function TagsList({ tags }: any) {
    return (
        <ul className="flex gap-2 font-mono divide-x justify-start mb-2">
            {tags
                .filter((tag: any) => tag.count > 0)
                .map((tag: any) => (
                    <li
                        key={tag._id}
                        className="border-primary/30 dark:border-darkPrimary/30 pl-2"
                    >
                        <Link href={`/blog/list/${tag.title.toLowerCase()}`}>
                            {tag.title} ({tag.count})
                        </Link>
                    </li>
                ))}
        </ul>
    );
}
