SELECT p.nombre AS presidente, v.nombre AS vicepresidente, COUNT(*) AS conteo
FROM proy1bases1.candidato p
JOIN proy1bases1.candidato v
ON
	p.id_partido = v.id_partido
	AND p.id_cargo = 1
	AND v.id_cargo = 2
JOIN proy1bases1.detalle_voto dv
ON dv.id_candidato = p.id_candidato
GROUP BY presidente, vicepresidente
ORDER BY conteo DESC
LIMIT 10;