menufilter = document.querySelector('#menufilter')
applybtn1 = document.querySelector('#applybtn1')
filterbtn = document.querySelector('#filterbtn')

typesbtn = document.querySelector('#typesbtn')
sexsbtn = document.querySelector('#sexsbtn')
colorsbtn = document.querySelector('#colorsbtn')
sizesbtn = document.querySelector('#sizesbtn')
sezonsbtn = document.querySelector('#sezonsbtn')
materialsbtn = document.querySelector('#materialsbtn')

menutype = document.querySelector('#menutype')
menusex = document.querySelector('#menusex')
menucolor = document.querySelector('#menucolor')
menusize = document.querySelector('#menusize')
menusezon = document.querySelector('#menusezon')
menumaterial = document.querySelector('#menumaterial')



filterbtn.onclick = function () {
  if (getComputedStyle(menufilter).display == "none") {
    menufilter.style = "display: block";
  }
}

applybtn1.onclick = function () {
  if (getComputedStyle(menufilter).display == "block") {
    menufilter.style = "display: none";
  }
}

typesbtn.onclick = function () {
  if (getComputedStyle(menutype).display == "none") {
    menutype.style = "display: block";
    menufilter.style = "display: none";
  }
}

backbtn1.onclick = function () {
    menutype.style = "display: none";
    menufilter.style = "display: block";
}

applybtn2.onclick = function () {
  menutype.style = "display: none";
  menufilter.style = "display: block";
}

sexsbtn.onclick = function () {
  menusex.style = "display: block";
  menufilter.style = "display: none";
}

backbtn2.onclick = function () {
    menusex.style = "display: none";
    menufilter.style = "display: block";
}

applybtn3.onclick = function () {
  menusex.style = "display: none";
  menufilter.style = "display: block";
}

colorsbtn.onclick = function () {
  menucolor.style = "display: block";
  menufilter.style = "display: none";
}

backbtn3.onclick = function () {
    menucolor.style = "display: none";
    menufilter.style = "display: block";
}

applybtn4.onclick = function () {
  menucolor.style = "display: none";
  menufilter.style = "display: block";
}

sizesbtn.onclick = function () {
  menusize.style = "display: block";
  menufilter.style = "display: none";
}

backbtn4.onclick = function () {
    menusize.style = "display: none";
    menufilter.style = "display: block";
}

applybtn5.onclick = function () {
  menusize.style = "display: none";
  menufilter.style = "display: block";
}

sezonsbtn.onclick = function () {
  menusezon.style = "display: block";
  menufilter.style = "display: none";
}

backbtn5.onclick = function () {
    menusezon.style = "display: none";
    menufilter.style = "display: block";
}

applybtn6.onclick = function () {
  menusezon.style = "display: none";
  menufilter.style = "display: block";
}

materialsbtn.onclick = function () {
  menumaterial.style = "display: block";
  menufilter.style = "display: none";
}

backbtn6.onclick = function () {
    menumaterial.style = "display: none";
    menufilter.style = "display: block";
}

applybtn7.onclick = function () {
  menumaterial.style = "display: none";
  menufilter.style = "display: block";
}

