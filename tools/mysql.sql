CREATE DATABASE music;
USE music;
CREATE TABLE product (
	`id` int not null auto_increment,
	`title` varchar(255),
	`description` text,
	`imgSrc` varchar(255),
	`imgAlt` varchar(255),
	`iconSrc` varchar(255),
	`iconAlt` varchar(255),
	`rate` varchar(255),
	`verified` tinyint(1),
	`iconLow` varchar(255),
	PRIMARY KEY (`id`)
);

create user 'tiltmusic'@'localhost' identified by '1rdFyR4LnI7oP-:V0i!;9';

GRANT SELECT, UPDATE, INSERT, DELETE ON music.* TO 'tiltmusic'@'localhost' identified by '1rdFyR4LnI7oP-:V0i!;9';

INSERT INTO `product` (title, description, imgSrc, imgAlt, iconSrc, iconAlt, rate, verified, iconLow ) 
	VALUES
		('Snoop Dogg', 'BODR - Full Album', 'snoop-dogg.jpg', 'Snoop Dogg', 'snoop-dogg-icon.jpg', 'Snoop Dogg', '1/1000', 0, 'wave-fashion.png'),
		('The Weeknd', 'Signed Gold Trading Card', 'the-weeknd.jpg', 'The Weeknd', 'the-weeknd-icon.jpg', 'The Weeknd', '1/100', 1, 'wave-fashion.png'),
		('NAS', 'Exclusive Unreleased Track', 'NAS.png', 'NAS', 'NAS-icon.png', 'NAS', '1/10', 1, 'diamant.png'),
		('The Jackson 5\'s', 'Jackson 5\'s First Acetate Pressing of Singles', 'jackson.png', 'The Jackson 5\'s', 'jackson-icon.png', 'The Jackson 5\'s', '1/1', 1, 'pepite2.png'); 


