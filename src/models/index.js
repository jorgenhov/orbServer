import mongoose from 'mongoose';

import RecipeTest from './recipeTest';
import Recipe from './recipe';
import Category from './categories';
import User from './users';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
};

const models = { RecipeTest, Recipe, Category, User };

export { connectDb };

export default models;
