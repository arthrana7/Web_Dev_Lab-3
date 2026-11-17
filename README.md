# Inventory and Data Management System

Node.js + Express + MongoDB (Mongoose) + dotenv

## Setup
```bash
npm install
# MongoDB local chalna chahiye (ya .env me Atlas ka MONGO_URI daal do)
npm run seed     # optional: 12 sample products
npm start        # http://localhost:5002
```

## Endpoints
| Method | URL | Kaam |
|---|---|---|
| POST | /api/products | Product create |
| GET | /api/products | List (filter, sort, pagination) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | Body `{"change": 10}` restock, `{"change": -3}` sale |
| DELETE | /api/products/:id | Delete |
| GET | /api/products/low-stock | quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise summary |

### Query params (GET /api/products)
`category`, `supplier`, `search`, `minPrice`, `maxPrice`, `inStock=true|false`, `sort=-price,name`, `page`, `limit`

Example: `/api/products?category=Electronics&minPrice=500&sort=-price&page=1&limit=5`
