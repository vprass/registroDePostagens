const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
// Configuração
    //Templete Engine
    app.engine('handlebars', handlebars.engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views'); // configura a pasta padrao para as views
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    // Instanciando Base de Dados
    const database = require('./models/db')

// Rotas
app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts });
    });
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send("erro: " + erro);
    });
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send("postagem não existe");
    });
});

// Inicia o Servidor
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});