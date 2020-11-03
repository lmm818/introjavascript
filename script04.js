function checking(num) {

  if (num == 18) {
    console.log("you can vote! welcome first timer");
  } else if (num >= 19){
    console.log("you can vote!");
  } else if (num == 17){
    console.log("you can pre-register to vote!");
  } else {
    console.log("sorry you cant vote yet");
  }

}


checking(20);
checking(19);
checking(18);
checking(17);
checking(15);
checking(102);
