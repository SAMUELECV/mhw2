/* REGISTRAZIONE */

function onClick(event) {
    const login = document.querySelector('#login');
    isVisible = !isVisible;
  if (isVisible) {
    login.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }
  else {
    login.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }
}
let isVisible = false;

const detailLogin = document.querySelector('#mobileUser');
detailLogin.addEventListener('click', onClick);

/* CREAZIONE ALBUM FOTO */ 

const photo_list = [];

function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

const albumView = document.querySelector('#FBoxImg');
for (let i = 0; i < photo_list.length; i++) {
  const photoSrc = photo_list[i];
  const image = createImage(photoSrc);
  albumView.appendChild(image);
}

/* CLICK IMMAGINI PANINO SUSI ECC */

function onThumbnailClick(event) {
const modalView = document.querySelector('#modalView');
const image = createImage(event.currentTarget.src);
document.body.classList.add('no-scroll');
modalView.innerHTML = '';
modalView.appendChild(image);
modalView.classList.remove('hidden');
}

function onModalClick(event) {
  document.body.classList.remove('no-scroll');
  const modalView = document.querySelector('#modalView');
  modalView.classList.add('hidden');
}

const modalView = document.querySelector('#modalView');
modalView.addEventListener('click', onModalClick);

const galleriaItems = document.querySelectorAll('#FBoxImg img');
for (let i = 0; i < galleriaItems.length; i++) {
  const item = galleriaItems[i];
  item.addEventListener('click', onThumbnailClick);
}