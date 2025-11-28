SHOW CREATE TABLE CHAUFFEURS;
-- je vais changer covoiturages car j'ai créer fk id_Utilisateur alors que ca doit être en snake case
ALTER TABLE chauffeurs
change column id_Utilisateur utilisateur_id int not null;

ALTER TABLE chauffeurs
Add foreign key (utilisateur_id) references utilisateurs(id_utilisateur);


use ecoride;

insert into utilisateurs values (120,'Moussa','Diallo','MoussaD','MoussaD@outlook.com','fifi2brk2tb_','passager',1,747);
insert into passagers values (51,'Assa','Sala',2,119);

insert into passagers values (52,'Moussa','Diallo',3,120);


CREATE DATABASE UUID_TEST;
USE UUID_TEST;

create table vehicules (
    id char (36)  PRIMARY KEY,
    plaque_immatriculation varchar (10) not null,
    marque varchar (60) not null
);

CREATE TABLE conducteurs (
    id char (36) PRIMARY KEY not null,
    nom varchar (20) not null,
    prenom varchar (20) not null
);



CREATE TABLE voyages (
    id char (36) PRIMARY KEY not null,
    date_voyage datetime not null,
    conducteur_id UUID not null,
    foreign key (conducteur_id) references conducteurs (id),
    vehicule_id UUID not null,
    foreign key (vehicule_id) references vehicules (id)
)


