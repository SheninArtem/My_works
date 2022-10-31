
dropbtn1 = document.querySelector('#dropbtn1');
dropbtn2 = document.querySelector('#dropbtn2');
dropbtn3 = document.querySelector('#dropbtn3');
dropbtn4 = document.querySelector('#dropbtn4');

myDropdown1 = document.querySelector('#myDropdown1')
myDropdown2 = document.querySelector('#myDropdown2')
myDropdown3 = document.querySelector('#myDropdown3')
myDropdown4 = document.querySelector('#myDropdown4')


burgersvg = document.querySelector('#burgersvg')
burgerlist = document.querySelector('#burgerlist')

burgeritem1 = document.querySelector('#burgeritem1')
burgeritem2 = document.querySelector('#burgeritem2')
burgeritem3 = document.querySelector('#burgeritem3')
burgeritem4 = document.querySelector('#burgeritem4')

burgerpodlist = document.querySelector('#burgerpodlist')



dropbtn1.onclick = function () {
  if (getComputedStyle(myDropdown1).display == "none") {
  myDropdown1.style = "display: block";
  myDropdown2.style = "display: none";
  myDropdown3.style = "display: none";
  myDropdown4.style = "display: none";
  }
  else {
    myDropdown1.style = "display: none"
  }
}

dropbtn2.onclick = function () {
  if (getComputedStyle(myDropdown2).display == "none") {
  myDropdown1.style = "display: none";
  myDropdown2.style = "display: block";
  myDropdown3.style = "display: none";
  myDropdown4.style = "display: none";
  }
  else {
    myDropdown2.style = "display: none"
  }
}

dropbtn3.onclick = function () {
  if (getComputedStyle(myDropdown3).display == "none") {
    myDropdown1.style = "display: none";
    myDropdown2.style = "display: none";
    myDropdown3.style = "display: block";
    myDropdown4.style = "display: none";
  }
  else {
    myDropdown3.style = "display: none"
  }
}

dropbtn4.onclick = function () {
  if (getComputedStyle(myDropdown4).display == "none") {
  myDropdown1.style = "display: none";
  myDropdown2.style = "display: none";
  myDropdown3.style = "display: none";
  myDropdown4.style = "display: block";
  }
  else {
    myDropdown4.style = "display: none"
  }
}

burgersvg.onclick = function () {
  if (getComputedStyle(burgerlist).display == "none") {
    burgerlist.style = "display: flex";
    burgerpodlist.style = "display: none";
  }
  else {
    burgerlist.style = "display: none";
    burgerpodlist.style = "display: none";
  }
}

burgeritem1.onclick = function () {
  if (getComputedStyle(burgerpodlist).display == "none") {
    burgerpodlist.style = "display: flex";
    burgerlist.style = "display: none";
  }
}

burgeritem2.onclick = function () {
  if (getComputedStyle(burgerpodlist).display == "none") {
    burgerpodlist.style = "display: flex";
    burgerlist.style = "display: none";
  }
}

burgeritem3.onclick = function () {
  if (getComputedStyle(burgerpodlist).display == "none") {
    burgerpodlist.style = "display: flex";
    burgerlist.style = "display: none";
  }
}

burgeritem4.onclick = function () {
  if (getComputedStyle(burgerpodlist).display == "none") {
    burgerpodlist.style = "display: flex";
    burgerlist.style = "display: none";
  }
}


