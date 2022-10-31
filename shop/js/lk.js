var timeVar = '';

btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('#btn2');
btn3 = document.querySelector('#btn3');
btn4 = document.querySelector('#btn4');
btn5 = document.querySelector('#btn5');
btn6 = document.querySelector('#btn6');

block1 = document.querySelector('#block1')
block2 = document.querySelector('#block2')
block3 = document.querySelector('#block3')
block4 = document.querySelector('#block4')
block5 = document.querySelector('#block5')
block6 = document.querySelector('#block6')

btnm1 = document.querySelector('#btnm1');
btnm2 = document.querySelector('#btnm2');
btnm3 = document.querySelector('#btnm3');
btnm4 = document.querySelector('#btnm4');
btnm5 = document.querySelector('#btnm5');
btnm6 = document.querySelector('#btnm6');

blockm1 = document.querySelector('#blockm1')
blockm2 = document.querySelector('#blockm2')
blockm3 = document.querySelector('#blockm3')
blockm4 = document.querySelector('#blockm4')
blockm5 = document.querySelector('#blockm5')
blockm6 = document.querySelector('#blockm6')

btn1.onclick = function () {
  btn1.style = "border-bottom: 3px solid #375FED";
  btn2.style = "border-bottom: none";
  btn3.style = "border-bottom: none";
  btn4.style = "border-bottom: none";
  btn5.style = "border-bottom: none";
  btn6.style = "border-bottom: none;";
  block1.style = "display: block";
  block2.style = "display: none";
  block3.style = "display: none";
  block4.style = "display: none";
  block5.style = "display: none";
  block6.style = "display: none";
}

btn2.onclick = function () {
  btn1.style = "border-bottom: none";
  btn2.style = "border-bottom: 3px solid #375FED";
  btn3.style = "border-bottom: none";
  btn4.style = "border-bottom: none";
  btn5.style = "border-bottom: none";
  btn6.style = "border-bottom: none;";
  block1.style = "display: none";
  block2.style = "display: flex";
  block3.style = "display: none";
  block4.style = "display: none";
  block5.style = "display: none";
  block6.style = "display: none";
}

btn3.onclick = function () {
  btn1.style = "border-bottom: none";
  btn2.style = "border-bottom: none";
  btn3.style = "border-bottom: 3px solid #375FED";
  btn4.style = "border-bottom: none";
  btn5.style = "border-bottom: none";
  btn6.style = "border-bottom: none;";
  block1.style = "display: none";
  block2.style = "display: none";
  block3.style = "display: block";
  block4.style = "display: none";
  block5.style = "display: none";
  block6.style = "display: none";
}

btn4.onclick = function () {
  btn1.style = "border-bottom: none";
  btn2.style = "border-bottom: none";
  btn3.style = "border-bottom: none";
  btn4.style = "border-bottom: 3px solid #375FED";
  btn5.style = "border-bottom: none";
  btn6.style = "border-bottom: none;";
  block1.style = "display: none";
  block2.style = "display: none";
  block3.style = "display: none";
  block4.style = "display: block";
  block5.style = "display: none";
  block6.style = "display: none";
}

btn5.onclick = function () {
  btn1.style = "border-bottom: none";
  btn2.style = "border-bottom: none";
  btn3.style = "border-bottom: none";
  btn4.style = "border-bottom: none";
  btn5.style = "border-bottom: 3px solid #375FED";
  btn6.style = "border-bottom: none;";
  block1.style = "display: none";
  block2.style = "display: none";
  block3.style = "display: none";
  block4.style = "display: none";
  block5.style = "display: block";
  block6.style = "display: none";
}

btn6.onclick = function () {
  btn1.style = "border-bottom: none";
  btn2.style = "border-bottom: none";
  btn3.style = "border-bottom: none";
  btn4.style = "border-bottom: none";
  btn5.style = "border-bottom: none";
  btn6.style = "border-bottom: 3px solid #375FED;";
  block1.style = "display: none";
  block2.style = "display: none";
  block3.style = "display: none";
  block4.style = "display: none";
  block5.style = "display: none";
  block6.style = "display: block";
}



btnm1.onclick = function () {
  btnm1.style = "border-bottom: 3px solid #375FED";
  btnm2.style = "border-bottom: none";
  btnm3.style = "border-bottom: none";
  btnm4.style = "border-bottom: none";
  btnm5.style = "border-bottom: none";
  btnm6.style = "border-bottom: none;";
  blockm1.style = "display: block";
  blockm2.style = "display: none";
  blockm3.style = "display: none";
  blockm4.style = "display: none";
  blockm5.style = "display: none";
  blockm6.style = "display: none";
}

btnm2.onclick = function () {
  btnm1.style = "border-bottom: none";
  btnm2.style = "border-bottom: 3px solid #375FED";
  btnm3.style = "border-bottom: none";
  btnm4.style = "border-bottom: none";
  btnm5.style = "border-bottom: none";
  btnm6.style = "border-bottom: none;";
  blockm1.style = "display: none";
  blockm2.style = "display: flex";
  blockm3.style = "display: none";
  blockm4.style = "display: none";
  blockm5.style = "display: none";
  blockm6.style = "display: none";
}

btnm3.onclick = function () {
  btnm1.style = "border-bottom: none";
  btnm2.style = "border-bottom: none";
  btnm3.style = "border-bottom: 3px solid #375FED";
  btnm4.style = "border-bottom: none";
  btnm5.style = "border-bottom: none";
  btnm6.style = "border-bottom: none;";
  blockm1.style = "display: none";
  blockm2.style = "display: none";
  blockm3.style = "display: block";
  blockm4.style = "display: none";
  blockm5.style = "display: none";
  blockm6.style = "display: none";
}

btnm4.onclick = function () {
  btnm1.style = "border-bottom: none";
  btnm2.style = "border-bottom: none";
  btnm3.style = "border-bottom: none";
  btnm4.style = "border-bottom: 3px solid #375FED";
  btnm5.style = "border-bottom: none";
  btnm6.style = "border-bottom: none;";
  blockm1.style = "display: none";
  blockm2.style = "display: none";
  blockm3.style = "display: none";
  blockm4.style = "display: block";
  blockm5.style = "display: none";
  blockm6.style = "display: none";
}

btnm5.onclick = function () {
  btnm1.style = "border-bottom: none";
  btnm2.style = "border-bottom: none";
  btnm3.style = "border-bottom: none";
  btnm4.style = "border-bottom: none";
  btnm5.style = "border-bottom: 3px solid #375FED";
  btnm6.style = "border-bottom: none;";
  blockm1.style = "display: none";
  blockm2.style = "display: none";
  blockm3.style = "display: none";
  blockm4.style = "display: none";
  blockm5.style = "display: block";
  blockm6.style = "display: none";
}

btnm6.onclick = function () {
  btnm1.style = "border-bottom: none";
  btnm2.style = "border-bottom: none";
  btnm3.style = "border-bottom: none";
  btnm4.style = "border-bottom: none";
  btnm5.style = "border-bottom: none";
  btnm6.style = "border-bottom: 3px solid #375FED;";
  blockm1.style = "display: none";
  blockm2.style = "display: none";
  blockm3.style = "display: none";
  blockm4.style = "display: none";
  blockm5.style = "display: none";
  blockm6.style = "display: block";
}



