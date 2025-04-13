import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import keyHandler from './api/key.js';
import resetHandler from './api/reset.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/key', keyHandler);     
app.get('/api/reset', resetHandler); 


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
