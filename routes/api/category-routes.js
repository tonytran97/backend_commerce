const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No category with that id was found'});
    return;
  }

  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
    /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    Category.create(req.body)
    .then((product) => {
      res.status(200).json(product);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(categoryData => {
    if(!categoryData) {
      res.status(404).json({ message: 'No category with that id was found'});
      return;
    }
    res.status(200).json(categoryData);
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.status(200).json(categoryData);
});

module.exports = router;
