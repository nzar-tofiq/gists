--B. List the details of all cycling coaches employed to instruct on courses running in 2014, --
--giving the name of the coach, a list of the course codes and a total of the number of courses they are working on. --

SELECT CH.fullName, CU.courseCode FROM tCourse CU
INNER JOIN tCoachOnCourse CC ON  CU.courseCode = CC.courseCode
INNER JOIN tCoach CH ON CC.coachID = CH.coachID
WHERE CU.courseCode IN (SELECT courseCode FROM tCourse WHERE (startDate <'09-01-2014' AND startDate >= '08-01-2014'))
