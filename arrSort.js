//编写函数实现排序数字数组中数组元素的功能（可以指定升序或降序）
//默认为升序
//arr.sort(function(a,b){return a-b})//升序
/*
function sortNumber(a,b)
{
return a - b
}*/
//"" , 0 , undefinded,NaN   false
//剩下的都是true
var arrSort = function(arr,flg){
	if(flg){
		arr.sort(function(a,b){return b-a;});
	}else{
		arr.sort(function(a,b){return a-b;});
	}
}
var arr=[1,44,2,454,5,21,3,5,63,3];
arrSort(arr,true);
document.write(arr);
