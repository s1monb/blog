import Link from "next/link";
import { ChevronRight } from "react-feather";

export default function PostsList({ posts }: any) {
    return (
        <ul className="flex flex-col gap-2">
            {posts.map((post: any, i: number) => {
                const publishedAt = new Date(post.publishedAt);
                const excerpt = post.excerpt.split("")?.slice(0, 150)?.join("");

                return (
                    <li key={post._id}>
                        <Link href={`/blog/${post.slug.current}`}>
                            <div className="flex relative py-6 px-4 gap-6 border border-primary/20 dark:border-darkPrimary/20 rounded group hover:shadow-md hover:border-primary/50 dark:hover:border-darkPrimary/50 transition-all cursor-pointer">
                                <div className="flex flex-col items-end justify-start mt-[2px]">
                                    <p className="font-mono text-2xl">
                                        #{i < 9 ? "0" + (i + 1) : i + 1}
                                    </p>
                                    <p className="font-mono text-lg opacity-40">
                                        {publishedAt.toLocaleDateString([], {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl">{post.title}</h3>
                                    <p className="max-w-[560px]">
                                        {excerpt +
                                            (excerpt.length < 150
                                                ? ""
                                                : "... Read more")}
                                    </p>
                                </div>
                                <div className="absolute h-full flex items-center top-0 right-64">
                                    <ChevronRight className="h-[32px] hidden md:inline-block w-auto opacity-0 group-hover:opacity-50 duration-200 delay-200 group-hover:translate-x-48 transition-all" />
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
