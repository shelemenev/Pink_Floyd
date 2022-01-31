function init() {

let image = document.querySelectorAll('img')

for (let j = 0, lj = image.length; j < lj; j++)
  image[j].onclick = function () {
    showPopup(image, j)
  }
}

function closePopup() {
  let popup = document.querySelector('.popup')
  let popupContainer = document.querySelector('#popup_container')

  popupContainer.style.display = 'none'
  popup.style.display = 'none'
}

function showPopup(images, index) {
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
  left.onclick = () => showPopup(images, index - 1)
  left.innerHTML = 'LEFT'
  left.className = 'button_left'
  const right = document.createElement('div')
  right.onclick = () => showPopup(images, index + 1)
  right.innerHTML = 'RIGHT'
  right.className = 'button_right'
  const img = document.createElement('img')
  img.style.width = `${size}px`
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
}