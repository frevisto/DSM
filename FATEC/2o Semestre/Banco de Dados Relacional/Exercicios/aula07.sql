create database bd_aula07;
\c bd_aula07
create table tbl_fornecedor (cod_fornecedor serial primary key, nome text not null, status integer, cidade text);
create table tbl_peca (cod_peca serial primary key, nome text not null, cor text, preco numeric, cidade text);
create table tbl_estoque (cod_compra serial primary key, 
						 cod_fornecedor integer references tbl_fornecedor(cod_fornecedor),
						cod_peca integer references tbl_peca(cod_peca),
						quantidade integer);
						
insert into tbl_fornecedor(nome,status,cidade) 
values ('A',30,'LONDRES'),('B',20,'PARIS'),('C',10,'PARIS'),('D',10,'LONDRES');

INSERT INTO tbl_peca(nome, cor, preco, cidade) values
('PLACA','AZUL',5,'LONDRES'),('MESA','VERMELHA',10,'PARIS'),('CADERNO','PRETA',14,'ROMA'),
('TESOURA','VERMELHA',12,'LONDRES');

INSERT INTO tbl_estoque(cod_fornecedor, cod_peca, quantidade) values
(1,1,30),(2,1,30),(3,2,10),(3,3,50);

--1 Listar o nome dos fornecedores(maiusculo) e das peças(minusculo) que se situam na mesma cidade, ordenado pelo nome

SELECT UPPER(f.nome) AS fornecedor, LOWER(p.nome) AS peça
FROM tbl_fornecedor f
JOIN tbl_peca p ON f.cidade = p.cidade
ORDER BY fornecedor, peça; 

--2 listar as cidades onde existem fornecedores (sem valores duplicados)

SELECT f.cidade FROM tbl.fornecedor f GROUP BY cidade;

--3 Listar o nome e a cor das peças do fornecedor com código 3, ordenado pelo nome da peça

SELECT p.nome, p.cor FROM tbl_peca p JOIN tbl_estoque e ON e.cod_peca = p.cod_peca WHERE e.cod_fornecedor = '3' ORDER BY p.nome;

--4 Listar o nome e a cidade dos fornecedores com mais de 10 peças.Contar só as peças de código 1. 

SELECT f.nome, f.cidade FROM tbl_fornecedor f JOIN tbl.estoque e ON e.cod_fornecedor = f.cod_fornecedor WHERE e.quantidade > 10 AND e.cod_peca = 1;  

--5 Listar a quantidade total de peças com código 1, fornecidas pelos fornecedores. Múltiplos fornecedores para múltiplas peças.

SELECT COUNT(e.cod_peca), f.nome FROM tbl_estoque e JOIN tbl_fornecedor f ON e.cod_fornecedor = f.cod_fornecedor WHERE e.cod_peca = 1 GROUP BY f.nome;

--6 Listar a média dos preços das peças fornecidas pelo fornecedor com código 3.

select avg(tp.preco) from tbl_peca tp join tbl_estoque te on te.cod_peca = te.cod_peca where te.cod_fornecedor =3;

--7 lista o valor da pecas mais cara e a mais barata.

select max(tp.preco), min(tp.preco) from tbl_peca tp ;

--8 listar a quantidade de peças cadastradas

select count(tp.cod_peca) as quantidade from tbl_peca tp ;

--9 listar a quantidade de cidades diferentes onde existem peças cadastradas

select distinct tp.cidade as cidades from tbl_peca tp ;

--10 listar a media dos precos de todas as peças, com somente 1 digito após a virgula.

select round(avg(tp.preco),1) as media from tbl_peca tp ;
