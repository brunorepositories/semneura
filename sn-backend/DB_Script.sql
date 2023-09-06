create table pais(
  id serial primary key,
  pais varchar(200) not null,
  DDI char(3) not null,
  ativo boolean not null ,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

insert into pais(pais, DDI, ativo) values ('Brasil', '+55', true) returning *;
insert into pais(pais, DDI, ativo) values ('Argentina', '+54', true) returning *;

create table estado (
  id serial primary key,
  pais_id int not null, 
  estado varchar(200) not null,
  UF char(3) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp,
  
  FOREIGN KEY (pais_id) REFERENCES pais (id)
);

insert into estado(estado, UF, ativo, pais_id) values ('Paraná', 'PR', true, 1) returning *;
insert into estado(estado, UF, ativo, pais_id) values ('São Paulo', 'SP', true, 1) returning *;
insert into estado(estado, UF, ativo, pais_id) values ('Rio de Janeiro', 'RJ', true, 1) returning *;
insert into estado(estado, UF, ativo, pais_id) values ('Santa Catarina', 'SC', true, 1) returning *;

create table cidade (
  id serial primary key,
  estado_id int not null, 
  cidade varchar(200) not null,
  DDD char(3) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp,
  
  FOREIGN KEY (estado_id) REFERENCES estado (id)
);


insert into cidade(cidade, DDD, ativo, estado_id) values ('Foz do Iguaçu', '045', true, 1) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('Santa Terezinha de Itaipu', '045', true, 1) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('Cascavel', '045', true, 1) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('São Miguél do Iguaçu', '045', true, 1) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('Londrina', '045', true, 1) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('São Paulo', '011', true, 2) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('Rio de Janeiro', '010', true, 3) returning *;
insert into cidade(cidade, DDD, ativo, estado_id) values ('Florianópolis', '032', true, 4) returning *;






































CREATE TYPE tipo_conta AS ENUM ('C', 'B', 'P');
CREATE TYPE tipo_pessoa AS ENUM ('PF', 'PJ');
CREATE TYPE tipo_lancamento AS ENUM ('R', 'D');


create table usuario(
  id serial primary key,
  login varchar(50) unique not null,
  senha varchar(15) not null,
  nome varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table conta(
  id serial primary key,
  usuario integer references usuario(id) not null,
  descricao varchar(50) not null,
  saldo numeric not null,
  tipo_conta tipo_conta not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table pf_pj(
  id serial primary key,
  usuario integer references usuario(id) not null,
  nome varchar(50) not null,
  documento integer,
  tipo tipo_pessoa not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table categoria(
  id serial primary key,
  usuario integer references usuario(id) not null,
  descricao varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table sub_categoria(
  id serial primary key,
  categoria integer references categoria(id) not null,
  descricao varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table transferencia(
  id serial primary key,
  usuario integer references usuario(id) not null,
  conta_origem integer references conta(id) not null,
  conta_destino integer references conta(id) not null,
  valor numeric not null,
  dt_transferencia timestamp not null default current_timestamp
);

create table lancamento(
  id serial primary key,
  usuario integer references usuario(id) not null,
  categoria integer references categoria(id) not null,
  conta integer references conta(id) not null,
  pf_pj integer references pf_pj(id),
  referencia integer references lancamento(id),
  fixo boolean not null,
  pago boolean not null,
  valor numeric,
  dt_lancamento timestamp not null default current_timestamp,
  numero_parcela integer not null,
  tipo tipo_lancamento not null,
  descricao varchar(50) not null,
  ativo boolean,
  dt_atualizacao timestamp not null default current_timestamp
);


// Usuário
export const INSERT_USUARIO = 'insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning * ;'
export const SELECT_USER = 'select * from usuario where login = $1 ;'

// Conta
export const INSERT_CONTA = 'INSERT INTO conta (usuario, descricao, tipo_conta, saldo, ativo) VALUES($1, $2, $3, $4, true) returning * ;'