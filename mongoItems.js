const MongoClient = require('mongodb').MongoClient;

const MongoUrl = process.env.MONGO_URL;

const createItem = async (req, res, next) => {
  const newItem = {
    name: req.body.name,
    description: req.body.description,
  };

  const client = new MongoClient(MongoUrl);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('items').insertOne(newItem);
    await client.close();
  } catch (error) {
    return res.json({ message: 'Could not store data' });
  }

  res.json(newItem);
};

const getItems = async (req, res, next) => {};

exports.createItem = createItem;
exports.getItems = getItems;
