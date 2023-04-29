import 'bootstrap/dist/css/bootstrap.min.css';
import { getNumberFact } from './utils.js';

function displayRandomFact() {
  const number = Math.floor(Math.random() * 1000);
  getNumberFact(number)
    .then((response) => {
      const factElement = document.getElementById('fact');
      factElement.innerText = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

const button = document.getElementById('fact-btn');
button.addEventListener('click', displayRandomFact);
