import { sanityClient } from "../../../../components/lib/sanity.server";
import groq from "groq";
import PostsList from "../postsList";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function Page({ params }: any) {
    const { tag } = params;

    const posts = use(
        sanityClient.fetch(
            groq`*[_type == "post" && !(_id in path("drafts.**"))] {..., "tags": tags[]->} | order(publishedAt desc)`
        )
    );

    const filteredPosts = posts.filter((post: any) => {
        const tags = post.tags.map((tag: any) => tag.title.toLowerCase());
        return tags.includes(tag);
    });

    return (
        <div className="mt-12 relative">
            <div className="absolute -top-[104px] -left-24 hidden xl:block">
                <Link
                    href="/blog/list"
                    className="flex font-mono items-center gap-1 cursor-pointer group"
                >
                    <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />{" "}
                    tilbake
                </Link>
            </div>
            <PostsList posts={filteredPosts} />
        </div>
    );
}

export async function generateStaticParams() {
    const tags = await sanityClient.fetch(groq`
        *[_type == "tag"] {
            title,
        }
    `);

    return tags.map((tag: any) => ({
        tag: tag.title,
    }));
}
