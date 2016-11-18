USE volunteer_db;

DROP TABLE Project;

CREATE TABLE Project(
project_id INTEGER(11) AUTO_INCREMENT NOT NULL,
project_name VARCHAR(100),
project_date_time VARCHAR(16),
project_location VARCHAR(100),
project_description VARCHAR(100),
project_duration DECIMAL(5, 2),
project_img VARCHAR(100),
PRIMARY KEY (project_id)
);

INSERT INTO Project (project_name, project_date_time, project_location, project_description, project_duration, project_img)
VALUES	('Paint for Grandma', '2016-11-19 12:00', '2400 E OLTORF ST AUSTIN TX 78741', 'Help paint Grandma Jones house', 4, 'img/painting-small.jpg'),
('Turkey Jam 2016', '2016-12-15 14:00', '200 CONGRESS AVE AUSTIN TX 78701', 'Pack meals at the homeless shelter', 4, 'img/turkey.jpg'),
('Playground Fiesta', '2016-12-01 13:30', '2874 SHOAL CREST AVE AUSTIN TX 78705', 'Help repair broken playground equipment', 5, 'img/picnic.jpg'),
('X-Mas to the Xtreme', '2016-12-25 09:00', '2244 DELLANA LN ROLLINGWOOD TX 78746 ', 'Pack meals for missionairies', 3, 'img/christmas.jpg'),
('Clean up for the New Year', '2016-12-31 09:00', '5201 BERKMAN DR AUSTIN TX 78746 ', 'Cleaning up Bartholomew Park', 3, 'img/christmas.jpg');

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