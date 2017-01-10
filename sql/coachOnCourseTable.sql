CREATE TABLE tCoachOnCourse(
	coachID INT FOREIGN KEY 
			REFERENCES tCoach(coachID),
	courseCode VARCHAR(5) FOREIGN KEY
			REFERENCES tCourse(courseCode)
PRIMARY KEY(coachID,courseCode)
);
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(101,'BC101')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(101,'BC107')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(101,'BC103')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(102,'BC105')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(102,'BC103')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(103,'BC103')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(103,'BC105')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(103,'BC102')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(104,'BC104')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(104,'BC106')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(104,'BC108')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(105,'BC109')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(105,'BC110')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(106,'BC101')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(106,'BC102')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(106,'BC103')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(107,'BC104')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(108,'BC105')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(109,'BC106')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(110,'BC107')
INSERT INTO tCoachOnCourse(coachID,courseCode) VALUES(110,'BC108')