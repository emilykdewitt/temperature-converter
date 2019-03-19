const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const toCelsius = (temp) => {
    const newTemp = 
}
const toFahrenheit = (temp) => {

}

const determineConverter = () => {
    let domString = ``;
    const temp = document.getElementById('tempInput').value;
    if (document.getElementById('celsius').checked) {
        tempType = document.getElementById('celsius').value;
        const convertedTemp = toFahrenheit(temp);
      }
    else if (document.getElementById('fahrenheit').checked) {
        tempType = document.getElementById('fahrenheit').value;
        const convertedTemp = toCelsius(temp);
    }
    console.log(temp);
    console.log(tempType);
    domString += `<div class="tempOutputBox">`
    domString +=    `<h5>${tempValue}</h5>`;
    domString +=    `<h5>${tempType}</h5>`;
    domString += `</div>`;
    printToDom('tempOutput', domString);
 };


determineConverter should call either toCelsius or toFahrenheit depending on what radio button is selected
toCelsius and toFahrenheit should each accept 1 input - temp which is a number
toCelsius and toFahrenheit should convert the temperature
toCelsius and toFahrenheit should call domStringBuilder function and pass final number and C or F
domStringBuilder should have two inputs - finalTemp and unit
domStringBuilder should build a h2 tag that looks something like 27 degrees F
domStringBuilder should call printToDom and pass the id of tempOutput and h2 string created

const init = () => {
     determineConverter();
 };

 init();