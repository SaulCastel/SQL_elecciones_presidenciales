SELECT COUNT(DISTINCT id_voto) AS 'votos nulos'
FROM proy1bases1.detalle_voto
WHERE id_candidato  = -1;