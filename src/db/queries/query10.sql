SELECT
    CONCAT(HOUR(fecha_hora),':', MINUTE(fecha_hora)) AS hora,
    COUNT(*) AS conteo
FROM proy1bases1.voto
GROUP BY hora
ORDER BY conteo DESC
LIMIT 5;