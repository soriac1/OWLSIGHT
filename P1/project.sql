CREATE DATABASE owlsight;
USE owlsight;

CREATE TABLE logindata (id INT AUTO_INCREMENT PRIMARY KEY,Firstname VARCHAR(50) NOT NULL,Lastname VARCHAR(50) NOT NULL,username VARCHAR(50) NOT NULL,password VARCHAR(50)NOT NULL);

INSERT INTO logindata (Firstname, Lastname, username, password) 
    VALUES ('admin', 'system','admin','12345'), 
            ('system', 'A','sys','678890'),
            ('Chris','Soria','soriac1@southernct.edu','123456789'),
            ('Reed', 'Boles','bolesr1@southernct.edu','121212');

CREATE TABLE locations (  id INT AUTO_INCREMENT PRIMARY KEY,Class_name VARCHAR(50) NOT NULL,B_name VARCHAR(50) NOT NULL,room_num VARCHAR(50) NOT NULL,Time  VARCHAR(50) NOT NULL,Days VARCHAR(50) NOT NULL,prof_name VARCHAR(50) NOT NULL);

INSERT INTO  locations (Class_name, B_name, room_num, Time, Days, prof_name)
    VALUES  ('CSC-330', 'Jennings Hall','JE-114','11:00 - 12:15','Tuesday & Thursday', 'Sahar'), 
	        ('CSC-424', 'Science Buliding','SC-212','5:00 - 7:30','Monday', 'Brenickle'),
            ('CSC-443','Engalemen Hall', ' EN-B221', '5:00-7:30', 'Tuesday & Thursday', 'Hao Wu');