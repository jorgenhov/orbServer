//Ikkje brukt lenger

import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.post('/', async (req, res) => {
  const user = await req.context.models.User.create({
    user: req.body.user,
  });
  return res.send(user);
});


export default router;
