import { IoPricetagOutline } from "react-icons/io5";
export default {
    name: "tag",
    title: "Tag",
    type: "document",
    icon: IoPricetagOutline,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        },
    ],
};
