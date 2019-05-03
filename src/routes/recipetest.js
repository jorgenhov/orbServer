import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const recipes = await req.context.models.RecipeTest.find();
  return res.send(recipes);
});

router.get('/:rID', async (req, res) => {
  const recipe = await req.context.models.RecipeTest.findById(
    req.params.rID,
  );
  return res.send(recipe);
});

router.post('/', async (req, res) => {
  const recipe = await req.context.models.RecipeTest.create({
    title: req.body.title,
  });
  return res.send(recipe);
});

router.delete('/:rID', async (req, res) => {
  const recipe = await req.context.models.RecipeTest.findById(
    req.params.rID,
  );

  let result = null;
  if (recipe) {
    result = await recipe.remove();
  }
  return res.send(result);
});

export default router;
