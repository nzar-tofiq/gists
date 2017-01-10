--Find the full name and phone number of all cyclists who have booked courses in August 2014.--
SELECT CY.fullName, CY.contactNo FROM tCyclist CY
INNER JOIN tCyclistBooking CB ON CY.cyclistID = CB.cyclistID
INNER JOIN tBooking B ON B.bookingRef = CB.bookingRef
INNER JOIN tCourse C ON B.courseCode = C.courseCode
WHERE startDate >= '08-01-2014' AND startDate <'09-01-2014'