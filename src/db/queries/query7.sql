SELECT c.edad as edad, COUNT(*) as conteo
FROM proy1bases1.ciudadano c
JOIN proy1bases1.voto v ON v.dpi = c.dpi 
GROUP BY edad
ORDER BY conteo DESC
LIMIT 10;
