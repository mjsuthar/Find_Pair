function findPair(arr){

	var arrObj = {};

	for(var i=0; i<arr.length; i++)
	{
		var key = arr[i].toString();
		if(arrObj[key] == undefined)
		{
			arrObj[key] = 0				
		}
		arrObj[key]++;
	}


	var totlPair = 0;


	for(var j in arrObj)
	{
		var count = arrObj[j];

		if(count>0)
		{
			var res = count/2;
			if(count%2 == 0)
			{
				totlPair += res;
			}
			else
			{
				totlPair += (res-0.5);
			}

		}

	}


	return totlPair;
}



Console.log(findPair([10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40]));