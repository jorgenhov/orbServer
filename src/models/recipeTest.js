import mongoose from 'mongoose';

const recipetestSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
  },
});

const RecipeTest = mongoose.model('RecipeTest', recipetestSchema);

export default RecipeTest;
