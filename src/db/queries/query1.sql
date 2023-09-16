SELECT
    P.nombre AS presidente,
    V.nombre AS vicepresidente,
    Par.nombre AS partido
FROM proy1bases1.candidato P
JOIN proy1bases1.candidato V
ON
    P.id_partido = V.id_partido
    AND P.id_cargo  = 1
    AND V.id_cargo = 2
JOIN proy1bases1.partido Par
ON P.id_partido = Par.id_partido;