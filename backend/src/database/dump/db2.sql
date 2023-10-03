-- Definir a configuração SQL
SET SESSION SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';
SET TIME ZONE '+00:00';

-- Criar o banco de dados `laravel`
CREATE DATABASE laravel;

-- Usar o banco de dados `laravel`
\c laravel;

-- Criar a tabela `cidades`
CREATE TABLE cidades (
  id bigserial PRIMARY KEY,
  cidade varchar(255) NOT NULL,
  ddd varchar(255),
  estado_id bigint NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `clientes`
CREATE TABLE clientes (
  id bigserial PRIMARY KEY,
  cliente varchar(255) NOT NULL,
  dt_nascimento date,
  cep varchar(255),
  logradouro varchar(255),
  numero varchar(255),
  bairro varchar(255),
  complemento varchar(255),
  whatsapp varchar(255),
  telefone varchar(255),
  email varchar(255),
  cpf varchar(11),
  rg varchar(9),
  valor_credito double precision,
  observacoes text,
  cidade_id bigint NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `compras`
CREATE TABLE compras (
  num_nota bigserial PRIMARY KEY,
  serie varchar(255) NOT NULL,
  modelo varchar(255) NOT NULL,
  dt_emissao timestamp,
  dt_chegada timestamp,
  valor_total_produtos double precision,
  frete double precision,
  seguro double precision,
  desconto double precision,
  despesas double precision,
  valor_total_nota double precision,
  condicoes_pagamento_id bigint NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `condicoes_pagamentos`
CREATE TABLE condicoes_pagamentos (
  id bigserial PRIMARY KEY,
  condicao_pagamento varchar(255) NOT NULL,
  juros double precision,
  multa double precision,
  prazo int,
  porcentagem double precision,
  qnt_parcelas double precision,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `contas_recebers`
CREATE TABLE contas_recebers (
  num_nota_venda bigserial PRIMARY KEY,
  serie_venda varchar(255),
  modelo_venda varchar(255),
  status smallint,
  forma_pagamento_id bigint,
  cliente_id bigint,
  valor double precision,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `estados`
CREATE TABLE estados (
  id bigserial PRIMARY KEY,
  estado varchar(255) NOT NULL,
  uf varchar(255),
  pais_id bigint NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `failed_jobs`
CREATE TABLE failed_jobs (
  id bigserial PRIMARY KEY,
  uuid varchar(255) NOT NULL,
  connection text NOT NULL,
  queue text NOT NULL,
  payload text NOT NULL,
  exception text NOT NULL,
  failed_at timestamp DEFAULT current_timestamp
);

-- Criar a tabela `forma_pagamentos`
CREATE TABLE forma_pagamentos (
  id bigserial PRIMARY KEY,
  forma_pagamento varchar(255) NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `fornecedores`
CREATE TABLE fornecedores (
  id bigserial PRIMARY KEY,
  forncedor varchar(255) NOT NULL,
  tipo_pessoa varchar(255) DEFAULT 'nu',
  CEP varchar(255),
  logradouro varchar(255),
  numero int,
  bairro varchar(255),
  complemento varchar(255),
  cidade_id bigint,
  whatsapp varchar(255),
  telefone varchar(255),
  email varchar(255),
  site varchar(255),
  contato varchar(255),
  CNPJ_CPF varchar(14),
  IE_RG varchar(255),
  observacao text,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `migrations`
CREATE TABLE migrations (
  id serial PRIMARY KEY,
  migration varchar(255) NOT NULL,
  batch int NOT NULL
);

-- Inserir dados na tabela `migrations`
INSERT INTO migrations (migration, batch) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_reset_tokens_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2019_08_19_000000_create_failed_jobs_table', 1),
('2019_12_14_000001_create_personal_access_tokens_table', 1),
('2023_09_27_000001_create_cidades_table', 1),
('2023_09_27_000002_create_clientes_table', 1),
('2023_09_27_000003_create_compras_table', 1),
('2023_09_27_000004_create_condicoes_pagamentos_table', 1),
('2023_09_27_000005_create_contas_recebers_table', 1),
('2023_09_27_000006_create_estados_table', 1),
('2023_09_27_000007_create_forma_pagamentos_table', 1),
('2023_09_27_000008_create_fornecedores_table', 1),
('2023_09_27_000009_create_pais_table', 1),
('2023_09_27_000010_create_parcelas_table', 1),
('2023_09_27_000011_create_produtos_table', 1),
('2023_09_27_000012_create_produto_compras_table', 1),
('2023_09_27_000013_create_produto_vendas_table', 1),
('2023_09_27_000014_create_unidade_medidas_table', 1),
('2023_09_27_000015_create_vendas_table', 1),
('2023_09_27_009001_add_foreigns_to_cidades_table', 1),
('2023_09_27_009002_add_foreigns_to_clientes_table', 1),
('2023_09_27_009003_add_foreigns_to_compras_table', 1),
('2023_09_27_009004_add_foreigns_to_contas_recebers_table', 1),
('2023_09_27_009005_add_foreigns_to_estados_table', 1),
('2023_09_27_009006_add_foreigns_to_fornecedores_table', 1),
('2023_09_27_009007_add_foreigns_to_parcelas_table', 1),
('2023_09_27_009008_add_foreigns_to_produtos_table', 1),
('2023_09_27_009009_add_foreigns_to_produto_compras_table', 1),
('2023_09_27_009010_add_foreigns_to_produto_vendas_table', 1),
('2023_09_27_009011_add_foreigns_to_vendas_table', 1);

-- Criar a tabela `pais`
CREATE TABLE pais (
  id bigserial PRIMARY KEY,
  pais varchar(255) NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `parcelas`
CREATE TABLE parcelas (
  num_parcela bigserial PRIMARY KEY,
  data_vencimento date,
  data_pagamento date,
  valor_parcela double precision,
  juros double precision,
  desconto double precision,
  multa double precision,
  num_nota bigserial,
  status smallint
);

-- Criar a tabela `produtos`
CREATE TABLE produtos (
  id bigserial PRIMARY KEY,
  descricao varchar(255) NOT NULL,
  marca varchar(255),
  referencia varchar(255),
  valor double precision,
  qnt_estoque double precision,
  unidade_medida_id bigint NOT NULL,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `produto_compras`
CREATE TABLE produto_compras (
  id bigserial PRIMARY KEY,
  produto_id bigint NOT NULL,
  compra_id bigint NOT NULL,
  qnt_comprada double precision,
  valor_unitario double precision,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `produto_vendas`
CREATE TABLE produto_vendas (
  id bigserial PRIMARY KEY,
  produto_id bigint NOT NULL,
  venda_id bigint NOT NULL,
  qnt_vendida double precision,
  valor_unitario double precision,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `unidade_medidas`
CREATE TABLE unidade_medidas (
  id bigserial PRIMARY KEY,
  unidade varchar(255) NOT NULL,
  sigla varchar(255),
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar a tabela `vendas`
CREATE TABLE vendas (
  num_nota_venda bigserial PRIMARY KEY,
  serie_venda varchar(255),
  modelo_venda varchar(255),
  status smallint,
  forma_pagamento_id bigint,
  cliente_id bigint,
  valor double precision,
  created_at timestamp NULL,
  updated_at timestamp NULL
);

-- Criar as chaves estrangeiras nas tabelas
ALTER TABLE cidades ADD CONSTRAINT cidades_estado_id_foreign FOREIGN KEY (estado_id) REFERENCES estados (id);
ALTER TABLE clientes ADD CONSTRAINT clientes_cidade_id_foreign FOREIGN KEY (cidade_id) REFERENCES cidades (id);
ALTER TABLE compras ADD CONSTRAINT compras_condicoes_pagamento_id_foreign FOREIGN KEY (condicoes_pagamento_id) REFERENCES condicoes_pagamentos (id);
ALTER TABLE contas_recebers ADD CONSTRAINT contas_recebers_forma_pagamento_id_foreign FOREIGN KEY (forma_pagamento_id) REFERENCES forma_pagamentos (id);
ALTER TABLE contas_recebers ADD CONSTRAINT contas_recebers_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES clientes (id);
ALTER TABLE estados ADD CONSTRAINT estados_pais_id_foreign FOREIGN KEY (pais_id) REFERENCES pais (id);
ALTER TABLE fornecedores ADD CONSTRAINT fornecedores_cidade_id_foreign FOREIGN KEY (cidade_id) REFERENCES cidades (id);
ALTER TABLE parcelas ADD CONSTRAINT parcelas_num_nota_foreign FOREIGN KEY (num_nota) REFERENCES contas_recebers (num_nota_venda);
ALTER TABLE produtos ADD CONSTRAINT produtos_unidade_medida_id_foreign FOREIGN KEY (unidade_medida_id) REFERENCES unidade_medidas (id);
ALTER TABLE produto_compras ADD CONSTRAINT produto_compras_produto_id_foreign FOREIGN KEY (produto_id) REFERENCES produtos (id);
ALTER TABLE produto_compras ADD CONSTRAINT produto_compras_compra_id_foreign FOREIGN KEY (compra_id) REFERENCES compras (num_nota);
ALTER TABLE produto_vendas ADD CONSTRAINT produto_vendas_produto_id_foreign FOREIGN KEY (produto_id) REFERENCES produtos (id);
ALTER TABLE produto_vendas ADD CONSTRAINT produto_vendas_venda_id_foreign FOREIGN KEY (venda_id) REFERENCES vendas (num_nota_venda);
ALTER TABLE vendas ADD CONSTRAINT vendas_forma_pagamento_id_foreign FOREIGN KEY (forma_pagamento_id) REFERENCES forma_pagamentos (id);
ALTER TABLE vendas ADD CONSTRAINT vendas_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES clientes (id);

-- Fim do script SQL
