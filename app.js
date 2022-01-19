const express = require("express");
const app = express();
import cors from 'cors'; 
const connection = require ("./db-config");
import setupRoutes from './controllers';
import 'dotenv/config';

const port = 8000;

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

// GET ----------------------------

app.get("/coucou", (req, res) => {res.status(200).send("hibou")});


// POST ---------------------------


// PUT ---------------------------



// LISTEN -------------------------

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });