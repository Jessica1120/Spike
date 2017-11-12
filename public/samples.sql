UPDATE games SET headref=(SELECT (id) FROM users WHERE derbyname='Doc');
//nested query where select phrase is finding the id for Doc and then update phrase 
//sets headref to Docs id



SELECT * FROM games
Inner Join users ON games.ipr = users.id and games.jr1 = users.id;
//games is one table, users is the other table. ipr is a column in games - so games.ipr
//and id is a column in users so users.id


