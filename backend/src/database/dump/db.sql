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



