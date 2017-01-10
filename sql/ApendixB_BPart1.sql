--B. List the details of all cycling coaches employed to instruct on courses running in 2014, --
--giving the name of the coach, a list of the course codes and a total of the number of courses they are working on. --

SELECT CH.fullName, COUNT(CU.courseCode) AS Number_of_courses
FROM tCoach CH 
LEFT JOIN tCoachOnCourse CC ON CH.coachID = CC.coachID 
INNER JOIN tCourse CU ON CC.courseCode = CU.courseCode
WHERE CU.courseCode IN (SELECT courseCode FROM tCourse WHERE (startDate <'09-01-2014' AND startDate >= '08-01-2014'))
GROUP BY CH.fullName
