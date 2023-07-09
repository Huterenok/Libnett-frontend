interface IBook {
  title: string;
  surname: string;
  name: string;
  year: string;
  isbn: string;
  walletAddress: string;
  term: string;
  price: string;
  path: string;
}

export const books: IBook[] = [
  {
    title: "Tne Handmaid’s Tale",
    surname: "Atwood",
    name: "Margaret",
    year: "1970",
    isbn: "978-5-14615-06-5",
    walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    term: "34%",
    price: "20%",
    path: "/images/books/list_1.png",
  },
  {
    title: "Pride and Prejudice",
    surname: "Austen",
    name: "Jade",
    year: "1970",
    isbn: "978-5-14615-06-5",
    walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    term: "34%",
    price: "20%",
    path: "/images/books/list_2.png",
  },
  {
    title: "Atlas Shrugged",
    surname: "Rand",
    name: "Ayn",
    year: "1970",
    isbn: "978-5-14615-06-5",
    walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    term: "34%",
    price: "20%",
    path: "/images/books/list_3.png",
  },
  {
    title: "Fahrenheit 451",
    surname: "Bradbury",
    name: "Ray",
    year: "1970",
    isbn: "978-5-14615-06-5",
    walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    term: "34%",
    price: "20%",
    path: "/images/books/list_4.png",
  },
];
