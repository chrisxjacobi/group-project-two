USE mtj5ryjsc0jyf8ha;

CREATE TABLE Project(
project_id INTEGER(11) AUTO_INCREMENT NOT NULL,
project_name VARCHAR(100),
project_date_time VARCHAR(16),
project_location VARCHAR(100),
project_description VARCHAR(100),
project_duration DECIMAL(5, 2),
PRIMARY KEY (project_id)
);

INSERT INTO Project (project_name, project_date_time, project_location, project_description, project_duration)
VALUES	('Paint for Grandma', '2016-11-12 12:00', 'Austin', 'Help paint Grandma Jones house', 4),
('Turkey Jam 2016', '2016-11-27 15:00', 'Austin', 'Volunteer at the local food bank', 4),
('Picnic Table Party', '2016-12-01 13:30', 'Austin', 'Help build picnic tables for the park', 5),
('X-Mas to the Xtreme', '2016-12-25 09:00', 'Austin', 'Take pictures with Santa', 3);

CREATE TABLE Volunteer(
volunteer_id INTEGER(11) AUTO_INCREMENT NOT NULL,
volunteer_name VARCHAR(30),
volunteer_email VARCHAR(30),
PRIMARY KEY (volunteer_id)
);

INSERT INTO Volunteer (volunteer_name, volunteer_email)
VALUES	('Balthazar Longbottom', 'balth@gmail.com'),
('Sting', 'sting@gmail.com'),
('Yvonne', 'y-me@gmail.com'),
('Big George', 'so-big@gmail.com');


CREATE TABLE Linked(
linked_id INTEGER AUTO_INCREMENT NOT NULL,
vol_id INTEGER(11) NOT NULL,
proj_id INTEGER(11) NOT NULL,
PRIMARY KEY(linked_id)
);
