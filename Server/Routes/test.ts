import * as express from 'express';
const router = express.Router();

export const testRoute = router
.get('/', (req, res) => {
  res.send('test page!');
});