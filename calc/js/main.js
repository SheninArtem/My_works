 var modal = document.getElementById("dolgModal");
 var btn = document.getElementById("btn_modal_window");
 var span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var btn1 = document.getElementById("btn1");
var dolgquiz1 = document.getElementById("dolgquiz1");
var dolgquiz2 = document.getElementById("dolgquiz2");

btn1.onclick = function () {
   dolgquiz2.style.display = "block";
   dolgquiz1.style.display = "none";
}
btn2.onclick = function () {
   dolgquiz2.style.display = "none";
   dolgquiz1.style.display = "block";
}
