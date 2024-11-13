const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: [true, 'Tour must have a cover image']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String,
    trim: true
  },
  difficulty: {
    type: String,
    required: [true, 'Tour must have a difficulty level']
  },
  duration: {
    type: Number,
    required: [true, 'Tour must have a duration']
  },
  images: [String],
  maxGroupSize: {
    type: Number,
    required: [true, 'Tour must have a group size']
  },
  name: {
    type: String,
    required: [true, 'Tour must have a name'],
    unique: true
  },
  price: { type: Number, required: [true, 'Tour must have a price'] },
  priceDiscount: Number,
  rating: { type: Number, default: 4.5 },
  ratingsAverage: Number,
  ratingsQuantity: Number,
  startDates: [Date],
  summary: {
    type: String,
    trim: true,
    required: [true, 'A short summary is required for a tour']
  }
});

const Tour = mongoose.model('tour', tourSchema);
module.exports = Tour;
