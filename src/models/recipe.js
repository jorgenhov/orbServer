import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
  },
  thumbnailImage: {
    type: String,
    unique: false,
  },
  category: {
    type: String,
    unique: false,
  },
  author: {
    type: String,
    unique: false,
  },
  ingredients: [{
    amount: String,
    ingredient: String
  }],
  instructions: [
    String
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

recipeSchema.index({
  name: 'text',
  description: 'text',
}, {
  weights: {
    title: 5,
    author: 1,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
