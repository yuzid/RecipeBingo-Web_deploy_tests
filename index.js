import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
const corsOption = {
  origin: ["http://localhost:5173"],
};
import keyHandler from './api/key.js';
import resetHandler from './api/reset.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors(corsOption));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/key', keyHandler);     
app.get('/api/reset', resetHandler); 

app.get("/test",(req,res) => {
    res.json({
      "users" : ["userone","usertwo","usertri","userfor"] 
    })
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
