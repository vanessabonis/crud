const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Fullstack Master', 'Games Develop', 'Streamer'];

//get - retorna um curso

server.get('/cursos/:index', (req,res) => {
    const {index} = req.params;
    return res.json(cursos[index]);
});

//retorna tudo
server.get('/cursos', (req,res) => {
    return res.json(cursos);
});

//criar um novo curso (post)
server.post('/cursos', (req,res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
    
});

//atualizar curso (put)
server.put('/cursos/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;

    return res.json(cursos);
});

//delete
server.delete('/cursos/:index', (req,res) => {
    const {index} = req.params;
    cursos.splice(index, 1);
    
    return res.json({message: "O curso foi deletado"});
});



server.listen(3000)