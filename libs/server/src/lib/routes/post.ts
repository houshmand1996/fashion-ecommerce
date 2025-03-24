import express from 'express';
import posts from "../db/posts.json" with {type :"json"}

const router: express.Router = express.Router();

const newPost=posts.posts
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).send(newPost.filter((ar) => ar.id == id));
});
router.get('/', (req, res) => {
  console.log(req.baseUrl);
  
  const firstLimit = req.query['limit'];
  if (firstLimit && typeof firstLimit === 'string') {
    const limit = parseInt(firstLimit);

    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(newPost.slice(0, limit));
    }
  }
  return res.status(200).json(newPost);
});
router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).json(newPost);
});
export default router;
