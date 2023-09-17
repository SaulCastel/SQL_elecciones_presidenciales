SELECT
    DATE_FORMAT(fecha_hora, '%H:%i') AS hora,
    COUNT(*) AS conteo
FROM proy1bases1.voto
GROUP BY hora
ORDER BY conteo DESC
LIMIT 5;