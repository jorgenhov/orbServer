import { Router } from 'express';

const router = Router();

router.get('/collectionlength', async (req, res) => {
  const length = await req.context.models.Recipe.countDocuments();
  return res.send(String(length));
});

router.get('/', async (req, res) => {
  const recipes = await req.context.models.Recipe.find();
  return res.send(recipes);
});

router.get('/paginate/:currentCount', async (req, res) => {
  let skipAmount = parseInt(req.params.currentCount);
  const recipes = await req.context.models.Recipe.find().limit(10).skip(skipAmount);
  return res.send(recipes);
});

router.get('/author/:author', async (req, res) => {
  const recipes = await req.context.models.Recipe.find({
    author: req.params.author
  });
  return res.send(recipes);
});

router.get('/category/:category', async (req, res) => {
  const recipes = await req.context.models.Recipe.find({
    category: req.params.category
  });
  return res.send(recipes);
});

router.get('/categoryandauthor/:category/:author', async (req, res) => {
  const recipes = await req.context.models.Recipe.find({
    category: req.params.category,
    author: req.params.author
  });
  return res.send(recipes);
});

router.get('/search/:searchTerm', async (req, res) => {
  let searchRegExp = new RegExp(req.params.searchTerm)
  const recipes = await req.context.models.Recipe.find(
    { title: { $regex: searchRegExp, $options: 'i' } }
  )
  return res.send(recipes);
});

router.get('/search/:searchTerm/author/:author', async (req, res) => {
  let searchRegExp = new RegExp(req.params.searchTerm)
  const recipes = await req.context.models.Recipe.find({
    title: { $regex: searchRegExp, $options: 'i' },
    author: req.params.author
  })
  return res.send(recipes);
});

router.get('/search/:searchTerm/category/:category', async (req, res) => {
  let searchRegExp = new RegExp(req.params.searchTerm)
  const recipes = await req.context.models.Recipe.find({
    title: { $regex: searchRegExp, $options: 'i' },
    category: req.params.category
  })
  return res.send(recipes);
});

router.get('/search/:searchTerm/author/:author/category/:category', async (req, res) => {
  let searchRegExp = new RegExp(req.params.searchTerm)
  const recipes = await req.context.models.Recipe.find({
    title: { $regex: searchRegExp, $options: 'i' },
    author: req.params.author,
    category: req.params.category
  })
  return res.send(recipes);
});

router.post('/', async (req, res) => {
  const recipe = await req.context.models.Recipe.create({
    title: req.body.title,
    thumbnailImage: req.body.thumbnailImage,
    category: req.body.category,
    author: req.body.author,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  return res.send(recipe);
});

router.delete('/:rID', async (req, res) => {
  const recipe = await req.context.models.Recipe.findById(
    req.params.rID
  );
  let result = null;
  if(recipe) {
    result = await recipe.remove();
  }
  return res.send(result);
});

export default router;
