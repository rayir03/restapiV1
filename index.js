const express = require("express");

const app = express();
app.use(express.json());

const products = [
    {
        name: "Laptop",
        price: 450.00,
        quantity: 4,
        active: true
    },
    {
        name: "Keyboard",
        price: 29.00,
        quantity: 10,
        active: true
    }
]



app.get("/", (req, res) => {
    res.send("testing ...")
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.post("/products", (req, res) => {
    const { name, price, quantity, active } = req.body;

    if(!name) {
        return res.status(422).json({message: "Name is required"});
    }
    products.push({
        name,
        price,
        quantity,
        active
    });
    res.status(201).json({messge: "Product created successfully"})
})

app.listen(3000, ()=> {
    console.log("Server started on port 3000");
})