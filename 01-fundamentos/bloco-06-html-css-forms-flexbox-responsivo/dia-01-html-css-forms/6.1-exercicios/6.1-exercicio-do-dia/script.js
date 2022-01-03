// Seletores
const selectStates = document.getElementById('select-states');
const inputSubmit = document.getElementById('input-submit');
const inputClean = document.getElementById('input-clean');
const displayConclusion = document.getElementById('form-conclusion');
// Forms
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const inputState = document.getElementById('select-states');
let inputRadioHouse = document.querySelector('[name="radio-type"]:checked');
const dataStarts = document.getElementById('input-data-starts');

// https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
const allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

function refreshInputUser() {
  const allInputText = document.querySelectorAll('.input-user');
  return allInputText;
}

function createState(indexValue) {
    const state = document.createElement('option');
    state.innerText = indexValue;
    selectStates.appendChild(state);
}

function minimalLength() { 
  
}

function customSubmit(event) {
  event.preventDefault();
   
  
}

// remove o checked de todos radios buttons que pertencem ao nome radio-type
function cleanRadioButton() {
  inputRadioHouse = document.querySelector('[name="radio-type"]:checked');
  inputRadioHouse.checked = false;
}

// Esvazia os valores de cada campo coletado na funcao de cleanForms.
function cleanInputText(index) {
  index.value = '';
}

// Coleta todos classes de input do usuário.
function cleanForms() {
  const allInputText = refreshInputUser();
  allInputText.forEach(cleanInputText);
  cleanRadioButton();
  displayConclusion.innerText = '';
}

function fullLoad() {
  allStates.forEach(createState);  
  inputSubmit.addEventListener('click', customSubmit);
  inputClean.addEventListener('click', cleanForms)
}

window.onload = fullLoad();