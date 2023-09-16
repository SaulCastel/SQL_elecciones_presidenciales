SELECT c.edad as edad, COUNT(*) as conteo
FROM proy1bases1.voto v
JOIN proy1bases1.ciudadano c ON v.dpi = c.dpi 
GROUP BY edad
ORDER BY edad DESC
LIMIT 10;