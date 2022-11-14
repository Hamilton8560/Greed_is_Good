/*Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)



In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
//initialize dice values and points
let one=0,two=0,three=0,four=0,five=0,six=0;
var points=0;
//loop through array, collect values, assign to dice.
for(var i = 0; i < dice.length;i++){
  switch(dice[i]){

    case 1:
      one++
      break
    case 2:
      two++
      break
    case 3:
      three++
      break
    case 4:
      four++
      break
    case 5:
      five++
      break
    case 6:
      six++
      break
    default:
      return dice[i]+" is an incorrect entry\nchoose between 1 and 6"
      
  }
}
//assign points 
while(one>=3){
  points+=1000;
  one-=3;
}
while (one>=1){
  points+=100;
  one--;
}
while(five>=3){
  points+=500;
  five-=3;
}
while (five>=1){
  points+=50;
  five--;
}
while(six>=3){
  points+=600
  six-=3
}
while(four>=3){
  points+=400
  four-=3;
}
while(three>=3){
  points+=300
  three-=3
}
while(two>=3){
  points+=200
  two-=3
}

return points;
}
//test code
var test_1=[5,1,3,4,1]
var test_2=[1,1,1,3,1]
var test_3=[2,4,4,5,4]
//expected outcomes:
//250
console.log(score(test_1))
//1100
console.log(score(test_2))
//450
console.log(score(test_3))