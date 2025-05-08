const celcius = (document.getElementById('celcius').textContent);
const fahrenheitResult = document.getElementById('fahrenheitResult');
const reamurResult = document.getElementById('reamurResult');
const kelvinResult = document.getElementById('kelvinResult');


const form = document.getElementById('form-suhu')
form.addEventListener('submit', function (event){
    event.preventDefault()

    const celcius = document.getElementById('celcius').value
    if (isNaN(celcius)){
        alert("Input harus berupa angka")
        return;
    }

    fahrenheitResult.textContent = celciusToFahrenheit(celcius)
    reamurResult.textContent = celciusToReamur(celcius)
    kelvinResult.textContent = celciusToKelvin(celcius)
})
      

function celciusToFahrenheit(celcius) {
    return (Number(celcius) * 9 / 5) + 32;
}


function celciusToReamur(celcius) {
    return (4 / 5 * Number(celcius));
}


function celciusToKelvin(celcius) {
    return Number(celcius) + 273;
}
