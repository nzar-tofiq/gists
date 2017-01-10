--Test--
EXEC cyclistOncourseCount 'BC104'
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','07-08-13','I',1,NULL,290,NULL);
INSERT INTO tBooking(courseCode,bookingDate,individual,cyclistCount,clubID,courseFee,accommodationFee) VALUES('BC104','09-21-13','G',3,103,1500,350);
EXEC cyclistOnCourseCount 'BC104'