// 1. Selection of DOM Elements
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const changeBtn = document.getElementById('changeBtn');

const infoBox = document.getElementById('instruction-box');
const infoTitle = document.getElementById('status-title');
const infoText = document.getElementById('status-text');
const secondsDisplay = document.getElementById('seconds');

// 2. State tracking
let currentLight = 'red';
let timeLeft = 15; // Set to 15 seconds

// 3. FUNCTION: The logic for changing states
function cycleLight() {
    // Conditional Logic for Light Transitions
    if (currentLight === 'red') {
        redLight.classList.remove('red-on');
        greenLight.classList.add('green-on');
        
        infoTitle.innerText = "GO";
        infoText.innerText = "Proceed with caution if the way is clear.";
        infoBox.style.borderLeftColor = "#32ff7e";
        currentLight = 'green';

    } else if (currentLight === 'green') {
        greenLight.classList.remove('green-on');
        yellowLight.classList.add('yellow-on');
        
        infoTitle.innerText = "CAUTION";
        infoText.innerText = "The light is about to change. Prepare to stop.";
        infoBox.style.borderLeftColor = "#fffa65";
        currentLight = 'yellow';

    } else if (currentLight === 'yellow') {
        yellowLight.classList.remove('yellow-on');
        redLight.classList.add('red-on');
        
        infoTitle.innerText = "STOP";
        infoText.innerText = "Drivers must remain behind the line.";
        infoBox.style.borderLeftColor = "#ff4d4d";
        currentLight = 'red';
    }
    
    // Reset the timer to 15 whenever the light changes
    timeLeft = 15;
    secondsDisplay.innerText = timeLeft;
}

// 4. TIMER: Logic to count down every second
setInterval(function() {
    timeLeft--; // Decrease time by 1
    secondsDisplay.innerText = timeLeft;

    // When timer hits 0, trigger the light change
    if (timeLeft <= 0) {
        cycleLight();
    }
}, 1000);

// 5. MANUAL OVERRIDE: Button click
changeBtn.addEventListener('click', cycleLight);
