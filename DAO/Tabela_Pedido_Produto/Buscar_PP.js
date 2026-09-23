import {conexao} from '../conexao.js'

async function Pedido_Produto (infos){
const data = [infos]
const sql = `INSERT INTO Pedido_Produto (id_pedido,id_produto) VALUES ?`
const conn = await conexao()

try {
// Executar a consulta
const [results] = await conn.query(sql,[data]);

await conn.end()
return results
} catch (err) {
return err.message
}
}

export {Pedido_Produto}