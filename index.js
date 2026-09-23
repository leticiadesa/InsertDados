import express from 'express'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'
import { Limite } from './DAO/Tabela_limite/Buscar_Limite.js'
import { Endereco } from './DAO/Tabela_endereco/buscar_endereco.js'
import { Produto } from './DAO/Tabela_Produto/buscar_Produto.js'
import { Pedido } from './DAO/Tabela_Pedido/Buscar_Pedido.js'
import { Pedido_Produto } from './DAO/Tabela_Pedido_Produto/Buscar_PP.js'
import { inserir_Cliente } from './DAO/cliente/inserir_cliente.js'

const app = express()

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de
    Estacionamento Rodando perfeitamente!' })
})




app.get('/Cliente', async (req, res) => {

    let cliente = await buscarClientes();
    res.json(cliente); 
})

app.post('/inserir_Cliente', async (req, res) => {
    const { codigo, nome, sobreNome, cpf,              
    telefone, id_limite, id_endereco } =        
    req.body;
    const infos = [codigo, nome, sobreNome,
    cpf, telefone, id_limite, id_endereco]
    let results = await
    inserir_Cliente(infos);
    res.json(results);
})

app.post('/Limite', async (req, res) => {
    let { id_limite, nome } = req.body;
    let infos = [id_limite, nome]
    let results = await Limite(infos);
    res.json(results);
})

app.post('/Endereco', async (req, res) => {
    let { id_endereco, logradouro, numero,
    cep, cidade } = req.body;
    let infos = [id_endereco, logradouro,
    numero, cep, cidade]
    let results = await Endereco(infos);
    res.json(results);
})

app.post('/Produto', async (req, res) => {
    let { codigo, nome, descricao, preco } =
    req.body;
    let infos = [codigo, nome, descricao,
    preco]
    let results = await Produto(infos);
    res.json(results);
})

app.post('/Pedido', async (req, res) => {
    let { numero, data_elaboracao,
    id_cliente } = req.body;
    let infos = [numero, data_elaboracao,
    id_cliente]
    let results = await Pedido(infos);
    res.json(results);
})

app.post('/Pedido_Produto', async (req, res) => {
    let { id_pedido, id_produto } = req.body;
    let infos = [id_pedido, id_produto]
    let results = await.
    Pedido_Produto(infos);
    res.json(results);
})


// Inicialização do Servidor
app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000')
})