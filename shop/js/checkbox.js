const divs = document.querySelectorAll('.catalogbtn');
Array.from(divs).forEach(div => {
    div.addEventListener('click', changeColor);
});

function changeColor() {
    let background = this.style.background;
    let color = this.style.color;
    this.style.background = background? '' : '#375FED';
    this.style.color = color? '' : '#FFFFFF';
}
