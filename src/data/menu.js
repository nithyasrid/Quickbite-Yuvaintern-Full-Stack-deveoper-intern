export const menuItems = [
  {
    id: 1,
    name: "Garden Pesto Bowl",
    category: "Bowls",
    description: "Herbed grains, greens, roasted vegetables and basil pesto.",
    price: 249,
    tag: "Fresh pick",
    emoji: "🥗",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Wild Mushroom Toast",
    category: "Small plates",
    description: "Sourdough toast with garlic mushrooms and creamy herbs.",
    price: 189,
    tag: "Popular",
    emoji: "🍞",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Lotus Pink Smoothie",
    category: "Drinks",
    description: "Strawberry, banana and chilled oat milk.",
    price: 149,
    tag: "New",
    emoji: "🥤",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Roasted Tomato Pasta",
    category: "Mains",
    description: "Slow-roasted tomato sauce, basil and parmesan.",
    price: 279,
    tag: "Chef's choice",
    emoji: "🍝",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Crispy Garden Wrap",
    category: "Small plates",
    description: "Crunchy seasonal vegetables with a tangy green dressing.",
    price: 199,
    tag: "Vegetarian",
    emoji: "🌯",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Cocoa Cloud Cake",
    category: "Desserts",
    description: "Soft chocolate cake with a delicate cocoa finish.",
    price: 159,
    tag: "Sweet finish",
    emoji: "🍰",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
  }
];

export const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
