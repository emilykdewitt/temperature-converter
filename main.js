//prints to the DOM using a div ID
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

//converts a Fahrenheit temp to Celsius
const toCelsius = (temp) => {
  return ((temp - 32) * (5/9)).toFixed(1);
};
//converts a Celsius temp to Fahrenheit
const toFahrenheit = (temp) => {
  return ((temp * (9/5)) + 32).toFixed(1);
};

//determines the type of temperature and uses toCelsius or to Fahrenheit to convert the temp accordingly
const determineConverter = (e) => {
    e.preventDefault();
    let domString = ``;
    const temp = document.getElementById('tempInput').value;
    if (document.getElementById('celsius').checked) {
        tempType = 'Celsius';
        newTemp = toFahrenheit(temp);
        domString += `<div class=`;
          if (newTemp <= 32) {
            domString += `"freezing"`;
          } else if (newTemp >= 90) {
            domString += `"hot"`;
          }
          else domString += `"temperate"`;
        domString += `><h2>${newTemp} degrees F</h2>`
        domString += `</div>`
      }
    else if (document.getElementById('fahrenheit').checked) {
        tempType = 'Fahrenheit';
        newTemp = toCelsius(temp);
        domString += `<div class=`;
        if (newTemp <= 0) {
          domString += `"freezing"`;
        } else if (newTemp >= 32) {
          domString += `"hot"`;
        }
        else domString += `"temperate"`;
        domString += `><h2>${newTemp} degrees C</h2>`;
        domString += `</div>`
    }
    console.log(domString);
    printToDom('tempOutput', domString);
 };

//The function below runs when the clear button is clicked and makes the input field contain an empty string
const clearForm = (e) => {
  e.preventDefault();
  document.getElementById('tempOutput').value = "";
  document.getElementById('tempInput').value = "";
};

const keypress = () => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('convertBtn').click();
  };
};

//listens for button clicks on the convertBtn and clearBtn to run the determineConverter or clearForm function above
 const buttonEvents = () => {
  document.getElementById(`convertBtn`).addEventListener('click', determineConverter);
  document.getElementById('clearBtn').addEventListener('click', clearForm);
  document.getElementById('tempInput').addEventListener('keyup', keypress);
  };

const init = () => {
  buttonEvents();
 };

 init();