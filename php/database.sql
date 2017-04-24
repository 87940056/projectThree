DROP TABLE IF EXISTS Artist;
CREATE TABLE Artist
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(256),
  hobby VARCHAR(256),
  birthday VARCHAR(256)
)DEFAULT CHARSET=UTF8;
INSERT INTO Artist (id,name,hobby,birthday) VALUES
(1,'周杰伦','装逼',''),
(2,'张学友','歌神你好',''),
(3,'张宇','','');
-- -----------------------------------------------------------------------------------------
DROP TABLE IF EXISTS Album;
CREATE TABLE Album
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(256),
  artist VARCHAR(256)
)DEFAULT CHARSET=UTF8;
INSERT INTO Album (id,name,artist) VALUES
(1,'范特西','周杰伦'),
(2,'七里香','周杰伦'),
(3,'叶惠美','周杰伦'),
(4,'十一月的肖邦','周杰伦'),
(5,'张学友专辑','张学友'),
(6,'张宇专辑','张宇');
-- ------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS Music;
CREATE TABLE Music
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  artist_id INT(12),
  album_id INT(12),
  name VARCHAR(256),
  duration VARCHAR(256),
  src VARCHAR(256),
  selected INT(12)
)DEFAULT CHARSET=UTF8;
INSERT INTO Music (id,artist_id,album_id,name,duration,src,selected) VALUES
(1,1,1,'简单爱','04:50','简单爱.mp3',1),
(2,1,1,'双截棍','04:50','双截棍.mp3',1),
(3,1,2,'七里香','04:50','七里香.mp3',1),
(4,1,2,'搁浅','04:50','搁浅.mp3',1),
(5,1,3,'晴天','04:50','晴天.mp3',1),
(6,1,3,'东风破','04:50','东风破.mp3',1),
(7,1,4,'夜曲','04:50','夜曲.mp3',1),
(8,1,4,'黑色毛衣','04:50','黑色毛衣.mp3',1),
(9,2,5,'慢慢','04:50','慢慢.mp3',0),
(10,2,5,'如果这都不算爱','04:50','如果这都不算爱.mp3',0),
(11,3,6,'雨一直下','04:50','雨一直下.mp3',0),
(12,3,6,'趁早','04:50','趁早.mp3',0);

DROP TABLE IF EXISTS Musiclist;
CREATE TABLE Musiclist
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  artist VARCHAR(256),
  album VARCHAR(256),
  album_id INT(12),
  name VARCHAR(256),
  src VARCHAR(256)
)DEFAULT CHARSET=UTF8;
INSERT INTO Musiclist (id,artist,album,album_id,name,src) VALUES
(1,'周杰伦','范特西',1,'简单爱','简单爱.mp3'),
(2,'周杰伦','范特西',1,'双截棍','双截棍.mp3'),
(3,'周杰伦','七里香',2,'七里香','七里香.mp3'),
(4,'周杰伦','七里香',2,'搁浅','搁浅.mp3'),
(5,'周杰伦','叶惠美',3,'晴天','晴天.mp3'),
(6,'周杰伦','叶惠美',3,'东风破','东风破.mp3'),
(7,'周杰伦','十一月的肖邦',4,'夜曲','夜曲.mp3'),
(8,'周杰伦','十一月的肖邦',4,'黑色毛衣','黑色毛衣.mp3'),
(9,'张学友','张学友专辑',5,'慢慢','慢慢.mp3'),
(10,'张学友','张学友专辑',5,'如果这都不算爱','如果这都不算爱.mp3'),
(11,'张宇','张宇专辑',6,'雨一直下','雨一直下.mp3'),
(12,'张宇','张宇专辑',6,'趁早','趁早.mp3');
-- ---------------------------------------------------------------------------------------------
	