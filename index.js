// import express from 'express'; // ES2015 Modules 
const express = require('express');  //CommonJS Modules  

const server = express();

server.get('/', (req, res) => {
	res.json({ api: "Up and running!" });
});

server.get('/api/lessons', function(req, res) {
  // return an array of lessons (id, name)
  const lessons = [
    {
      id: 1, 
      name: 'Introduction to HTTP APIs with Node and Express'
    }
  ];
  res.json(lessons); 
});

server.listen(8000, () => console.log("\n== API is up ==\n")); 

