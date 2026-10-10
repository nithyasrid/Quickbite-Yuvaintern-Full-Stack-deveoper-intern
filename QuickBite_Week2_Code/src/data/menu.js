export const menuItems = [
  {
    id: 1,
    name: "Garden Pesto Bowl",
    category: "Bowls",
    description: "Herbed grains, greens, roasted vegetables and basil pesto.",
    price: 249,
    tag: "Fresh pick",
    emoji: "🥗"
  },
  {
    id: 2,
    name: "Wild Mushroom Toast",
    category: "Small plates",
    description: "Sourdough toast with garlic mushrooms and creamy herbs.",
    price: 189,
    tag: "Popular",
    emoji: "🍞"
  },
  {
    id: 3,
    name: "Lotus Pink Smoothie",
    category: "Drinks",
    description: "Strawberry, banana and chilled oat milk.",
    price: 149,
    tag: "New",
    emoji: "🥤"
  },
  {
    id: 4,
    name: "Roasted Tomato Pasta",
    category: "Mains",
    description: "Slow-roasted tomato sauce, basil and parmesan.",
    price: 279,
    tag: "Chef's choice",
    emoji: "🍝"
  },
  {
    id: 5,
    name: "Crispy Garden Wrap",
    category: "Small plates",
    description: "Crunchy seasonal vegetables with a tangy green dressing.",
    price: 199,
    tag: "Vegetarian",
    emoji: "🌯"
  },
  {
    id: 6,
    name: "Cocoa Cloud Cake",
    category: "Desserts",
    description: "Soft chocolate cake with a delicate cocoa finish.",
    price: 159,
    tag: "Sweet finish",
    emoji: "🍰"
  }
];

export const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
