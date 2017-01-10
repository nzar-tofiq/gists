--create a function that returns the total booking cost--
--for a specified booking @bookingRef
CREATE FUNCTION bookingCost (@bookingRef INT)
--returns type money--
RETURNS MONEY
AS
BEGIN
	RETURN 
	(
	--return the sum of course fee and accommodation fee ADDED in the booking table where the booking reference 
	--is the same as @bookingRef
	--if accommodationfee is null then set it to 0 otherwise outcome is always null
		SELECT SUM(courseFee + ISNULL(accommodationFee,0)) FROM tBooking WHERE bookingRef = @bookingRef
	)
END
GO