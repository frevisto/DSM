create database bd_aula06;
\c bd_aula06

create domain chk_categoria text check (value='DRAMA' or value='COMEDIA');
create domain chk_status text check (value='DISPONIVEL' or value='ALUGADO');
create table tbl_cliente (codigo_cliente integer PRIMARY KEY, nome text not null, cidade text, endereco text);
create table tbl_titulo (codigo_titulo integer primary key, titulo text not null, descricao text, categoria chk_categoria);
create table tbl_livros (cod_livro integer PRIMARY KEY, codigo_titulo integer REFERENCES tbl_titulo(codigo_titulo), status chk_status DEFAULT 'DISPONIVEL');
create table tbl_emprestimo (numero_emprestimo integer PRIMARY KEY, codigo_cliente integer REFERENCES tbl_cliente(codigo_cliente), codigo_livro integer REFERENCES tbl_livros(cod_livro));

-- Inserir dados na tabela tbl_cliente

INSERT INTO tbl_cliente (codigo_cliente, nome, cidade, endereco)
VALUES
    (1, 'Joao Silva', 'Sao Paulo', 'Rua A, 123'),
    (2, 'Maria Santos', 'Rio de Janeiro', 'Av. B, 456'),
    (3, 'Pedro Almeida', 'Belo Horizonte', 'Rua C, 789'),
    (4, 'Ana Oliveira', 'Salvador', 'Av. D, 1011'),
    (5, 'Carlos Lima', 'Brasília', 'Rua E, 1213');

-- Inserir dados na tabela tbl_titulo

INSERT INTO tbl_titulo (codigo_titulo, titulo, descricao, categoria)
VALUES
    (1, 'Aventuras Urbanas', 'Uma história emocionante', 'DRAMA'),
    (2, 'Mistérios Antigos', 'Enigmas por resolver', 'COMEDIA'),
    (3, 'Amor nas Estrelas', 'Um romance intergaláctico', 'DRAMA'),
    (4, 'Código Enigmatico', 'Segredos ocultos', 'COMEDIA'),
    (5, 'Histórias Perdidas', 'Contos esquecidos', 'DRAMA');

-- Inserir dados na tabela tbl_livros

INSERT INTO tbl_livros (cod_livro, codigo_titulo, status)
VALUES
    (1, 1, 'ALUGADO'),
    (2, 1, 'ALUGADO'),
    (3, 2, 'DISPONIVEL'),
    (4, 3, 'ALUGADO'),
    (5, 4, 'ALUGADO');

-- Inserir dados na tabela tbl_emprestimo

INSERT INTO tbl_emprestimo (numero_emprestimo, codigo_cliente, codigo_livro)
VALUES
    (1, 1, 2),
    (2, 2, 4),
    (3, 3, 1),
    (4, 4, 5);



--1 Liste os títulos e seus status, incluindo os que não têm status definido. (retorna 6 linhas)

SELECT a.titulo, b.status FROM tbl_titulo AS a LEFT JOIN tbl_livros AS b ON a.codigo_titulo = b.codigo_titulo ;

--2 Liste os títulos e suas descrições dos livros alugados (retorna 4 linhas)

SELECT a.titulo, a.descricao 
	FROM tbl_titulo AS a 
	INNER JOIN tbl_livros AS b 
		ON a.codigo_titulo = b.codigo_titulo 
			AND b.status = 'ALUGADO';

--3 Liste os nomes dos clientes que não têm livros alugados (retorna 1 linha)

--Professor, uma dúvida, o AND e o WHERE, como funcionam neste exemplo:
-- SELECT *
-- 	FROM tbl_cliente as a
-- 	LEFT JOIN tbl_emprestimo as b
-- ON a.codigo_cliente = b.codigo_cliente
-- 	AND b.numero_emprestimo IS NULL;
--                                     -- Retorno de todos os clientes cadastrados.
-- RESPOSTA À DÚVIDA: Todo FILTRO começa com WHERE e se complementa com AND.
-- JOIN não é considerado filtro então não recebe o AND de forma previsível.

SELECT a.nome
	FROM tbl_cliente as a
	LEFT JOIN tbl_emprestimo as b
ON a.codigo_cliente = b.codigo_cliente
	WHERE b.numero_emprestimo IS NULL;

--4 Liste os títulos e suas categorias dos livros disponiveis (retorna 1 linha).
select a.titulo, a.descricao
from tbl_titulo as a
join tbl_livros as b
on a.codigo_titulo = b.codigo_titulo
where b.status = 'DISPONIVEL';


--5 Liste os nomes dos clientes e os títulos dos livros que eles têm alugados (retorna 5 linhas).
SELECT cl.nome, ti.titulo
    FROM tbl_cliente AS cl
        INNER JOIN tbl_emprestimo AS e 
            ON cl.codigo_cliente = e.codigo_cliente
        INNER JOIN tbl_livros AS li
            ON e.codigo_livro = li.cod_livro
        INNER JOIN tbl_titulo AS ti
            ON li.codigo_titulo = ti.codigo_titulo
                WHERE li.status = 'ALUGADO';

--6 Retorne o nome, titulo do livro e o status do esmprestimo do livro alugado pela Ana Oliveira (retorna 1 linha)
SELECT cl.nome, ti.titulo, li.status
    FROM tbl_cliente AS cl
        INNER JOIN tbl_emprestimo AS e 
            ON cl.codigo_cliente = e.codigo_cliente
        INNER JOIN tbl_livros AS li
            ON e.codigo_livro = li.cod_livro
        INNER JOIN tbl_titulo AS ti
            ON li.codigo_titulo = ti.codigo_titulo
        WHERE cl.codigo_cliente = 4;
