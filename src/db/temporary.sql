CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_candidato
(
    id_candidato INTEGER NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    nacimiento DATE NOT NULL,
    id_partido INTEGER NOT NULL,
    id_cargo INTEGER NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_cargo
(
    id_cargo INTEGER NOT NULL,
    cargo VARCHAR (100) NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_ciudadano
(
    dpi VARCHAR (13) NOT NULL,
    nombre VARCHAR (30) NOT NULL,
    apellido VARCHAR (30) NOT NULL,
    edad INTEGER NOT NULL,
    genero VARCHAR (1) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    telefono VARCHAR (10) NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_departamento
(
    id_dep INTEGER NOT NULL,
    nombre VARCHAR (50) NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_mesa
(
    id_mesa INTEGER NOT NULL,
    id_dep INTEGER NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_partido
(
    id_partido INTEGER NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    siglas VARCHAR (20) NOT NULL,
    fundacion DATE NOT NULL
);

CREATE TEMPORARY TABLE IF NOT EXISTS proy1bases1.temp_voto 
(
    id_voto INTEGER NOT NULL,
    fecha_hora DATETIME NOT NULL,
    dpi VARCHAR (13) NOT NULL,
    id_mesa INTEGER NOT NULL,
    id_candidato INTEGER NOT NULL
);
