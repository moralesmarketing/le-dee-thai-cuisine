export const business = {
  name: "Le Dee Thai Cuisine",
  tagline: "Thai Cuisine, Served With Heart",
  city: "Chino Hills",
  address: {
    line1: "4711 Chino Hills Pkwy, Ste G",
    line2: "Chino Hills, CA 91709",
  },
  phone: "(909) 966-4465",
  phoneHref: "tel:+19099664465",
  email: "Ledeethaicuisine@gmail.com",
  yelpUrl: "https://www.yelp.com/biz/le-dee-thai-cuisine-chino-hills",
  grubhubUrl:
    "https://www.grubhub.com/restaurant/le-dee-thai-cuisine-4711-chino-hills-pkwy-chino-hills/10760032",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Le+Dee+Thai+Cuisine+4711+Chino+Hills+Pkwy+Ste+G+Chino+Hills+CA+91709",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Le+Dee+Thai+Cuisine,+4711+Chino+Hills+Pkwy+Ste+G,+Chino+Hills,+CA+91709&output=embed",
  hours: [
    { day: "Monday", time: "11:00 AM – 2:30 PM, 3:30 PM – 9:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 2:30 PM, 3:30 PM – 9:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 2:30 PM, 3:30 PM – 9:00 PM" },
    { day: "Thursday", time: "11:00 AM – 2:30 PM, 3:30 PM – 9:00 PM" },
    { day: "Friday", time: "11:00 AM – 9:00 PM" },
    { day: "Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 9:00 PM" },
  ],
  rating: {
    yelp: { score: 4.5, count: 191 },
    grubhub: { score: 4.8, count: 39 },
  },
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: "Popular" | "Signature" | "Vegetarian";
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "best-sellers",
    title: "Best Sellers",
    items: [
      {
        name: "Pad See Ew",
        price: "$17.25",
        description:
          "Stir-fried flat rice noodles with rich soy sauce, tender broccoli, and scrambled egg.",
        tag: "Popular",
      },
      {
        name: "Pad Thai",
        price: "$17.25",
        description:
          "Rice noodles in tangy tamarind sauce with bean sprouts, crushed peanuts, green onion, and lime.",
        tag: "Popular",
      },
      {
        name: "Pad Kee Mow",
        price: "$17.25",
        description:
          "Rice noodles in a spicy basil sauce with bell peppers.",
        tag: "Popular",
      },
      {
        name: "Cashew Nut",
        price: "$18.50",
        description: "Onions, bell peppers, and carrot with cashew nut in sweet chili.",
      },
      { name: "Brown Rice", price: "$4.50" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Calamari",
        price: "$12.00",
        description: "Lightly battered and crispy-fried squid rings, served with sweet and sour dipping sauce.",
      },
      {
        name: "Chicken Satay",
        price: "$14.00",
        description: "Grilled marinated chicken with creamy peanut sauce and tangy cucumber relish.",
        tag: "Popular",
      },
      {
        name: "Crab Rangoon",
        price: "$10.00",
        description: "Crispy wontons filled with crab, cream cheese, and seasonings, served with sweet chili sauce.",
      },
      {
        name: "Fresh Roll",
        price: "$10.00",
        description: "Rice paper rolls filled with herbs and vegetables, served with peanut hoisin dipping sauce.",
        tag: "Vegetarian",
      },
      {
        name: "Fried Tofu",
        price: "$9.00",
        description: "Crispy golden tofu bites, lightly seasoned, served with sweet and sour dipping sauce.",
        tag: "Vegetarian",
      },
      {
        name: "Shrimp Rolls",
        price: "$14.00",
        description: "Shrimp wrapped in a crispy egg roll wrapper, served with shrimp chips and sweet chili sauce.",
      },
      {
        name: "Honey Garlic Butter Wings",
        price: "$14.00",
        description: "Crispy fried wings tossed in honey, garlic, and butter for a sweet-savory glaze.",
      },
      {
        name: "Sweet Chili Wings",
        price: "$14.00",
        description: "Crispy fried wings tossed in sweet, mildly spicy Thai chili sauce.",
      },
      {
        name: "Veggie Eggrolls",
        price: "$9.00",
        description: "Golden rolls filled with a savory vegetable filling, with a tangy sweet dipping sauce.",
        tag: "Vegetarian",
      },
      {
        name: "Chicken Eggrolls",
        price: "$12.00",
        description: "Seasoned chicken, shiitake mushroom, bamboo shoots, and glass noodles, fried to perfection.",
      },
      {
        name: "E-san Sausage",
        price: "$16.00",
        description: "Spicy and tangy Thai sausage with minced pork, garlic, lemongrass, and fermented rice.",
      },
      {
        name: "Sai Oua",
        price: "$22.00",
        description: "Northern Thai sausage with minced pork, lemongrass, kaffir lime leaves, galangal, and chili.",
      },
    ],
  },
  {
    id: "signature",
    title: "Le DEE Signature",
    items: [
      {
        name: "Choo Chee Salmon",
        price: "$24.00",
        description: "Pan-seared salmon topped with a rich, creamy Choo Chee curry sauce.",
        tag: "Signature",
      },
      {
        name: "Karee Shrimp",
        price: "$24.00",
        description: "Shrimp in a rich, creamy yellow curry sauce with egg, milk, garlic, and soy sauce.",
        tag: "Signature",
      },
      {
        name: "Tilapia with Chili Sauce",
        price: "$25.00",
        description: "Fried tilapia topped with a bold chili sauce of garlic, fresh chilies, fish sauce, and black pepper.",
      },
      {
        name: "Pla Duk Rad Prik",
        price: "$22.00",
        description: "Crispy fried catfish topped with a spicy chili sauce.",
      },
      {
        name: "Crying Tiger",
        price: "$22.00",
        description: "Marinated steak, grilled to perfection, served with a spicy and tangy dipping sauce.",
        tag: "Signature",
      },
      {
        name: "Talay Fire",
        price: "$25.00",
        description: "Mixed seafood cooked with Thai chili oil, garlic, and basil.",
      },
      {
        name: "Pork Jerky",
        price: "$18.00",
        description: "Marinated pork, deep-fried until tender.",
      },
      {
        name: "Issan Trio",
        price: "$30.00",
        description: "Pork jerky, som tum, and sticky rice.",
      },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      {
        name: "Tom Kha",
        price: "$19.50",
        description: "Creamy Thai coconut soup with chicken, mushrooms, lemongrass, and galangal, topped with fresh herbs.",
        tag: "Popular",
      },
      {
        name: "Tom Yum",
        price: "$18.50",
        description: "Spicy and tangy Thai soup with shrimp, mushrooms, lemongrass, and lime.",
        tag: "Popular",
      },
      {
        name: "Wonton Soup",
        price: "$18.50",
        description: "Light broth with wonton stuffed with chicken and shrimp.",
      },
      {
        name: "Seafood Soup",
        price: "$25.50",
      },
      {
        name: "Beef Stew",
        price: "$25.00",
        description: "Tender beef infused with aromatic Chinese spices, simmered in a rich, savory broth.",
      },
    ],
  },
];

export type FanFavorite = {
  name: string;
  price?: string;
  description: string;
  tag: string;
};

export const fanFavorites: FanFavorite[] = [
  {
    name: "Pad Thai",
    price: "$17.25",
    description:
      "The most-reviewed dish on the menu — rice noodles in tangy tamarind sauce with peanuts, sprouts, and lime.",
    tag: "Most Popular",
  },
  {
    name: "Pad See Ew",
    price: "$17.25",
    description: "Wide rice noodles wok-tossed in soy sauce with Chinese broccoli and egg — a Grubhub best seller.",
    tag: "Best Seller",
  },
  {
    name: "Crying Tiger",
    price: "$22.00",
    description: "Grilled marinated steak with a bright, spicy dipping sauce — the dish regulars order by name.",
    tag: "Signature",
  },
  {
    name: "Beef Stew",
    price: "$25.00",
    description: "Tender beef in a rich, spiced broth, simmered low and slow and finished with fresh celery.",
    tag: "Fan Favorite",
  },
  {
    name: "Papaya Salad",
    description: "Shredded green papaya pounded with lime, chili, and peanuts — a Thai street-food staple.",
    tag: "Fan Favorite",
  },
  {
    name: "Orange Chicken",
    description: "Crispy fried chicken bites glazed in a sweet-tangy orange sauce, finished with sesame seeds.",
    tag: "Fan Favorite",
  },
  {
    name: "Yum Woon Sen",
    description: "Glass noodle salad with shrimp, ground pork, tomato, and herbs in a bright lime dressing.",
    tag: "Fan Favorite",
  },
  {
    name: "Nam Khao Tod",
    description: "Crispy fried rice tossed with sour fermented pork, peanuts, chili, and fresh herbs — an Isaan classic.",
    tag: "Fan Favorite",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  source: "Yelp" | "Grubhub";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The food here was excellent! Delicious, authentic Thai cuisine with a variety of options that won't break the bank. The portions were so generous that we even took some home. Service was attentive and accommodating — the owner was so sweet.",
    author: "Sharon L.",
    location: "Chino Hills, CA",
    source: "Yelp",
  },
  {
    quote:
      "My fiancé and I love this place. We became regulars here! We love the crying tiger and orange chicken the most. Also the Thai green tea and regular Thai tea are the best Thai teas we've ever had!",
    author: "Rachel K.",
    location: "Los Angeles, CA",
    source: "Yelp",
  },
  {
    quote:
      "Everything we ordered here was legit and delicious. We ordered such a variety of items and they were all great. They do spice levels from 1 to 5, so you can dial it in exactly how you like it.",
    author: "David H.",
    location: "Azusa, CA",
    source: "Yelp",
  },
  {
    quote:
      "This restaurant is unique because they have an open kitchen, so you can see all the cooks wok-ing away! The staff are very friendly and attentive. Everything was delicious.",
    author: "Sandy T.",
    location: "Chino Hills, CA",
    source: "Yelp",
  },
  {
    quote:
      "Tried this place for the first time and I was really impressed. I go to a lot of Thai restaurants, so I'm pretty picky — this spot definitely delivered. Everything tasted fresh and had so much flavor.",
    author: "Julie N.",
    location: "Riverside, CA",
    source: "Yelp",
  },
  {
    quote: "Great value authentic Thai food! Everything we had was good — will definitely come back.",
    author: "Bonnie Y.",
    location: "Chino, CA",
    source: "Yelp",
  },
];

export const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes — Le Dee takes reservations for dine-in, with an open kitchen you can watch the cooks working from the dining room.",
  },
  {
    question: "Can I order delivery or pickup?",
    answer: `Yes. Order delivery through Grubhub, or call ahead at ${business.phone} for pickup.`,
  },
  {
    question: "How spicy is the food?",
    answer:
      "Spice levels run from 1 to 5, and dishes are not automatically Thai-spicy — just tell your server the level you want.",
  },
  {
    question: "Is there a lunch special?",
    answer:
      "Yes — a $14 lunch special is available 11 AM–3 PM, Monday through Friday, with rice, salad, and your choice of protein across 10 different entrées.",
  },
  {
    question: "Is there parking?",
    answer: "Yes, free parking is available in the shopping center.",
  },
];
