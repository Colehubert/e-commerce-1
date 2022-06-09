const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  const tag = await Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  });
  res.json(tag);
});


router.get('/:id', async(req, res) => {
  const tag = await Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  });
  res.json(tag);
});


router.post('/', async (req, res) => {
  const tag = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.json(tag);
});

router.put('/:id', async(req, res) => {
  const tag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(tag);
});

router.delete('/:id', async(req, res) => {
  const tag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(tag);
});

module.exports = router;
