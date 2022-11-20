export function closePopup() {
  document.getElementById('overlay').classList.remove('show');
}

export function showMoreAboutBook(description) {
  document.getElementById('overlay').classList.add('show');
  document.getElementById('popupText').innerHTML = description;
  console.log(description);
}
