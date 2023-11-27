const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", (req, res) =>{
    Category.findAll({
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
            },
        ],
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/:id", (req, res) =>)