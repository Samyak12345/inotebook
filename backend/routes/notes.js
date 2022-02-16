const express = require('express');
const notes = express.Router();

notes.get('/', (req,res) =>{
    res.json([])
})

module.exports = notes