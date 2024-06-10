const crypto = require("crypto");

const products = [
    {
        id: "b2daa2f3-4027-482e-80f8-188fb23e6608",
        name: "Laptop",
        price: 450.00,
        quantity: 4,
        active: true
    },
    {
        id: "b2daa2f3-4027-482e-80f8-188fb23e6609",
        name: "Keyboard",
        price: 29.00,
        quantity: 10,
        active: true
    },
    {
        id: "b2daa2f3-4027-482e-80f8-188fb23e6610",
        name: "Computer",
        price: 900,
        quantity: 2,
        active: true
        }
]



exports.getAllProducts = (req, res) =>{
    res.status(200).json(products)
}

exports.createProducts = (req, res) => {
    const { name, price, quantity, active } = req.body;

    if(!name) {
        return res.status(422).json({message: "Name is required"});
    }
    const id = crypto.randomUUID();
    products.push({
        id,
        name,
        price,
        quantity,
        active
    });
    res.status(201).json({messge: "Product created successfully"})
}
exports.getAProducts = (req, res) => {
    const product = products.find(product => product.id == req.params.id);

    if(!product) {
        // return res.status(204).send("");
        return res.status(404).json({message: "Product not found" })
    }
    
    res.status(200).json(product)
}


exports.updateProducts = (req, res) => {
    const product = products.find(product => product.id == req.params.id)

    if(!product) {

        return res.status(404).json({message: "Product not found" })
    }
    const { name, price, quantity, active } = req.body;

    if(name) {
        product.name = name
    }
    if(price) {
        product.price = price
    }
    if(quantity) {
        product.quantity = quantity
    }
    if("active" in req.body) {
        product.active = active
    }
    res.status(200).json({message: "Product updated successfully"})
}




exports.deleteProducts = (req, res) => {
    const productIndex = products.findIndex(product => product.id == req.params.id)

    if(productIndex == -1) {
        return  res.status(404).json({message: "Product not found" })
    }
    products.splice(productIndex, 1)

    res.status(200).json({messge: "Product deleted successfully"});
}
