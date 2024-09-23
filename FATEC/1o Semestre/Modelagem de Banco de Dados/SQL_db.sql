CREATE TABLE Cliente (
  CPF CHAR(11) NOT NULL ,
  Nome CHAR(100) NULL,
  PRIMARY KEY(CPF)
);

CREATE TABLE E-mail (
  idE-mail INTEGER UNSIGNED NOT NULL ,
  Cliente_CPF CHAR(11) NOT NULL,
  Email  VARCHAR NULL,
  PRIMARY KEY(idE-mail)
);

CREATE TABLE Evento (
  Data_2 DATE NOT NULL ,
  Cliente_CPF CHAR(11) NOT NULL,
  Iniicio DATE NULL,
  Fim DATE NULL,
  PRIMARY KEY(Data_2)
);

CREATE TABLE Evento_has_Pessoa (
  Evento_Data_2 DATE NOT NULL,
  Pessoa_CPF CHAR(11) NOT NULL,
  PRIMARY KEY(Evento_Data_2, Pessoa_CPF)
);

CREATE TABLE Pessoa (
  CPF CHAR(11) NOT NULL ,
  Nome VARCHAR(255) NULL,
  Telefone CHAR(14) NULL,
  Emaill CHAR(100) NULL
);

CREATE TABLE Telefone (
  idTelefone INTEGER UNSIGNED NOT NULL ,
  Cliente_CPF CHAR(11) NOT NULL,
  Numero CHAR NULL,
  PRIMARY KEY(idTelefone)
);


