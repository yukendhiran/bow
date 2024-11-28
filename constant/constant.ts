export const plans = [
  {
    _type: "plans",
    _id: "plan_1",
    name: "Weight Loss Plan",
    price: "1499",
    type: "Monthly",
    mealcount: "30",
    description:
      "A carefully curated plan for those aiming to lose weight with balanced meals.",
  },
  {
    _type: "plans",
    _id: "plan_2",
    name: "Muscle Gain Plan",
    price: "1999",
    type: "Weekly",
    mealcount: "7",
    description:
      "High-protein meals tailored for building muscle and strength.",
  },
  {
    _type: "plans",
    _id: "plan_3",
    name: "Keto Plan",
    price: "1799",
    type: "Monthly",
    mealcount: "25",
    description: "Low-carb, high-fat meals to support ketogenic diets.",
  },
];

export const category = [
  {
    _type: "catogory",
    _id: "cat_1",
    title: "Vegetarian",
    slug: { current: "vegetarian" },
    description: "Meals made with fresh, plant-based ingredients.",
  },
  {
    _type: "catogory",
    _id: "cat_2",
    title: "Muscle Gain",
    slug: { current: "muscle-gain" },
    description: "High-protein meals designed for fitness enthusiasts.",
  },
  {
    _type: "catogory",
    _id: "cat_3",
    title: "Low Carb",
    slug: { current: "low-carb" },
    description: "Delicious meals with minimal carbohydrates.",
  },
];

export const product = [
  {
    _type: "product",
    _id: "product_1",
    title: "Grilled Chicken Salad",
    image: [
      {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image_asset_id_1",
        },
      },
    ],
    description:
      "A healthy salad with grilled chicken, fresh greens, and a light dressing.",
    catogory: [
      { _type: "reference", _ref: "cat_2" },
      { _type: "reference", _ref: "cat_3" },
    ],
    details: ["High in protein", "Low in carbs", "Gluten-free"],
    slug: { current: "grilled-chicken-salad" },
  },
  {
    _type: "product",
    _id: "product_2",
    title: "Quinoa Bowl",
    image: [
      {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image_asset_id_2",
        },
      },
    ],
    description:
      "A nourishing bowl with quinoa, chickpeas, and seasonal vegetables.",
    catogory: [{ _type: "reference", _ref: "cat_1" }],
    details: ["Rich in fiber", "Vegan", "Packed with nutrients"],
    slug: { current: "quinoa-bowl" },
  },
  {
    _type: "product",
    _id: "product_3",
    title: "Keto Avocado Wrap",
    image: [
      {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image_asset_id_3",
        },
      },
    ],
    description: "A keto-friendly wrap with avocado, chicken, and cheese.",
    catogory: [{ _type: "reference", _ref: "cat_3" }],
    details: ["Keto-friendly", "High in healthy fats", "Gluten-free"],
    slug: { current: "keto-avocado-wrap" },
  },
];
