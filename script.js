// Selection of DOM Elements
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const changeBtn = document.getElementById('changeBtn');

const infoBox = document.getElementById('instruction-box');
const infoTitle = document.getElementById('status-title');
const infoText = document.getElementById('status-text');

// current state
let currentLight = 'red';

changeBtn.addEventListener('click', function() {
    
    // Flow: Red -> Green -> Yellow -> Red
    if (currentLight === 'red') {
        // Change Light
        redLight.classList.remove('red-on');
        greenLight.classList.add('green-on');
        
        // Update Instructions
        infoTitle.innerText = "GO";
        infoText.innerText = "Proceed with caution if the way is clear.";
        infoBox.style.borderLeftColor = "#32ff7e";
        
        currentLight = 'green';

    } else if (currentLight === 'green') {
        // Change Light
        greenLight.classList.remove('green-on');
        yellowLight.classList.add('yellow-on');
        
        // Update Instructions
        infoTitle.innerText = "CAUTION";
        infoText.innerText = "The light is about to change. Prepare to stop.";
        infoBox.style.borderLeftColor = "#fffa65";
        
        currentLight = 'yellow';

    } else if (currentLight === 'yellow') {
        // Change Light
        yellowLight.classList.remove('yellow-on');
        redLight.classList.add('red-on');
        
        // Update Instructions
        infoTitle.innerText = "STOP";
        infoText.innerText = "Drivers must remain behind the line.";
        infoBox.style.borderLeftColor = "#ff4d4d";
        
        currentLight = 'red';
    }
});
