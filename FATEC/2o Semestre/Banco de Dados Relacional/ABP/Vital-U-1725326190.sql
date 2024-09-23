CREATE TABLE IF NOT EXISTS "tbl_User" (
	"id" serial NOT NULL UNIQUE,
	"Nome" varchar(60) NOT NULL,
	"E-mail" varchar(60) NOT NULL,
	"data_nasc" date NOT NULL,
	"passwd" varchar(30) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "tbl_User_Dados" (
	"altura" numeric(3) NOT NULL,
	"genero" TEXT CHECK(genero IN ('Masculino','Feminino')) NOT NULL,
	"obj_peso" TEXT CHECK(obj_peso IN ('Ganho de Peso','Perda de Peso','Manter Peso')) NOT NULL,
	"id" INTEGER NOT NULL,
	"peso" numeric(5,2) NOT NULL
);


ALTER TABLE "tbl_User_Dados" ADD CONSTRAINT "tbl_User_Dados_fk3" FOREIGN KEY ("id") REFERENCES "tbl_User"("id");