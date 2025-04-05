import express from 'express';
import env from 'dotenv';
import cron from 'node-cron';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleKeyRoute, resetQuota, pass } from './api.js';

const app = express();
const PORT = 3000;
env.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Attach /key route
app.get('/key', handleKeyRoute);

// Schedule daily quota reset
cron.schedule('0 0 * * *', () => {
  console.log('Running daily task at midnight');
  resetQuota();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
