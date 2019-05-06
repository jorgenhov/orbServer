import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const authors = await req.context.models.Authors.find();
  return res.send(authors);
});

router.post('/', async (req, res) => {
  const author = await req.context.models.Authors.create({
    author: req.body.author,
  });
  return res.send(author);
});

export default router;
