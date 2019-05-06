import mongoose from 'mongoose';

import RecipeTest from './recipeTest';
import Recipe from './recipe';
import Category from './categories';
//import UserList from './userList';
import User from './user';
import Authors from './authors';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
};

const models = { RecipeTest, Recipe, Category, User, Authors };

export { connectDb };

export default models;
