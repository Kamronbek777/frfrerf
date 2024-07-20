const inputField = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const outputElement = document.querySelector('h1');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input value and store it in local storage
  const inputValue = inputField.value;
  localStorage.setItem('value', inputValue);

  // Update the output element with the stored value
  outputElement.textContent = localStorage.getItem('value');
});