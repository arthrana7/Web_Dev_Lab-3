// Run: npm run seed  -> inserts 12 sample products (clears old ones first)
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Wireless Mouse', sku: 'ELEC-MS-101', category: 'Electronics', price: 799, quantity: 30, reorderLevel: 10, supplier: 'Logitech' },
  { name: 'Bluetooth Headphones', sku: 'ELEC-HP-102', category: 'Electronics', price: 2499, quantity: 15, reorderLevel: 8, supplier: 'boAt' },
  { name: 'Smartphone', sku: 'ELEC-SP-103', category: 'Electronics', price: 15999, quantity: 5, reorderLevel: 3, supplier: 'Samsung India' },
  { name: 'Laptop', sku: 'ELEC-LT-104', category: 'Electronics', price: 55000, quantity: 4, reorderLevel: 5, supplier: 'Dell India' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-201', category: 'Apparel', price: 499, quantity: 50, reorderLevel: 15, supplier: 'Allen Solly' },
  { name: 'Denim Jeans', sku: 'APRL-JN-202', category: 'Apparel', price: 2299, quantity: 28, reorderLevel: 10, supplier: 'Levis' },
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-813', category: 'Furniture', price: 6499, quantity: 8, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'A4 Notebook Pack', sku: 'STNY-NB-714', category: 'Stationery', price: 250, quantity: 3, reorderLevel: 10, supplier: 'Classmate' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-301', category: 'Grocery', price: 650, quantity: 25, reorderLevel: 10, supplier: 'India Gate' },
  { name: 'Green Tea Box', sku: 'GROC-GT-302', category: 'Grocery', price: 350, quantity: 6, reorderLevel: 8, supplier: 'Tetley' },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
