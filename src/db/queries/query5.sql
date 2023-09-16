SELECT COUNT(*) AS conteo, d.nombre AS departamento 
FROM proy1bases1.voto v
JOIN proy1bases1.mesa m ON v.id_mesa = m.id_mesa 
JOIN proy1bases1.departamento d ON m.id_dep = d.id_dep
GROUP BY departamento;