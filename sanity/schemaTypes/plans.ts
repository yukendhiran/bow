import { defineField, defineType } from "sanity";

export const plans = defineType({
  type: "document",
  name: "plans",
  title: "Plans",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "price",
      title: "Price",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "type",
      title: "Type",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "mealcount",
      title: "MealCount",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
      validation: (e) => e.required(),
    }),
  ],
});
