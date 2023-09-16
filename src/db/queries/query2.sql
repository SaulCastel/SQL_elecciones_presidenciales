SELECT COUNT(*) AS conteo, p.nombre as partido
FROM proy1bases1.candidato c
JOIN proy1bases1.partido p 
ON p.id_partido = c.id_partido
WHERE c.id_cargo = 3 OR c.id_cargo = 4 OR c.id_cargo = 5
GROUP BY partido;