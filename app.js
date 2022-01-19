const express = require("express");
const app = express();

const connection = require ("./db-config");
const Joi = require('joi');

const port = 8000;

app.use(express.json());

// GET ----------------------------

app.get("/coucou", (req, res) => {res.status(200).send("hibou")});


// POST ---------------------------


// PUT ---------------------------



// LISTEN -------------------------

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });