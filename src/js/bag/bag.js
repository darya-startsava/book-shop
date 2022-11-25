import './bag.scss';

function allowDrop(ev) {
  ev?.preventDefault();
}

function drop(ev) {
  ev?.preventDefault();
  const data = ev?.dataTransfer?.getData('text');
  const parent = document.getElementById(data);
  const children = parent.querySelector('.book_addToBag_button');
  children.click();
}

export function renderBag() {
  const bagWrapper = document.createElement('section');
  bagWrapper.classList.add('bag_wrapper');
  const h2 = document.createElement('h2');
  h2.classList.add('bag_title');
  h2.innerHTML = 'Your bag';
  const bagBooksWrapper = document.createElement('div');
  bagBooksWrapper.classList.add('bag_books_wrapper');
  bagBooksWrapper.id = 'bag_books_wrapper';
  bagBooksWrapper.addEventListener('drop', (ev) => drop(ev));
  bagBooksWrapper.addEventListener('dragover', (ev) => allowDrop(ev));
  const totalPrice = document.createElement('p');
  const numberTotalPrice = document.createElement('span');
  totalPrice.classList.add('bag_total_price');
  numberTotalPrice.id = 'bag_total_price';
  numberTotalPrice.innerHTML = 0;
  totalPrice.innerHTML = 'TotalPrice: ';
  totalPrice.append(numberTotalPrice);
  const confirmOrderButtonWrapper = document.createElement('div');
  confirmOrderButtonWrapper.classList.add('confirmOrder_button_wrapper');
  const confirmOrderButton = document.createElement('a');
  confirmOrderButton.type = 'button';
  confirmOrderButton.href = './order';
  confirmOrderButton.classList.add('button', 'confirmOrder_button');
  confirmOrderButton.innerHTML = 'Confirm order';
  confirmOrderButtonWrapper.append(confirmOrderButton);
  bagWrapper.append(h2, bagBooksWrapper, totalPrice, confirmOrderButtonWrapper);
  return bagWrapper;
}
