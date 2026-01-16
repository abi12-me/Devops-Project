const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get(`/products`, (req, res) => {
    res.json([
        { id: 1, name: "Smartphone X Series", price: 19999 },
        { id: 2, name: "Wireless Earbuds", price: 2499 },
        { id: 3, name: "Laptop Pro Edition", price: 54999 }
    ]);
});

app.post(`/order`, (req, res) => {
    const order = req.body;
    res.json({
        message: "Order received successfully",
        orderId: "DX" + Math.floor(Math.random() * 100000)
    });
});

app.listen(5000, () => {
    console.log(`Backend server is running on http://localhost:5000`);
});