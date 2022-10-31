sortingbtn = document.querySelector('#sotingbtn')
sortinglist = document.querySelector('#sortinglist')

sortingbtn.onclick = function () {
  if (getComputedStyle(sortinglist).display == "none") {
    sortinglist.style = "display: block";
  }
  else {
    sortinglist.style = "display: none";
  }
}
