CREATE TABLE tBooking (
    bookingRef INT PRIMARY KEY IDENTITY(1001,1),
	courseCode VARCHAR(5) NOT NULL
				REFERENCES tCourse(courseCode),
    bookingDate DATE NOT NULL DEFAULT(getDate())
				CONSTRAINT checkBookingDate
				Check(bookingDate<=(getDate())),
    individual CHAR(1) NOT NULL DEFAULT('I')
				CONSTRAINT chechindividual
				CHECK(individual = 'I' OR individual ='G'),
    cyclistCount INTEGER NOT NULL
				CONSTRAINT checkCount
				CHECK(cyclistCount > 0),
    clubID INT NULL
			REFERENCES tClub(clubID),
    courseFee MONEY NOT NULL
			CONSTRAINT checkcourseFee
			CHECK(courseFee >= 80.00),
    accommodationFee MONEY NULL
);

INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC103','08-27-13','I',1,NULL,290.00,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC103','07-08-13','I',1,NULL,290,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','09-21-13','G',3,101,1500,350);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','01-04-14','G',3,102,900,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','08-29-13','I',1,NULL,300,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','09-10-13','I',1,NULL,300,70);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC105','11-07-13','I',1,NULL,180,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC105','09-25-13','I',1,NULL,180,70);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC105','07-08-13','G',4,103,504,280);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','09-20-13','G',10,104,1260,700);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','11-11-13','G',4,105,504,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','11-29-13','I',1,NULL,126,70);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','11-29-13','I',1,NULL,126,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','01-24-14','I',1,NULL,126,70);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC106','10-29-13','G',5,106,630,350);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','08-17-13','G',5,107,1750,700);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','08-14-13','I',1,NULL,350,140);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','11-28-13','I',1,NULL,350,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','07-05-13','I',1,NULL,350,140);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','01-01-14','I',1,NULL,350,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC107','07-26-13','G',4,108,1400,560);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC108','11-29-13','G',6,109,3000,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC108','08-20-13','I',1,NULL,500,140);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC108','10-14-13','I',1,NULL,500,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC108','02-07-14','I',1,NULL,500,140);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC109','11-07-13','I',1,NULL,320,70);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC109','12-31-13','G',7,110,2240,490);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC109','11-22-13','G',5,101,1600,350);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC109','11-24-13','I',1,NULL,320,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC110','07-31-13','I',1,NULL,220,140);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC110','07-28-13','I',1,NULL,220,NULL);