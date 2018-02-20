// module.exports = function getLoveTrianglesCount(preferences) {
//   return 8;
// };
module.exports = function getLoveTrianglesCount(arr){
	console.log(arr);
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] <= arr.length) {
			if (arr[arr[i] - 1] <= arr.length) {
				if (arr[arr[arr[i] - 1] -1 ] === i+1) {
					
					count++;
				} 
			}
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (i+1 === arr[i]) {
			count--;
		}
	}
	return count/3;
}

