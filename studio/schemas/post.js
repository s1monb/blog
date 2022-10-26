import { IoCreateOutline } from "react-icons/io5";
export default {
    name: "post",
    title: "Post",
    type: "document",
    icon: IoCreateOutline,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            validation: (Rule) => Rule.min(150).max(200),
            rows: 3,
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: { type: "tag" } }],
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
