import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Admin Admin",
      email: "admin@mail.bg",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Blagovest Kabov",
      email: "kabov1@mail.bg",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Тениска Nike",
      category: "Тениски",
      image: "/images/p1.jpg",
      price: 47.99,
      countInStack: 10,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "!00% памук, високо качество. Подходяща за спорт или ежедневно носене.",
    },

    {
      name: "Блуза Ellesse",
      category: "Блузи",
      image: "/images/p2.jpg",
      price: 77.31,
      countInStack: 20,
      brand: "Ellesse",
      rating: 4,
      numReviews: 17,
      description: "Високо качество. Произведено в Италия.",
    },

    {
      name: "Тениска HUGO",
      category: "Тениски",
      image: "/images/p3.jpg",
      price: 87.99,
      countInStack: 0,
      brand: "HUGO BOSS",
      rating: 3.2,
      numReviews: 2,
      description: "40% памук, 60% ликра",
    },

    {
      name: "Спортен Екип Nike",
      category: "Анцузи",
      image: "/images/p4.jpg",
      price: 247.99,
      countInStack: 15,
      brand: "Nike",
      rating: 5,
      numReviews: 4,
      description: "!00% памук, високо качество. Подходящ за спорт или ежедневно носене.",
    },

    {
      name: "Кецове Jordan Dub Zero",
      category: "Обувки",
      image: "/images/p5.jpg",
      price: 238.99,
      countInStack: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Ергономични стелки, дебела подметка, дишащи мрежи, AIR технологии за по-удобно преживяване.",
    },

    {
      name: "Спортен Екип France Jordan",
      category: "Анцузи",
      image: "/images/p6.jpg",
      price: 299.99,
      countInStack: 12,
      brand: "Nike",
      rating: 5,
      numReviews: 27,
      description: "Висококачествена материя -  100% памукк",
    },
  ],
};

export default data;
