import { use } from "react";
import { sanityClient } from "../../../components/lib/sanity.server";
import PostsList from "./postsList";
import TagsList from "./tagsList";
import groq from "groq";
export default function Page() {
    const tags = use(
        sanityClient.fetch(
            groq`*[_type == "tag"]{title, "count": count(*[_type == "post" && references(^._id) && !(_id in path("drafts.**"))])}`
        )
    );

    const posts = use(
        sanityClient.fetch(
            groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)`
        )
    );

    return (
        <>
            <div className="mt-12 border-b border-primary/30 dark:border-darkPrimary/30">
                <TagsList tags={tags} />
            </div>
            <div className="mt-12">
                <PostsList posts={posts} />
            </div>
        </>
    );
}
