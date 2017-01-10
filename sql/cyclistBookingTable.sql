CREATE TABLE tCyclistBooking(
bookingRef INT NOT NULL 
	FOREIGN KEY REFERENCES tBooking(bookingRef),
cyclistID INT NOT NULL 
	FOREIGN KEY REFERENCES tCyclist(cyclistID)
PRIMARY KEY (bookingRef,cyclistID)
);

INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1001,18)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1002,19)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1003,27)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1003,28)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1003,29)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1004,30)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1004,31)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1004,32)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1005,33)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1006,75)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1007,40)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1008,41)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1009,42)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1009,43)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1009,44)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1009,45)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,52)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,53)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,54)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,55)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,56)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,57)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,58)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,59)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,60)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1010,61)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1011,62)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1011,63)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1011,64)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1011,65)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1012,66)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1013,67)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1014,68)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1015,69)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1015,70)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1015,71)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1015,72)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1015,73)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1016,11)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1016,12)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1016,13)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1016,14)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1017,5)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1018,15)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1019,16)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1020,17)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1021,25)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1021,26)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1021,76)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1021,77)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,6)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,7)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,8)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,9)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,10)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1022,11)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1023,12)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1024,13)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1025,14)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1026,33)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,34)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,35)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,36)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,37)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,38)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,39)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1027,72)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1028,73)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1028,74)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1028,78)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1028,79)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1028,80)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1029,81)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1030,82)
INSERT INTO tCyclistBooking(bookingRef,cyclistID) VALUES(1031,83)
