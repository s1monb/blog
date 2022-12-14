import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./tag";
import post from "./post";
import tag from "./tag";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([post, tag, blockContent]),
});
