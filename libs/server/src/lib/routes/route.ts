import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ReadFile, WriteFile } from '../readfile.ts';
import path from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const findIdKey = (obj: Object) => {
  return Object.keys(obj).find((key) => key.toLowerCase().includes('id'));
};
const dbPath = path.join(__dirname, '../db');
const router: express.Router = express.Router();
router.get('/:id', (req, res) => {
  const data = ReadFile(dbPath, req.baseUrl);
  const value = Object.values(data)[0];

  const id = parseInt(req.params.id);
  if (Array.isArray(value))
    return res.status(200).send(value.filter((ar) => ar.id == id));
  return res.status(404).json('is not array');
});
router.get('/', (req, res) => {
  const data = ReadFile(dbPath, req.baseUrl);
  const query = req.query;
  if (!data) {
    return res.status(404).json('no database find');
  }
  let value = Object.values(data)[0];
  const firstLimit = req.query['limit'];
  const category = req.query['category'];
  const gender = req.query['gender'];
  const subCategory = req.query['subCategory'];
  console.log(category);

  if (typeof category == 'string') {
    if (Array.isArray(value)) {
      value = value.filter((ar) => ar.category == category);
    } else return res.status(404).json('is not array');
  }
  if (typeof gender == 'string') {
    if (Array.isArray(value)) {
      value = value.filter((ar) => ar.gender == gender);
    } else return res.status(404).json('is not array');
  }
  if (typeof subCategory == 'string') {
    if (Array.isArray(value)) {
      value = value.filter((ar) => ar.subCategory == subCategory);
    } else return res.status(404).json('is not array');
  }

  if (
    typeof firstLimit == 'string' &&
    !isNaN(parseInt(firstLimit)) &&
    parseInt(firstLimit) > 0
  ) {
    if (Array.isArray(value)) value = value.slice(0, parseInt(firstLimit));
    else return res.status(404).json('is not array');
  }
  return res.status(200).json(value);
});
router.post('/', (req, res) => {
  const data = ReadFile(dbPath, req.baseUrl);
  const value = Object.values(data)[0];
  if (Array.isArray(value)) {
    if (req.body.id) value.push(req.body);
    else value.push({ id: uuidv4(), ...req.body });
    WriteFile(dbPath, req.baseUrl, data);
    return res.status(200).json(data);
  }
  return res.status(404).json('is not array');
});
router.patch('/:id', (req, res) => {
  const db = ReadFile(dbPath, req.baseUrl);
  const updateData = req.body;
  if (!db) {
    return res.status(404).json('no database find');
  }
  const value = Object.values(db)[0];
  const id = req.params.id;
  // if (Array.isArray(value)) {
  //   if (
  //     !(body instanceof Object) ||
  //     Object.getOwnPropertyNames(body).length === 0 ||
  //     Array.isArray(body)
  //   ) {
  //     return res.status(400).json('body need it');
  //   }
  //   let changeData = value.find((ar) => ar.id == id);
  //   if (!changeData) {
  //     return res.status(404).json('no matching element found');
  //   }
  //   console.log(body, 'body', changeData, 'changeData');

  //   changeData = _.merge(changeData, body);

  //   WriteFile(dbPath, req.baseUrl, data);

  //   return res.status(200).send(changeData);
  // }
  let updatedItem = null;
  if (Array.isArray(value)) {
    const index = value.findIndex((item) => item.id == id);

    if (index !== -1) {
      // Handle array updates properly
      Object.keys(updateData).forEach((key) => {
        if (
          Array.isArray(updateData[key]) &&
          Array.isArray(value[index][key])
        ) {
          const idKey = findIdKey(value[index][key][0]) || 'id';
          // Update existing items in array
          value[index][key] = value[index][key].map((existingItem) => {
            const updatedItem = updateData[key].find(
              (upd: any) => upd[idKey] === existingItem[idKey]
            );

            return updatedItem
              ? { ...existingItem, ...updatedItem }
              : existingItem;
          });

          // Add new items if they don’t exist
          updateData[key].forEach((newItem) => {
            if (
              !value[index][key].find(
                (existingItem: { id: string }) => existingItem.id === newItem.id
              )
            ) {
              value[index][key].push(newItem);
            }
          });
        } else {
          // Deep merge non-array properties
          _.merge(value[index], { [key]: updateData[key] });
        }
      });
      WriteFile(dbPath, req.baseUrl, db);

      return res.status(200).json(db);
    } else return res.status(404).json("item doesn't find");
  } else return res.status(404).json('is not array');
});
router.put('/:id', (req, res) => {
  const data = ReadFile(dbPath, req.baseUrl);
  const body = req.body;
  if (!data) {
    return res.status(404).json('no database find');
  }
  const value = Object.values(data)[0];
  const id = req.params.id;
  if (Array.isArray(value)) {
    if (
      !(body instanceof Object) ||
      Object.getOwnPropertyNames(body).length === 0 ||
      Array.isArray(body)
    ) {
      return res.status(400).json('body need it');
    }
    const changeData = value.map((ar) => (ar.id == id ? body : ar));
    WriteFile(dbPath, req.baseUrl, data);

    return res.status(200).send(changeData);
  }
  return res.status(404).json('is not array');
});
export default router;
