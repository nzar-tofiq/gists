CREATE TABLE tCourse (
    courseCode VARCHAR(5) PRIMARY KEY,
    startDate DATE NOT NULL
			CONSTRAINT checkStartDate
			CHECK(startDate > getDate()),
    finishDate DATE NOT NULL,
    courseLevel CHAR(1) NOT NULL
		CONSTRAINT checkLevel
		CHECK(courseLevel = 'B' OR courseLevel = 'I' OR courseLevel = 'A'),
    courseType CHAR(1) NOT NULL DEFAULT('M')
		CONSTRAINT checkCourseType
		CHECK(courseType = 'W' OR courseType = 'M' OR courseType = 'Y'),
    maxCyclist TINYINT NOT NULL DEFAULT(10),
	fee Money NOT NULL
		CONSTRAINT checkfee
		CHECK(fee >= 120.00 AND fee <= 540.00)
);

INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC101','08-03-13','08-10-2013','B','W','25',150);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC102','08-17-13','08-31-2013','B','Y','25',250);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC103','09-14-13','09-28-2013','I','M','25',290);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC104','04-05-14','04-12-2014','I','W','25',300);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC105','04-19-14','04-26-2014','A','Y','25',180);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC108','06-07-14','06-14-2014','B','Y','25',190);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC109','06-21-14','06-28-2014','I','M','25',350);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC106','08-16-14','08-30-2014','A','M','25',500);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC107','08-23-14','09-06-2014','B','W','25',320);
INSERT INTO tCourse(courseCode,startDate,finishDate,courseLevel,courseType,maxCyclist,fee) VALUES('BC110','05-03-15','05-17-2015','I','W','25',220);
