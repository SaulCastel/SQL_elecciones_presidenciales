SELECT c.nombre AS alcalde, p.nombre AS partido
FROM proy1bases1.candidato c 
JOIN proy1bases1.partido p ON c.id_partido = p.id_partido
WHERE c.id_cargo = 6;