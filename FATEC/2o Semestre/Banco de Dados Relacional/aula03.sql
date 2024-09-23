-- criar banco de dados bd_aula03

CREATE DATABASE bd_aula03
    WITH
    OWNER = postgres
    ENCODING = 'UTF8';


-- criar tabelas do MER


CREATE TABLE public.tbl_cliente (
    "codigo_cliente" SERIAL PRIMARY KEY,
    "Nome" TEXT NOT NULL,
    "Cidade" TEXT,
    "Endereco" TEXT NOT NULL
);

CREATE TABLE public.tbl_titulo(
    "codigo_titulo" INTEGER PRIMARY KEY,
    "descricao" TEXT UNIQUE,
    "categoria" TEXT    
);

CREATE TABLE public.tbl_livros(
    "cod_livro" SERIAL PRIMARY KEY,
    "codigo_titulo" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);

CREATE TABLE public.tbl_emprestimo(
    "numero_emprestimo" SERIAL PRIMARY KEY,
    "codigo_cliente" INTEGER NOT NULL,
    "codigo_livro" INTEGER NOT NULL
);


-- criar domains

CREATE DOMAIN chk_status AS TEXT CHECK (VALUE IN ('DISPONÍVEL', 'ALUGADO'));
CREATE DOMAIN categoria_domain AS TEXT CHECK (VALUE IN ('DRAMA', 'COMEDIA'));

-- adicionar domain a tabela

ALTER TABLE public.tbl_livros ALTER COLUMN "status" SET DATA TYPE chk_status; 
ALTER TABLE public.tbl_titulo ALTER COLUMN "categoria" SET DATA TYPE categoria_domain;

-- adicionar chaves estrangeiras

ALTER TABLE public.tbl_livros
ADD CONSTRAINT fk_livros_titulo
FOREIGN KEY ("codigo_titulo") REFERENCES public.tbl_titulo("codigo_titulo")
ON DELETE CASCADE;

ALTER TABLE public.tbl_emprestimo
ADD CONSTRAINT fk_emprestimo_cliente
FOREIGN KEY ("codigo_cliente") REFERENCES public.tbl_cliente("codigo_cliente")
ON DELETE CASCADE;

ALTER TABLE public.tbl_emprestimo
ADD CONSTRAINT fk_emprestimo_livro
FOREIGN KEY ("codigo_livro") REFERENCES public.tbl_livros("cod_livro")
ON DELETE CASCADE;

-- DROP TABLES

DROP TABLE IF EXISTS public.tbl_emprestimo CASCADE;
DROP TABLE IF EXISTS public.tbl_livros CASCADE;
DROP TABLE IF EXISTS public.tbl_titulo CASCADE;
DROP TABLE IF EXISTS public.tbl_cliente CASCADE;