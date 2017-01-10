CREATE TABLE tCoach (
    coachID INT IDENTITY(101,1) PRIMARY KEY,
    fullName VARCHAR(30) NOT NULL,
    dob DATE NOT NULL
		CONSTRAINT checkAge
		CHECK(dob >= '01-01-1924'),
    gender CHAR(1) NULL
		CONSTRAINT checkGender
		CHECK(gender = 'M' OR gender = 'F'),
    contactNo VARCHAR(20) NULL,
    streetAddress VARCHAR(100) NULL,
    county_city VARCHAR(50) NULL,
    postcode VARCHAR(10) NULL,
    country VARCHAR(50) NULL
);

INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Kelly Price','08-18-1954','F','+33 1155 393295','639-4100 Aliquet St.','Vendee','95553','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Julian Barnett','02-21-1994','F','+33 4273 490094','Ap #463-9523 Sed Street','Brittany','60614','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Galena Delgado','01-15-1968','F','+33 7155 818397','P.O. Box 315, 8165 In, Avenue','Paris','2535','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Reece Knox','12-03-1982','M','+33 2137 170259','544-7616 Tristique Street','Le mans','555252','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Ayanna Valdez','02-01-1999','F','+33 4992 724175','Ap #503-2696 Dis St.','Rouen','5933','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Emery Dyer','08-30-1987','M','+33 8323 028020','Ap #960-7121 Sed Road','Dieppe','31224','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Riley Bolton','06-12-1957','M','+33 7562 161503','Ap #613-7421 Placerat St.','Rennes','5856XN','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Rashad Walls','12-12-1998','M','+33 4956 265596','P.O. Box 620, 372 Nisl Ave','Vendee','1331','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Candace Irwin','08-28-1964','F','+33 8659 674572','251-6551 Nunc Street','Evereux','9407','France');
INSERT INTO tCoach(fullName,dob,gender,contactNo,streetAddress,county_city,postcode,country) VALUES('Vincent Ramos','12-05-1981','M','+33 1958 253097','Ap #157-3640 Integer Ave','Paris','41616','France');
