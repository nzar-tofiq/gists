CREATE TABLE tPayment (
	paymentNo INT PRIMARY KEY IDENTITY(501,1),
	bookingRef INT NOT NULL
			REFERENCES tBooking(bookingRef),
	bookingFee MONEY NOT NULL,
	paymentDate DATE NOT NULL DEFAULT(getDate()),
	paymentAmount MONEY NOT NULL
			CONSTRAINT checkPaymentAmount
			CHECK(paymentAmount > 0),
);

INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1001,290,'08-27-2013',290)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1002,290,'07-08-2013',290)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1003,1850,'09-21-2013',500)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1003,1850,'09-27-2013',500)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1003,1850,'10-05-2013',850)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1004,900,'01-04-2014',450)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1004,900,'01-15-2014',450)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1005,300,'08-29-2013',300)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1006,370,'10-09-2013',150)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1006,370,'11-01-2013',220)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1007,180,'07-11-2013',180)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1008,250,'09-25-2013',100)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1008,250,'11-20-2013',150)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1009,784,'07-08-2013',484)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1009,784,'08-21-2013',300)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1010,1960,'09-20-2013',1000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1010,1960,'12-10-2013',960)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1011,504,'11-11-2013',504)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1012,196,'11-29-2013',196)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1013,126,'11-29-2013',126)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1014,196,'01-24-2014',196)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1015,980,'10-29-2013',480)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1015,980,'11-29-2013',500)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1016,2450,'08-17-2013',1000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1016,2450,'09-21-2013',1450)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1017,490,'08-14-2013',490)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1018,350,'11-28-2013',100)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1018,350,'01-08-2014',250)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1019,490,'07-05-2013',490)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1020,350,'01-01-2014',100)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1020,350,'01-14-2014',250)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1021,1960,'07-26-2013',1000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1021,1960,'07-27-2013',960)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1022,3000,'11-29-2013',1000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1022,3000,'01-09-2014',2000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1023,640,'08-20-2013',200)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1023,640,'08-27-2013',440)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1024,500,'10-14-2013',250)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1024,500,'12-10-2013',250)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1025,640,'02-07-2014',640)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1026,390,'11-07-2013',100)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1026,390,'01-03-2014',290)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1027,2730,'12-31-2013',1000)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1028,1950,'11-22-2013',1730)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1029,320,'11-24-2013',320)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1030,420,'07-31-2013',200)
INSERT INTO tPayment(bookingRef,bookingFee,paymentDate,paymentAmount) VALUES(1031,360,'07-28-2013',360)