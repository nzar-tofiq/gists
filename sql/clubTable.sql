CREATE TABLE tClub (
	clubID INT PRIMARY KEY IDENTITY(101,1),
    clubName VARCHAR(100) NOT NULL,
    leaderID INT NOT NULL UNIQUE 
			FOREIGN KEY REFERENCES tCyclist(cyclistID)
);

INSERT INTO tClub(clubName,leaderID) VALUES('St Albans',27);
INSERT INTO tClub(clubName,leaderID) VALUES('Sussex cycling',30);
INSERT INTO tClub(clubName,leaderID) VALUES('Rangers',42);
INSERT INTO tClub(clubName,leaderID) VALUES('Rhino',52);
INSERT INTO tClub(clubName,leaderID) VALUES('Ben Bow',62);
INSERT INTO tClub(clubName,leaderID) VALUES('Riders',69);
INSERT INTO tClub(clubName,leaderID) VALUES('Auburn',11);
INSERT INTO tClub(clubName,leaderID) VALUES('Portsmouth Cycling Club',25);
INSERT INTO tClub(clubName,leaderID) VALUES('Country Riders',6);
INSERT INTO tClub(clubName,leaderID) VALUES('The Wheel Club',34);