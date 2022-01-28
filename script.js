function init() {

let image = document.querySelectorAll('img')

for (let j = 0, lj = image.length; j < lj; j++)
  image [j].onclick = function () {
    showPopup(this)
  }
}

function closePopup() {
  let popup = document.querySelector('.popup')
  let popupContainer = document.querySelector('#popup_container')

  popupContainer.style.display = 'none'
  popup.style.display = 'none'
}

function showPopup(img) {
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
  popupContainer.innerHTML = `<img style="width: ${size}px; height: ${size}px" onclick="closePopup()" src="${img.src}" class="popup_image">`
  popupContainer.style.display = 'flex'
  popup.style.display = 'flex'
}