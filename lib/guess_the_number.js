var name = prompt("WHO YOU?");
var randomnumber = Math.floor(Math.random()*11);
console.log(randomnumber);
alert("Hi " + name + " guess a number between 1-10");
var answer = 0


while(answer !== randomnumber){
  var answer = prompt("And the number is ::drumroll::");
  console.log(answer);
  if(parseInt(answer) > randomnumber){
    alert("You're too high buddy! literally")
  }else if(parseInt(answer) < randomnumber){
    alert("You're too low!! CMON!!")

  }else{
    alert("correct")
    break
  }
}
