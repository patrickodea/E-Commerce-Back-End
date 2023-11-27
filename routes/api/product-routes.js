const router = require("express").Router();

const { Product, Category, Tag, ProductTag } = require("../../models");

router.get("/", (req, res) => {
    Product.findAll({
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        include: [
            {
                model: Category,
                attributes: ["id", "category_name"],
            },
            {
                model: Tag,
                attributes: ["id", "tag_name"],
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

router.get("/:id", (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        include: [
            {
                model: Category,
                attributes: ["id", "category_name"],
            },
            {
                model: Tag,
                attributes: ["id", "tag_name"],
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