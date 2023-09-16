SELECT genero, COUNT(genero) AS conteo
FROM proy1bases1.ciudadano c
INNER JOIN proy1bases1.voto v ON c.dpi = v.dpi
WHERE c.genero = 'M'
UNION
SELECT genero, COUNT(genero) AS conteo
FROM proy1bases1.ciudadano c
INNER JOIN proy1bases1.voto v ON c.dpi = v.dpi
WHERE c.genero = 'F';
