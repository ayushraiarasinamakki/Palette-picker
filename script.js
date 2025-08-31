// DOM Elements
const body = document.body;
const colorBtns = document.querySelectorAll('.color-btn');
const colorPicker = document.getElementById('color-picker');
const randomBtn = document.getElementById('random-color');
const colorDisplay = document.getElementById('color-code');

// Set initial background color and display
document.addEventListener('DOMContentLoaded', () => {
    const initialColor = '#FFFFFF';
    setBackgroundColor(initialColor);
});

// Preset color buttons
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        setBackgroundColor(color);
    });
});

// Custom color picker
colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    setBackgroundColor(color);
});

// Random color button
randomBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
    colorPicker.value = randomColor;
});

// Function to set background color and update display
function setBackgroundColor(color) {
    body.style.backgroundColor = color;
    colorDisplay.textContent = color.toUpperCase();
    
    // Adjust text color based on background brightness
    const brightness = getBrightness(color);
    colorDisplay.style.color = brightness < 128 ? '#FFFFFF' : '#000000';
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to calculate brightness of a color
function getBrightness(hexColor) {
    // Remove # if present
    hexColor = hexColor.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    
    // Calculate brightness using a common formula
    return (r * 299 + g * 587 + b * 114) / 1000;
}