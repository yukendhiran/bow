import { defineField, defineType } from "sanity";

export const catogory = defineType({
  type: "document",
  name: "catogory",
  title: "catogory",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "slug",
      options: { source: "title" },
    }),
    defineField({ type: "string", name: "description", title: "description" }),
  ],
});
