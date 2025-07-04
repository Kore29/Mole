const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Fruta', 'Verdura', 'Carne', 'Pescado', 'Lácteo', 'Cereal', 'Bebida', 'Otro'],
    default: 'Otro'
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  expiryDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String
  }
});

module.exports = mongoose.model('Item', itemSchema);