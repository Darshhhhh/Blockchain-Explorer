# Blockchain Explorer

## Darsh Shah - 101452662

## Run Locally

->> Start the Hardhat server

```bash
    cd Hardhat
    npx hardhat node
```

->> Hardhat Server Running On : http://127.0.0.1:8545/

->> Start Mongo & Express Server

```bash
    cd Backend
    npm run dev
```

->> Start the MongoDBCompas and run it on Local Server
->> Backend Server Running On : http://localhost:9999/
->> MongoDB server Running On : mongodb://0.0.0.0:27017/

->> Start the Frontend server

```bash
    cd Frontend
    npm run dev
```

->> Frontend Server Running On : http://localhost:5173/

## API Reference

#### Get List of Wallet

```http
  GET /api/addresses/accounts
```

### Post Transactions TO DB

```http
  POST /api/tranaction/receipt/amount=${Amount}
```

#### Get Transaction History

```http
  GET /api/tranaction/history
```

