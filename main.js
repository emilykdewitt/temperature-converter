const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const toCelsius = (temp) => {
  return (temp - 32) * (5/9);
};

const toFahrenheit = (temp) => {
  return (temp * (9/5)) + 32;
};

const determineConverter = () => {
    let domString = ``;
    const temp = document.getElementById('tempInput').value;
    if (document.getElementById('celsius').checked) {
        tempType = document.getElementById('celsius').value;
        newTemp = toFahrenheit(temp);
        domString += `${newTemp} degrees F`
      }
    else if (document.getElementById('fahrenheit').checked) {
        tempType = document.getElementById('fahrenheit').value;
        newTemp = toCelsius(temp);
        domString += `<h2>${newTemp} degrees C`;
    }
    printToDom('tempOutput', domString);
 };

 const buttonEvents = () => {
  document.getElementById(`convertBtn`).addEventListener('click', determineConverter);

const init = () => {
  buttonEvents();
 };

 init();