var userName = 'Amir';
userName ? console.log(`Hello ${userName}!`) :
console.log('Hello!');
const userQuestion = 'Will i be rich?';
console.log(`${userName} asked - ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch(randomNumber){
  case 0:
  eightBall = ('It is certain');
  break;
  case 1:
  eoghtBall = ('It is decidedly so');
  break;
  case 2:
  eightBall = ('Reply hazy try again');
  break;
  case 3:
  eightBall = ('Do not count on it');
  break;
  case 4:
  eightBall = ('My sources say no');
  break;
  case 5:
  eightBall = ('Outlook not so good');
  break;
  case 6:
  eightBall = ('Signs point to yes');
  break;
}
console.log(`The magic 8 ball says - ${eightBall}`);
