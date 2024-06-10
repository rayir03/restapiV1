const express = require("express");


const app = express();
app.use(express.json());
app.use("/products", require("./routes/productsRoutes"))


app.listen(3005, ()=> {
    console.log("Server started on port 3005");
})