const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pagina1.html', (req, res) => {
    res.sendFile(__dirname + '/pagina1.html');
});
app.get('/pagina2.html', (req, res) => {
    res.sendFile(__dirname + '/pagina2.html');
});
app.get('/pagina3.html', (req, res) => {
    res.sendFile(__dirname + '/pagina3.html');
});

app.post('/', (req, res) => {
    const { nome, senha } = req.body;

    if (senha === "senha123") {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
});

app.listen(PORT, () => {
    console.log('Servidor iniciado');
});


