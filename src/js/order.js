import '../order.scss';
import {
  inputStringValidation,
  inputDateValidation,
  inputStreetValidation,
  inputHouseValidation,
  inputFlatValidation,
  checkboxesGiftValidation,
} from './listeners';

const inputName = document.getElementById('input_name');
inputName.addEventListener('change', () => inputStringValidation(4));
const inputSurname = document.getElementById('input_surname');
inputSurname.addEventListener('change', () => inputStringValidation(5));
const inputDate = document.getElementById('input_date');
inputDate.addEventListener('change', () => inputDateValidation());
const inputStreet = document.getElementById('input_street');
inputStreet.addEventListener('change', () => inputStreetValidation());
const inputHouse = document.getElementById('input_house');
inputHouse.addEventListener('change', () => inputHouseValidation());
const inputFlat = document.getElementById('input_flat');
inputFlat.addEventListener('change', () => inputFlatValidation());
const checkboxesGift = document.querySelectorAll('input[name=gift]');
checkboxesGift.forEach((i) =>
  i.addEventListener('change', () => checkboxesGiftValidation())
);
