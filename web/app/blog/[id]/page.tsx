import { sanityClient } from "../../../components/lib/sanity.server";
import groq from "groq";
import { use } from "react";
import { urlFor } from "../../../components/lib/sanity";
import Image from "next/image";
import { BodyParser } from "../../../components/BodyParser";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function BlogPage({ params }: any) {
    const { id } = params;
    const post = use(
        sanityClient.fetch(
            groq`*[_type == 'post' && slug.current == '${id}'][0]`
        )
    );

    return (
        <div>
            <main>
                <div className="container relative">
                    <div className="absolute top-2 -left-20 hidden xl:block">
                        <Link
                            href="/blog/list"
                            className="flex font-mono items-center gap-1 cursor-pointer group"
                        >
                            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />{" "}
                            tilbake
                        </Link>
                    </div>
                    <img
                        src={urlFor(post.mainImage).width(1080).url()}
                        className="w-full max-h-[400px] object-cover shadow-sm rounded-md mt-4"
                        alt={post.mainImage.alt || ""}
                    />
                    <h1 className="font-semibold mt-4 text-5xl">
                        {post.title}
                    </h1>
                    <div className="px-4 mt-12">
                        <BodyParser data={post.body} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await sanityClient.fetch(groq`
        *[_type == "post"] {
            _id,
            slug {
                current
            }
        }
    `);

    return posts.map((post: any) => ({
        id: post.slug.current,
    }));
}
