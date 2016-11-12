CREATE DATABASE volunteer_db;

USE volunteer_db;

CREATE TABLE volunteer_db.Project(

project_id INTEGER(11) AUTO_INCREMENT NOT NULL,
project_name VARCHAR(30),
project_date_time DATETIME(),
project_location VARCHAR(30),
project_description VARCHAR(30),
project_role VARCHAR(30),
project_duration DECIMAL(5, 2),
PRIMARY KEY (project_id));

INSERT INTO volunteer_db.Project (project_id, project_name, project_date_time, project_location, project_description, project_role, project_duration)
VALUES (NULL, 'Paint for Grandma', '2016-11-12 12:00:00', 'Austin', 'Help paint Grandma Jones' house', 'labor', 4);

SELECT * FROM volunteer_db.Project;

CREATE TABLE volunteer_db.Volunteer(

volunteer_id INTEGER(11) AUTO_INCREMENT NOT NULL,
FOREIGN KEY (project_id) REFERENCES volunteer_db.Project(project_id),
volunteer_name VARCHAR(30),
project_name VARCHAR(30),
project_role VARCHAR(30));
PRIMARY KEY (volunteer_id));

INSERT INTO volunteer_db.Volunteer (volunteer_id, volunteer_name, project_name, project_role)
VALUES (NULL, 'Balthazar Longbottom', 'Paint for Grandma', 'labor')
	   (NULL, 'Sting', 'Paint for Grandma', 'management'),
	   (NULL, 'Yvonne', 'Paint for Grandma', 'management'),
	   (NULL, 'Big George', 'Paint for Grandma', 'labor')

SELECT * FROM volunteer_db.Project;

SELECT Project.project_id, project_name, volunteer.volunteer_name
FROM Project
INNER JOIN Volunteer
ON Project.project_id=Volunteer.volunteer_name