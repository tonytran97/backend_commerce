const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{model: Product}],
  });

  if (!tagData) {
    res.status(404).json({ message: 'No tag with that id was found'});
    return;
  }

  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
  }
});

// create a new tag
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    Tag.create(req.body)
    .then((product) => {
      res.status(200).json(product);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(tagData => {
    if(!tagData) {
      res.status(404).json({ message: 'No tag with that id was found'});
      return;
    }
    res.status(200).json(tagData);
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.status(200).json(tagData);
});

module.exports = router;
