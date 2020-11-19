const mongoose = require('mongoose');

const Item = require('./models/item');

const createItem = async (req, res, next) => {
  const createdItem = new Item({
    name: req.body.name,
    description: req.body.description,
  });

  const result = await createdItem.save();

  res.json(result);
};

exports.createItem = createItem;
