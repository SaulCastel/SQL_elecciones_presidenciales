SELECT COUNT(*) AS conteo, p.nombre as partido
FROM proy1bases1.candidato c
JOIN proy1bases1.partido p 
ON p.id_partido = c.id_partido
WHERE c.id_cargo != -1
GROUP BY partido;