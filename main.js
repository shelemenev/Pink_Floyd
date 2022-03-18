let width = 0
let interval

function animation() {
  const picture = document.querySelector('.picture')
  if(!picture) {
    return
  }
  if(width === 50) {
    clearInterval(interval)
  }

  picture.style.width = width + '%'
  picture.style.marginInline = (100 - width) / 2 + '%'
  width = width + 2
}

function init() {
  interval = setInterval(() => animation(), 100)
}