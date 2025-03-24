import express from 'express';
import menu from "../db/menu.json" with {type :"json"}

const router: express.Router = express.Router();

const newMenu=menu.menu
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (Array.isArray(newMenu))
        return res.status(200).send(newMenu.filter((ar) => ar.id == id));
    return res.status(404).json("is not array")
});
router.get('/', (req, res) => {
  const firstLimit = req.query['limit'];
  if (firstLimit && typeof firstLimit === 'string') {
    const limit = parseInt(firstLimit);

      if (!isNaN(limit) && limit > 0) {
    if (Array.isArray(newMenu))
        
        return res.status(200).json(newMenu.slice(0, limit));
    return res.status(404).json("is not array")
          
    }
  }
  return res.status(200).json(newMenu);
});
router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).json(newMenu);
});
export default router;
