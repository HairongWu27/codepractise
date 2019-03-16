/*
search insert position

Given a sorted array and a target value, return the index 
if the target is found. If not, return the index where it
would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
var ary1= [1,3,5,6];

function aryinsert(a, target){
  var left=0, right=a.length-1;
  if(a[right]<target)return right;
  while(left<right){
    var mid= Math.round(left+(right-left)/2);
    if( a[mid] === target) return mid;
    else if( a[mid]<target) left= mid+1;
    else right = mid;

  }
  //console.log(right);
  return right;
}

console.log(aryinsert(ary1, 5));
console.log(aryinsert(ary1, 7));