//given array is sorted
var nums=[2, 7, 11, 15];
function twosun (arry, target){
 
  for( var i=0, j=arry.length;i<j;){
    var tmp= target-arry[i];
    console.log("i "+i+" j "+j+" tmp "+tmp);
    if(tmp === arry[j]) return true;
    else if(tmp > arry[j]) ++i;
    else  --j;
  }
  return false;
}

console.log(twosun(nums, 9));
