CREATE SCHEMA IF NOT EXISTS proy1bases1;

CREATE TABLE IF NOT EXISTS proy1bases1.candidato
(
    id_candidato INTEGER NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    nacimiento DATE NOT NULL,
    id_partido INTEGER NOT NULL,
    id_cargo INTEGER NOT NULL,
    PRIMARY KEY (id_candidato)
);

CREATE TABLE IF NOT EXISTS proy1bases1.cargo
(
    id_cargo INTEGER NOT NULL,
    cargo VARCHAR (100) NOT NULL,
    PRIMARY KEY (id_cargo)
);

CREATE TABLE IF NOT EXISTS proy1bases1.ciudadano
(
    dpi VARCHAR (13) NOT NULL,
    nombre VARCHAR (30) NOT NULL,
    apellido VARCHAR (30) NOT NULL,
    edad INTEGER NOT NULL,
    genero VARCHAR (1) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    telefono VARCHAR (10) NOT NULL,
    PRIMARY KEY (dpi)
);

CREATE TABLE IF NOT EXISTS proy1bases1.departamento
(
    id_dep INTEGER NOT NULL,
    nombre VARCHAR (50) NOT NULL,
    PRIMARY KEY (id_dep)
);

CREATE TABLE IF NOT EXISTS proy1bases1.detalle_voto
(
    id_detalle INTEGER NOT NULL AUTO_INCREMENT,
    id_candidato INTEGER NOT NULL,
    id_voto INTEGER NOT NULL,
    PRIMARY KEY(id_detalle)
);

CREATE TABLE IF NOT EXISTS proy1bases1.mesa
(
    id_mesa INTEGER NOT NULL,
    id_dep INTEGER NOT NULL,
    PRIMARY KEY (id_mesa)
);

CREATE TABLE IF NOT EXISTS proy1bases1.partido
(
    id_partido INTEGER NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    siglas VARCHAR (20) NOT NULL,
    fundacion DATE NOT NULL,
    PRIMARY KEY (id_partido)
);

CREATE TABLE IF NOT EXISTS proy1bases1.voto 
(
    id_voto INTEGER NOT NULL,
    fecha_hora DATETIME NOT NULL,
    dpi VARCHAR (13) NOT NULL,
    id_mesa INTEGER NOT NULL,
    PRIMARY KEY (id_voto)
);

ALTER TABLE proy1bases1.candidato ADD FOREIGN KEY (id_cargo) REFERENCES proy1bases1.cargo (id_cargo);
ALTER TABLE proy1bases1.candidato  ADD FOREIGN KEY (id_partido) REFERENCES proy1bases1.partido (id_partido);
ALTER TABLE proy1bases1.detalle_voto ADD FOREIGN KEY (id_candidato) REFERENCES proy1bases1.candidato (id_candidato);
ALTER TABLE proy1bases1.detalle_voto ADD FOREIGN KEY (id_voto) REFERENCES proy1bases1.voto (id_voto);
ALTER TABLE proy1bases1.mesa ADD FOREIGN KEY (id_dep) REFERENCES proy1bases1.departamento (id_dep);
ALTER TABLE proy1bases1.voto ADD FOREIGN KEY (dpi) REFERENCES proy1bases1.ciudadano (dpi);
ALTER TABLE proy1bases1.voto ADD FOREIGN KEY (id_mesa) REFERENCES proy1bases1.mesa (id_mesa);
