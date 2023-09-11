## Big Basket Assignment

### video Demonstration [https://drive.google.com/file/d/1aDGBVx9LcF-7sOMIGWKs5iYVIyCQs006/view?usp=sharing]

### Env Variables

add `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

Change the JWT_SECRET to what you want

add `.env.local` in the frontend

```
VITE_API_URL= backend url

```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:5173) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
