import { type SchemaTypeDefinition } from "sanity";
import { catogory } from "./category";
import { plans } from "./plans";
import { product } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [catogory, product, plans],
};
