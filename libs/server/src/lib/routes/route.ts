import express from 'express';
import {v4 as uuidv4} from "uuid"
import menu from "../db/menu.json" with {type :"json"}
import { ReadFile, WriteFile } from '../readfile.ts';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

const dbPath=path.join(__dirname,"../db")
const router: express.Router = express.Router();
const newMenu=menu.menu
router.get('/:id', (req, res) => {
    const data=ReadFile(dbPath,req.baseUrl)
    const value=Object.values(data)[0]
    
    const id = parseInt(req.params.id);
    if (Array.isArray(value))
        return res.status(200).send(value.filter((ar) => ar.id == id));
    return res.status(404).json("is not array")
});
router.get('/', (req, res) => {
    
    const data = ReadFile(dbPath, req.baseUrl)
    console.log(data);
    
    if (!data) {
        return res.status(404).json("no database find");
    }
    const value=Object.values(data)[0]
  const firstLimit = req.query['limit'];
  if (firstLimit && typeof firstLimit === 'string') {
    const limit = parseInt(firstLimit);

      if (!isNaN(limit) && limit > 0) {
    if (Array.isArray(value))
        
        return res.status(200).json(value.slice(0, limit));
    return res.status(404).json("is not array")
          
    }
  }
  return res.status(200).json(data);
});
router.post('/', (req, res) => {
    const data=ReadFile(dbPath,req.baseUrl)
    const value=Object.values(data)[0]
    if (Array.isArray(value)) {
        if(req.body.id)
            value.push(req.body)
        else 
        value.push({id:uuidv4(),...req.body})
            WriteFile(dbPath,req.baseUrl,data)
        return res.status(200).json(data);}
    return res.status(404).json("is not array")
       
  
});
export default router;
