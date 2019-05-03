import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const categories = await req.context.models.Category.find();
  return res.send(categories);
});

router.post('/', async (req, res) => {
  const category = await req.context.models.Category.create({
    category: req.body.category,
  });
  return res.send(category);
});

export default router;
