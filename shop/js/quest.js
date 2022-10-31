h1 = document.querySelector('#h1')
h2 = document.querySelector('#h2')
h3 = document.querySelector('#h3')
h4 = document.querySelector('#h4')
h5 = document.querySelector('#h5')
h6 = document.querySelector('#h6')
h7 = document.querySelector('#h7')

p1 = document.querySelector('#p1')
p2 = document.querySelector('#p2')
p3 = document.querySelector('#p3')
p4 = document.querySelector('#p4')
p5 = document.querySelector('#p5')
p6 = document.querySelector('#p6')
p7 = document.querySelector('#p7')

h1.onclick = function () {
  if (getComputedStyle(p1).display == "none") {
    h1.style = "color: rgb(24, 25, 28);";
    p1.style = "display: block;";
    p2.style = "display: none;";
    p3.style = "display: none;";
    p4.style = "display: none;";
    p5.style = "display: none;";
    p6.style = "display: none;";
    p7.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    p1.style = "display: none;";
  }
};

h2.onclick = function () {
  if (getComputedStyle(p2).display == "none") {
    h2.style = "color: rgb(24, 25, 28);";
    p2.style = "display: block;";
    p1.style = "display: none;";
    p3.style = "display: none;";
    p4.style = "display: none;";
    p5.style = "display: none;";
    p6.style = "display: none;";
    p7.style = "display: none;";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    p2.style = "display: none;";
  }
};

h3.onclick = function () {
  if (getComputedStyle(p3).display == "none") {
    h3.style = "color: rgb(24, 25, 28);";
    p3.style = "display: block;";
    p2.style = "display: none;";
    p1.style = "display: none;";
    p4.style = "display: none;";
    p5.style = "display: none;";
    p6.style = "display: none;";
    p7.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    p3.style = "display: none;";
  }
};

h4.onclick = function () {
  if (getComputedStyle(p4).display == "none") {
    h4.style = "color: rgb(24, 25, 28);";
    p4.style = "display: block;";
    p2.style = "display: none;";
    p3.style = "display: none;";
    p1.style = "display: none;";
    p5.style = "display: none;";
    p6.style = "display: none;";
    p7.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    p4.style = "display: none;";
  }
};

h5.onclick = function () {
  if (getComputedStyle(p5).display == "none") {
    h5.style = "color: rgb(24, 25, 28);";
    p5.style = "display: block;";
    p2.style = "display: none;";
    p3.style = "display: none;";
    p4.style = "display: none;";
    p1.style = "display: none;";
    p6.style = "display: none;";
    p7.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    p5.style = "display: none;";
  }
};

h6.onclick = function () {
  if (getComputedStyle(p6).display == "none") {
    h6.style = "color: rgb(24, 25, 28);";
    p6.style = "display: block;";
    p2.style = "display: none;";
    p3.style = "display: none;";
    p4.style = "display: none;";
    p5.style = "display: none;";
    p1.style = "display: none;";
    p7.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
    h7.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    p6.style = "display: none;";
  }
};

h7.onclick = function () {
  if (getComputedStyle(p7).display == "none") {
    h7.style = "color: rgb(24, 25, 28);";
    p7.style = "display: block;";
    p2.style = "display: none;";
    p3.style = "display: none;";
    p4.style = "display: none;";
    p5.style = "display: none;";
    p6.style = "display: none;";
    p1.style = "display: none;";
    h2.style = "color: rgba(0, 0, 0, 0.4);";
    h3.style = "color: rgba(0, 0, 0, 0.4);";
    h4.style = "color: rgba(0, 0, 0, 0.4);";
    h5.style = "color: rgba(0, 0, 0, 0.4);";
    h6.style = "color: rgba(0, 0, 0, 0.4);";
    h1.style = "color: rgba(0, 0, 0, 0.4);";
  }
  else {
    h7.style = "color: rgba(0, 0, 0, 0.4);";
    p7.style = "display: none;";
  }
};
