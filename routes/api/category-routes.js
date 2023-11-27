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

router.get("/:id", (req, res) =>{
    Category.findOne({
        where: [
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

router.post("/", (req, res) => {
    console.log(req.body);
    Category.create({ category_name: req.body.category_name })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
    Category.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;