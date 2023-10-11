// Usuário
export const INSERT_USUARIO = 'insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning * ;'


// Conta
export const INSERT_CONTA = 'INSERT INTO conta (usuario, descricao, tipo_conta, saldo, ativo) VALUES($1, $2, $3, $4, true) returning * ;'



// ALL
export const SELECT_ALL = `SELECT json_agg(row_to_json(data)) as dados 
                            FROM ( SELECT * FROM $1 ) data;`



