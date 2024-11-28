import { defineArrayMember, defineField, defineType } from "sanity";

export const product = defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "image",
      title: "Image",
      validation: (e) => e.required(),
      of: [defineArrayMember({ type: "image" })],
    }),
    defineField({ type: "string", name: "description", title: "description" }),
    defineField({
      type: "array",
      name: "catogory",
      title: "catogory",
      validation: (e) => e.required(),
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "catogory" }] }),
      ],
    }),
    defineField({
      type: "array",
      name: "details",
      title: "details",
      of: [{ type: "string" }],
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "slug",
      options: { source: "title" },
    }),
  ],
});
