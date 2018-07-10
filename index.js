var button_content=document.querySelector('.div');
button_content.addEventListener('click', updateName);
function updateName() {
  var name = prompt('Enter name');
  button_content.textContent=name;
}
var button_content2=document.querySelector('.div2');
button_content2.addEventListener('click', updateName2);
function updateName2() {
  var name2 = prompt('Enter name');
  button_content2.textContent=name2;
}
var button_content3=document.querySelector('.div3');
button_content3.addEventListener('click', updateName3);
function updateName3() {
  var name3 = prompt('Enter name');
  button_content3.textContent=name3;
}
var score=1;
var button_score=document.querySelector('.p');
button_score.addEventListener('click', updateScore);
function updateScore(){
  score = prompt('Enter Score');
  button_score.textContent=score;
}
var score2=1;
var button_score2=document.querySelector('.p2');
button_score2.addEventListener('click', updateScore2);
function updateScore2(){
  score2 = prompt('Enter Score');
  button_score2.textContent=score2;
}
var score3=1;
var button_score3=document.querySelector('.p3');
button_score3.addEventListener('click', updateScore3);
function updateScore3(){
  score3 = prompt('Enter Score');
  button_score3.textContent=score3;
}
updateName();
updateScore();
updateName2();
updateScore2();
updateName3();
updateScore3();
var avg=(Number(score)+Number(score2)+Number(score3))/3;
var button_average=document.querySelector('.a');
button_average.addEventListener('click', calcAverage);
function calcAverage(){
  var average= alert(avg);
}