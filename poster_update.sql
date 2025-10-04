UPDATE movies SET poster_url = CASE movie_id
  WHEN 5 THEN 'https://example.com/kgf2.jpg'
  WHEN 6 THEN '/Movies_posters/IMG-20251004-WA0002.jpg'
  WHEN 7 THEN '/Movies_posters/IMG-20251004-WA0001.jpg'
  WHEN 8 THEN '/Movies_posters/IMG-20251004-WA0003.jpg'
  WHEN 9 THEN '/Movies_posters/IMG-20251004-WA0004.jpg'
  WHEN 10 THEN '/Movies_posters/IMG-20251004-WA0007.jpg'
  WHEN 11 THEN '/Movies_posters/IMG-20251004-WA0009.jpg'
  WHEN 12 THEN '/Movies_posters/IMG-20251004-WA0010.jpg'
  WHEN 13 THEN '/Movies_posters/IMG-20251004-WA0008.jpg'
  WHEN 14 THEN '/Movies_posters/IMG-20251004-WA0005.jpg'
  WHEN 15 THEN '/Movies_posters/IMG-20251004-WA0006.jpg'
END
WHERE movie_id IN (5,6,7,8,9,10,11,12,13,14,15);
