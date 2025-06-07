import { GetProductsResponse } from "../schemas/product.schema";
import { v4 as uuidv4 } from 'uuid';

export const getProducts = (): GetProductsResponse => {
  return {
    pageIndex: 1,
    pageSize: 10, // Let's return 10 items for this example
    totalCount: 100, // Assume a total of 100 products
    items: [
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.1, // 10% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Mechanical Keyboard Pro X",
        price: 120.50,
        rating: 4.5,
        ratingQuantity: 150,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0,
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Gateron Yellow Switches (Pack of 100)",
        price: 35.00,
        rating: 4.8,
        ratingQuantity: 300,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.05, // 5% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "PBT Doubleshot Keycap Set (White)",
        price: 55.99,
        rating: 4.6,
        ratingQuantity: 200,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.15, // 15% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Compact Wireless Keyboard",
        price: 85.00,
        rating: 4.2,
        ratingQuantity: 80,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0,
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Cherry MX Brown Switches (Pack of 100)",
        price: 40.00,
        rating: 4.7,
        ratingQuantity: 250,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.1, // 10% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Artisan Keycap (Space Theme)",
        price: 25.00,
        rating: 4.9,
        ratingQuantity: 50,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0,
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Ergonomic Split Keyboard",
        price: 150.00,
        rating: 4.0,
        ratingQuantity: 60,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.2, // 20% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Kailh Box Jade Switches (Pack of 100)",
        price: 30.00,
        rating: 4.7,
        ratingQuantity: 180,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0,
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "ABS Backlit Keycap Set (Black)",
        price: 45.00,
        rating: 4.3,
        ratingQuantity: 120,
      },
      {
        id: uuidv4(), // Generate a UUID for the ID
        discount: 0.08, // 8% discount
        imageUrls: ["https://bizweb.dktcdn.net/100/484/752/products/neo65-black-1710223674574.jpg?v=1741666990903"],
        name: "Gaming Keyboard with RGB",
        price: 99.99,
        rating: 4.6,
        ratingQuantity: 220,
      },
    ]
  }
}
