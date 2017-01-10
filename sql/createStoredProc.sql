--create a stored procedure called cyclistsOnCourseCount, so when a courseCode has been passed into it--
-- it  prints the number of cyclists that have been booked for the specified course--
--@param @courseCode specifies courrse--
CREATE PROC cyclistOncourseCount @courseCode VARCHAR(10) 
AS
--@cyclistCount number of cyclists, who have booked a place on @courseCode
DECLARE @cyclistCount INT;
BEGIN
	--assign the total number of cyclists on @courseCode to @cyclistCount
	Select @cyclistCount = SUM(cyclistCount) FROM tBooking WHERE courseCode = @courseCode;
	PRINT @cyclistCount;
END