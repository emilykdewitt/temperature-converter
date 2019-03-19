const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const determineConverter = () => {
    let domString = ``;
    if (document.getElementById('celsius').checked) {
        tempType = document.getElementById('celsius').value;
      }
    else if (document.getElementById('fahrenheit').checked) {
        tempType = document.getElementById('fahrenheit').value;
    }
    const tempValue = document.getElementById('tempInput').value;
    console.log(document.getElementById('tempInput').value);
    console.log(tempType);
    domString += `<div class="tempOutputBox">`
    domString +=    `<h5>${tempValue}</h5>`;
    domString +=    `<h5>${tempType}</h5>`;
    domString += `</div>`
    printToDom('tempOutput', domString);
 };

 /*determineConverter function should console.log value in input and should console.log either C or F depending on which radio button is selected, print the tempInput value to the output div
Write a printToDom function - 2 inputs - divId and textToPrint
*/

const init = () => {
     determineConverter();
 };

 init();