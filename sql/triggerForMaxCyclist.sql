CREATE TRIGGER maximumCyclistsOnCourse
ON tBooking	
FOR	INSERT	
AS	
DECLARE	@maximumCyclists INT, @bookedCyclists INT, @courseCode VARCHAR(10), @currentBookingCyclistCount INT;

--get the course code and the number of cyclists to be booked on current course from the temporary table (insert Command)
--and assign @courseCode and @currentBookingCyclistCount to them
SELECT @courseCode = courseCode, @currentBookingCyclistCount = cyclistCount FROM inserted
--assign @maximumCyclists to the maximum cyclist number that can book for a course from tCourse table
SELECT @maximumCyclists = maxCyclist FROM tCourse WHERE courseCode = @courseCode
--get the number of cyclists who have already booked from the stored procedure (cyclistsOnCourseCount)
SELECT @bookedCyclists = SUM(cyclistCount) FROM tBooking WHERE courseCode = @courseCode
--if the number of cyclists (old and new) exceeds the @maximumCyclists
	IF SUM(@currentBookingCyclistCount + @bookedCyclists) > @maximumCyclists	
BEGIN
--then print out this line and rollback(don't change anything)
PRINT('Maximum cyclists who can book for this course cannot be exceeded')	
ROLLBACK TRANSACTION	
END;