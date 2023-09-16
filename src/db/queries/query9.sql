SELECT v.id_mesa, d.nombre AS departamento, COUNT(*) AS conteo
FROM proy1bases1.voto v
INNER JOIN proy1bases1.mesa m ON v.id_mesa = m.id_mesa
INNER JOIN proy1bases1.departamento d ON m.id_dep = d.id_dep
GROUP BY v.id_mesa
ORDER BY conteo DESC
LIMIT 5;