\c bd_aula08
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



--1 Listar o nome e a cidade dos fornecedores com mais de 10 peças.Contar só as peças de código 1.

select tf.nome, tf.cidade from tbl_fornecedor tf join tbl_estoque te on te.cod_fornecedor = tf.cod_fornecedor where te.quantidade > 10 and te.cod_peca = 1;

--2  Encontre o nome das peças com preço superior a 10 que estão disponíveis em estoque:

select tp.nome from tbl_peca tp join tbl_estoque te on te.cod_peca = tp.cod_peca where tp.preco > 10 ;

--3 Selecione o nome das peças que não estão em estoque:

select tp.nome from tbl_peca tp left join tbl_estoque te on te.cod_peca = tp.cod_peca where te.cod_peca is null;

--4 Encontre o nome das peças que estão em estoque com uma quantidade maior que 20:

select tp.nome from tbl_peca tp join tbl_estoque te on te.cod_peca = tp.cod_peca where te.quantidade > 20 ;

--5 Listar todas as pecas exceto a PLACA, ordenado por nome

select tp.nome from tbl_peca tp except 'placa';

--6 Listar o nome e a cor das peças do fornecedor C, ordenado pelo nome da peça

select tp.nome from tbl_peca tp except (select tp.nome from tbl_peca tp where tp.nome = 'PLACA');

--7 Listar o nome e a cor de todas as pecas de Londres

select tp.nome , tp.cor from tbl_peca tp where cidade ilike 'Londres';

--8 Encontre o nome das peças que estão disponíveis em estoque em Londres e não estão disponíveis em estoque em Paris:

select tp.nome from tbl_peca tp join tbl_estoque te on te.cod_peca = tp.cod_peca except (select tp.nome from tbl_peca tp where tp.cidade ilike 'Paris'); 

--9 Quais os codigos das peças que possuem maior estoque do que a peça de codigo 2?

select tp.cod_peca from tbl_peca tp join tbl_estoque te on te.cod_peca = tp.cod_peca where te.quantidade > (select te.quantidade from tbl_estoque te where te.cod_peca = 2);
