var arr = ['a', 'b',['c','d',['e','f',['g']]]];
var flatArr = flatten(arr);
console.log(flatArr);

function flatten(array){
	//convert the array to a string
	var arrayString = array.toString(); //outcome "a,b,c,d,e,f,g"
	//then save as an array with the split method at each ","
	return arrayString.split(',');
}