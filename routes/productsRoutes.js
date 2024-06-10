const express = require("express")
const router = express.Router();
const productsController = require("../controllers/productsController");





router.get("/", productsController.getAllProducts)

router.post("/", productsController.createProducts)

router.put("/:id", productsController.updateProducts)

router.get("/:id", productsController.getAProducts)

router.delete("/:id", productsController.deleteProducts)

module.exports = router;