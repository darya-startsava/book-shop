import '../order.scss';
import { inputStringValidation, inputDateValidation, inputStreetValidation } from './listeners';

const inputName = document.getElementById('input_name');
inputName.addEventListener('change', () => inputStringValidation(4));
const inputSurname = document.getElementById('input_surname');
inputSurname.addEventListener('change', () => inputStringValidation(5));
const inputDate = document.getElementById('input_date');
inputDate.addEventListener('change', () => inputDateValidation());
const inputStreet = document.getElementById('input_street');
inputStreet.addEventListener('change', () => inputStreetValidation());
