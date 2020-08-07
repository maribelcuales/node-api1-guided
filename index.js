// import express from 'express'; // ES2015 Modules 
const express = require('express');  //CommonJS Modules  

const server = express();

server.use(express.json());  // teaches express how to read JSON from the body 

let lessons = [
  {
    id: 1, 
    name: 'Introduction to HTTP APIs with Node and Express'
  }
];

server.get('/', (req, res) => {
	res.json({ api: "Up and running!" });
});

server.get('/api/lessons', function(req, res) {
  // return an array of lessons (id, name)
  
  res.json(lessons); 
});

server.post('/api/lessons', function(req, res) {
  const lessonInformation = req.body;

  lessons.push(lessonInformation);
  
  res.status(201).json(lessonInformation); 
})

server.listen(8000, () => console.log("\n== API is up ==\n")); 

