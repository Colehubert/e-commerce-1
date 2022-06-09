const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  const category = await Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
});
res.json(category);
});

router.get('/:id', (req, res) => {
  const category = await Category.findAll({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category_name"],
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
});
res.json(category);
});

router.post('/', (req, res) => {
  const category = await Category.create({
    category_name: req.body.category_name,
});
res.json(category);
});

router.put('/:id', (req, res) => {
  const category = await Category.update(req.body, {
    where: {
      id: req.body.id,
    },
});
res.json(category);
});

router.delete('/:id', (req, res) => {
  const category = await Category.destroy({
    where: {
      id: req.params.id,
    },
});
res.json(category);
});

module.exports = router;
