import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import uuidv4 from 'uuid/v4';
import routes from './routes';
import models, { connectDb } from './models';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/api/recipetest', routes.recipetest);
app.use('/api/recipe', routes.recipe);
app.use('/api/category', routes.category);
app.use('/api/user', routes.user);

connectDb().then(async () => {
  // await Promise.all([
  //     models.RecipeTest.deleteMany({}),
  //   ]);
  // createSeedData();
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createSeedData = async () => {
  // const recipe1 = new models.Recipe({
  //   thumbnailImage: 'https://www.thespruceeats.com/thmb/4QUIYqDCxzubLJmYFDwgr9GgBBk=/1333x1000/smart/filters:no_upscale()/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg',
  //   title: 'Stekt kylling',
  //   category: 'Dinner',
  //   author: 'Ola',
  //   ingredients:[{amount: '3ss', ingredient: 'Mjøl'}, {amount: '5dl', ingredient: 'Sukker'}, {amount: '1l', ingredient: 'Melk'}, {amount: '3ts', ingredient: 'Kardemome'}],
  //   instructions: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat mattis suscipit. Mauris quis dapibus risus, at accumsan nulla. Maecenas lobortis diam a elit pellentesque semper. Aenean condimentum, lectus ornare finibus ultrices, justo magna molestie enim, ut elementum ante ex eu tortor. Fusce id nisl sem.', 'Donec eros felis, posuere ut nulla eu, ultrices posuere tellus. In consequat tempor sem, quis dignissim lacus ultricies bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales orci a dictum gravida.', 'Cras euismod neque ut porta facilisis. Praesent luctus metus a lorem hendrerit tempus eget vel ante. Aenean id sodales erat, sed semper enim. Aliquam ut volutpat mauris, vitae egestas erat.', 'Ut eget vehicula lectus. Curabitur dignissim auctor lorem nec commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam posuere in ligula eu scelerisque. Nunc varius fermentum purus. Suspendisse potenti. Praesent sed purus aliquam, sollicitudin arcu et, varius arcu.'],
  // });
  //
  // const recipe2 = new models.RecipeTest({
  //   title: 'Kake',
  // });
  //
  // const recipe3 = new models.RecipeTest({
  //   title: 'Kringle',
  // });

  await recipe1.save();
}
