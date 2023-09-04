const images = document.querySelectorAll('.wrapper .image img')
const prev = document.querySelector('.control.prev')
const next = document.querySelector('.control.next')
const close = document.querySelector('.gallery .close')
const gallery = document.querySelector('.gallery')
const galleyImg = document.querySelector('.gallery__inner img')
let currentIndex = 0
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index
    showGallery(index)
  })
})
function showGallery(index) {
  console.log('🚀 >>>>> showGallery >>>>> index:', index)

  index === images.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')
  index === 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
  gallery.classList.add('show')
  galleyImg.src = images[index].src
}
close.addEventListener('click', () => {
  gallery.classList.remove('show')
})
next.addEventListener('click', () => {
  if (currentIndex != images.length) currentIndex++
  showGallery(currentIndex)
})
prev.addEventListener('click', () => {
  if (currentIndex != 0) currentIndex--
  showGallery(currentIndex)
})
document.addEventListener('keydown', (event) => {
  if (event.keyCode == 27) gallery.classList.remove('show')
})
