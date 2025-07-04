const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ message: 'Item creado correctamente'});
  } catch (err) {
    res.status(500).json({ error: 'Error al crear item ' + err });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener items ' + err });
  }
};
