CREATE DATABASE BCO_PROJETO;

USE BCO_PROJETO;

CREATE TABLE TB_USUARIO (
ID_USU int(8) unsigned NOT NULL auto_increment,
NOME_USU varchar(50),
SENHA_USU varchar(15),
EMAIL_USU varchar(100),
primary key (ID_USU)
);

CREATE TABLE TB_ATIVIDADE (
ID_ATI int(8) unsigned NOT NULL auto_increment,
NOME_ATI varchar(50),
MATERIA_ATI varchar (30),
DESC_ATI varchar (150),
DATA_ATI date,
primary key (ID_ATI)
);

DELIMITER $$

CREATE PROCEDURE sp_Inserir (in nome varchar(50), in senha varchar(15), in email varchar(100))
begin

insert into tb_usuario (nome_usu, senha_usu, email_usu) values (nome, senha, email);
end $$

CREATE PROCEDURE sp_AddAtividade (in nome varchar(50), in materia varchar(30), in descricao varchar(150), in data_ati date)
begin

insert into tb_atividade (nome_ati, materia_ati, desc_ati, data_ati) values (nome, materia, descricao, data_ati);
end $$

select * from TB_USUARIO;
select * from TB_ATIVIDADE;