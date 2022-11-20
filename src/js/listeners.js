export function closePopup() {
  document.getElementById('overlay').classList.remove('show');
}

export function showMoreAboutBook(description) {
  document.getElementById('overlay').classList.add('show');
  document.getElementById('popupText').innerHTML = description;
  console.log(description);
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
