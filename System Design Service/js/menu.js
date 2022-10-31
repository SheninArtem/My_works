const overlays = document.querySelectorAll('.overlays')
const btn_open = document.querySelector('.btn-open')
const btn_close = document.querySelector('.btn-close')

for (const over of overlays) {
  btn_open.addEventListener('click', () => {
    hiddenOffmenu();
    btn_open.classList.add('btn-close');
    btn_open.classList.remove('mob-menu');
    btn_close.classList.remove('btn-close');
  })
}

for (const over of overlays) {
  btn_close.addEventListener('click', () => {
    hiddenOpenmenu()
    btn_open.classList.remove('btn-close')
    btn_close.classList.add('btn-close')
  })
}

function hiddenOffmenu () {
  overlays.forEach((over) => {
    over.classList.remove('spec-none')
  })
}

function hiddenOpenmenu () {
  overlays.forEach((over) => {
    over.classList.add('spec-none')
  })
}
