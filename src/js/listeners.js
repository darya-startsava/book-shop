export function closePopup() {
  document.getElementById('overlay').classList.remove('show');
}

export function showMoreAboutBook(description) {
  document.getElementById('overlay').classList.add('show');
  document.getElementById('popupText').innerHTML = description;
}

export function addToBag(book) {
  const { author, title, price } = book;
  const bagBookItem = document.createElement('div');
  bagBookItem.classList.add('bag_book_item');
  const bagBookAuthor = document.createElement('h4');
  const bagBookTitle = document.createElement('h4');
  const bagBookpriceP = document.createElement('p');
  const buttonRemoveBook = document.createElement('button');
  buttonRemoveBook.classList.add('button_remove_book');
  buttonRemoveBook.addEventListener('click', (e) => removeBook(e));
  buttonRemoveBook.innerHTML = 'x';
  bagBookAuthor.innerHTML = author;
  bagBookTitle.innerHTML = title;
  bagBookpriceP.innerHTML = `Price: ${price}`;
  bagBookItem.append(bagBookAuthor, bagBookTitle, bagBookpriceP, buttonRemoveBook);
  document.getElementById('bag_books_wrapper').append(bagBookItem);
  document.getElementById('bag_total_price').innerHTML =
    +document.getElementById('bag_total_price').innerHTML + price;
}

function removeBook(e) {
  const bookElement = e.target.closest('.bag_book_item');
  const price = bookElement.querySelector('p').innerHTML.slice(6);
  document.getElementById('bag_total_price').innerHTML =
    +document.getElementById('bag_total_price').innerHTML - +price;
  bookElement.remove();
}

let isValidName = false;
let isValidSurname = false;
let isValidDeliveryDate = false;
let isValidStreet = false;
let isValidHouse = false;
let isValidFlat = false;
let isValidGift = true;
const buttonCompleteOrder = document.getElementById('complete_order_button');

function checkIsValidForm() {
  if (
    isValidName &&
    isValidSurname &&
    isValidDeliveryDate &&
    isValidStreet &&
    isValidHouse &&
    isValidFlat &&
    isValidGift
  ) {
    buttonCompleteOrder.disabled = false;
  } else {
    buttonCompleteOrder.disabled = true;
  }
}

export function inputStringValidation(length) {
  let type = 'name';
  if (length === 5) {
    type = 'surname';
  }

  const message = document.getElementById(`input_${type}_message`);
  const errorMessage = `The field is invalid. Please enter at least ${length} letter symbols without space`;
  const value = document.getElementById(`input_${type}`).value;
  if (!value) {
    message.innerHTML = errorMessage;
  } else if (value?.length < length) {
    message.innerHTML = errorMessage;
  } else if (value?.match(/[a-z]/gi).length !== value.length) {
    message.innerHTML = errorMessage;
  } else {
    message.innerHTML = '';
  }
  if (message.innerHTML) {
    type === 'name' ? (isValidName = false) : (isValidSurname = false);
    document.getElementById(`input_${type}`).classList.add('error');
  } else {
    type === 'name' ? (isValidName = true) : (isValidSurname = true);
    document.getElementById(`input_${type}`).classList.remove('error');
  }
  checkIsValidForm();
}
export function inputDateValidation() {
  let isCorrect = true;
  const errorMessage =
    'The field is invalid. Please enter a day not earlier than next day';
  const value = document
    .getElementById('input_date')
    .value.split('-')
    .map((i) => Number(i));
  const message = document.getElementById('input_date_message');
  const currentDate = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate(),
  ];
  if (
    value[0] === currentDate[0] &&
    value[1] === currentDate[1] &&
    value[2] <= currentDate[2]
  ) {
    isCorrect = false;
  }
  message.innerHTML = isCorrect ? '' : errorMessage;
  isValidDeliveryDate = isCorrect ? true : false;
  isCorrect
    ? document.getElementById('input_date').classList.remove('error')
    : document.getElementById('input_date').classList.add('error');
  checkIsValidForm();
}

export function inputStreetValidation() {
  const message = document.getElementById('input_street_message');
  const errorMessage =
    'The field is invalid. Please enter at least 5 letter or digit symbols';
  const value = document.getElementById('input_street').value;
  if (value.length < 5) {
    message.innerHTML = errorMessage;
  } else if (value.match(/[a-z0-9]/gi).length !== value.length) {
    message.innerHTML = errorMessage;
  } else {
    message.innerHTML = '';
  }
  isValidStreet = message.innerHTML ? false : true;
  isValidStreet
    ? document.getElementById('input_street').classList.remove('error')
    : document.getElementById('input_street').classList.add('error');
  checkIsValidForm();
}

export function inputHouseValidation() {
  const message = document.getElementById('input_house_message');
  const errorMessage = 'The field is invalid. Please enter only positive numbers';
  const value = document.getElementById('input_house').value;
  if (!value) {
    message.innerHTML = errorMessage;
  } else if (!isNaN(Number(value) && Number(value) > 0)) {
    message.innerHTML = '';
  } else message.innerHTML = errorMessage;
  isValidHouse = message.innerHTML ? false : true;
  isValidHouse
    ? document.getElementById('input_house').classList.remove('error')
    : document.getElementById('input_house').classList.add('error');
  checkIsValidForm();
}

export function inputFlatValidation() {
  const message = document.getElementById('input_flat_message');
  const errorMessage = 'The field is invalid. Please enter only positive numbers';
  const value = document.getElementById('input_flat').value;
  if (!value) {
    message.innerHTML = errorMessage;
  } else if (
    value?.match(/[0-9-]/g)?.length === value?.length &&
    value?.[0] !== '-'
  ) {
    message.innerHTML = '';
  } else message.innerHTML = errorMessage;
  isValidFlat = message.innerHTML ? false : true;
  isValidFlat
    ? document.getElementById('input_flat').classList.remove('error')
    : document.getElementById('input_flat').classList.add('error');
  checkIsValidForm();
}

export function checkboxesGiftValidation() {
  const message = document.getElementById('checkboxes_gift_message');
  const errorMessage = 'Please choose no more than 2 gifts';
  const chosen = document.querySelectorAll('input[name=gift]:checked');
  if (chosen?.length > 2) {
    message.innerHTML = errorMessage;
  } else message.innerHTML = '';
  isValidGift = message.innerHTML ? false : true;
  checkIsValidForm();
}
