import '../style.scss';
import renderPopup from './overlay/overlay';
import { showMoreAboutBook, addToBag } from './listeners';
import { renderBag } from './bag/bag';

async function bootstrap() {
  const books = await getBooks();
  document.body.append(getContent(books));
}

bootstrap();

async function getBooks() {
  const result = await fetch('./assets/books.json');
  return await result.json();
}

function getBookLIstItem(book) {
  const { author, title, price, imageLink, description } = book;
  const divItem = document.createElement('div');
  divItem.classList.add('book_wrapper');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('book_image_wrapper');
  const image = document.createElement('img');
  image.src = imageLink;
  image.alt = '';
  image.classList.add('book_image');
  imageWrapper.append(image);
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('book_text_wrapper');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const priceP = document.createElement('p');
  textWrapper.append(h3, h4, priceP);
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('book_button_wrapper');
  const buttonShowMore = document.createElement('button');
  const buttonAddToBag = document.createElement('button');
  buttonShowMore.classList.add('button', 'book_button', 'book_showMore_button');
  buttonAddToBag.classList.add('button', 'book_button', 'book_addToBag_button');
  buttonShowMore.innerHTML = 'Show more';
  buttonAddToBag.innerHTML = 'Add to bag';
  buttonShowMore.addEventListener('click', () => showMoreAboutBook(description));
  buttonAddToBag.addEventListener('click', () => addToBag(book));
  buttonWrapper.append(buttonShowMore, buttonAddToBag);
  h3.innerHTML = author;
  h4.innerHTML = title;
  priceP.innerHTML = `Price: ${price}`;
  divItem.append(imageWrapper, textWrapper, buttonWrapper);
  return divItem;
}

function getContent(books) {
  const fragment = new DocumentFragment();
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Book Shop';
  const bodyWrapper = document.createElement('div');
  const bodyContent = document.createElement('div');
  bodyWrapper.classList.add('body_wrapper');
  bodyContent.classList.add('body_content');
  const booksWrapper = document.createElement('section');
  booksWrapper.classList.add('books_wrapper');

  books.forEach((book) => booksWrapper.append(getBookLIstItem(book)));
  bodyContent.append(booksWrapper, renderBag());
  bodyWrapper.append(h1, bodyContent);
  fragment.append(bodyWrapper, renderPopup());
  return fragment;
}
