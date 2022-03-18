let images = []
let index = 0
let currentHeight = 0
let scrollInterval

function init() {
  images = document.querySelectorAll('.gallery')

  for (let j = 0, lj = images.length; j < lj; j++)
    images[j].onclick = function () {
    index = j
    showPopup()
  }

  if (document.querySelector('.goup')) {
    document.querySelector('.goup').onclick = function() {
      scrollInterval = setInterval(scrollToEndPage, 40)
    }

    window.addEventListener('scroll', function() {
      currentHeight = document.body.scrollTop
    })
  }
}

function scrollToEndPage() {
  const step = currentHeight / 10

  if (currentHeight > 0) {
    currentHeight -= step
    window.scrollTo(currentHeight + step, currentHeight)
  } else {
    clearInterval(scrollInterval)
    currentHeight = 0
  }
}

function closePopup() {
  window.removeEventListener('keyup', logKey)
  let popup = document.querySelector('.popup')
  let popupContainer = document.querySelector('#popup_container')

  popupContainer.style.display = 'none'
  popup.style.display = 'none'
}

function logKey(event) {
  console.log(event)
  event.preventDefault()
  event.stopPropagation()

  if (event.key === 'ArrowRight') {
    index = index + 1
    showPopup()
  }

  if (event.key === 'ArrowLeft') {
    index = index - 1
    showPopup()
  }

  if (event.key === 'Escape') {
    closePopup()
  }
}

function showPopup() {
  if (index < 0) index = images.length - 1
  if (index >= images.length) index = 0

  let popup = document.querySelector('.popup')

  if (!popup) {
    popup = document.createElement('div')
    popup.className = 'popup popup_container'
    document.body.appendChild(popup)
  }

  let popupContainer = document.querySelector('#popup_container')

  if (!popupContainer) {
    popupContainer = document.createElement('div')
    popupContainer.className = 'popup_container'
    popupContainer.id = 'popup_container'
    document.body.appendChild(popupContainer)
  }

  const size = window.innerWidth / 3
  const left = document.createElement('div')
  left.onclick = () => {
    index = index - 1
    showPopup()
  }

  left.innerHTML = "<img src='images/arrow_left.png'>"
  left.className = 'button_left'
  const right = document.createElement('div')
  right.onclick = () => {
    index = index + 1
    showPopup()
  }

  right.innerHTML = "<img src='images/arrow_left.png' style='transform:rotate(180deg)'>"
  right.className = 'button_right'
  const img = document.createElement('img')
  img.style.height = `${size}px`
  img.onclick = () => closePopup()
  img.src = images[index].src
  img.className = 'popup_image'
  popupContainer.innerHTML = ''
  popupContainer.appendChild(left)
  popupContainer.appendChild(img)
  popupContainer.appendChild(right)
  popupContainer.style.display = 'flex'
  popup.style.display = 'flex'
  const cross = document.createElement('div')
  cross.onclick = () => closePopup()
  cross.innerHTML = "<img src='images/cross.png'>"
  cross.className = 'cross'
  popupContainer.appendChild(cross)

  window.removeEventListener('keyup', logKey)
  window.addEventListener('keyup', logKey)
}