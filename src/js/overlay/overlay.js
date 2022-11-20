import './overlay.scss';
import { closePopup } from '../listeners';



export default function renderPopup() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.id = 'overlay';
  const popup = document.createElement('div');
  popup.classList.add('overlay_popup');
  const popupText = document.createElement('p');
  popupText.id = 'popupText';
  const buttonClosePopup = document.createElement('button');
  buttonClosePopup.classList.add('button', 'book_button', 'book_closePopup_button');
  buttonClosePopup.innerHTML = 'Close';
  buttonClosePopup.addEventListener('click', () => closePopup());
  popup.append(popupText, buttonClosePopup);
  overlay.append(popup);
  return overlay;
}


