// import express from 'express'; // ES2015 Modules 
const express = require('express');  //CommonJS Modules  

const server = express();

server.get('/', (req, res) => {
	res.json({ api: "Up and running!" });
});

server.listen(8000, () => console.log("\n== API is up ==\n")); 

