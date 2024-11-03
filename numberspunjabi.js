let punjabiNumbers = [];
let currentNumberIndex = 0;

// Function to fetch numbers from JSON
async function loadNumbers() {
    try {
        const response = await fetch('numbersPunjabi.json'); // Use the appropriate JSON file for Punjabi numbers
        punjabiNumbers = await response.json();
        updateNumber(); // Initialize with the first number
    } catch (error) {
        console.error('Error loading numbers:', error);
    }
}

// Function to update the number display
function updateNumber() {
    const number = punjabiNumbers[currentNumberIndex];
    document.getElementById('numberSymbol').textContent = number.symbol; // Assuming the symbol is in Punjabi
    document.getElementById('numberPronunciation').textContent = number.pronunciation; // Pronunciation in English or Punjabi
}

// Navigate to the previous number
function previousNumber() {
    if (currentNumberIndex > 0) {
        currentNumberIndex--;
        updateNumber();
    }
}

// Navigate to the next number
function nextNumber() {
    if (currentNumberIndex < punjabiNumbers.length - 1) {
        currentNumberIndex++;
        updateNumber();
    }
}

// Load the numbers when the page loads
window.onload = loadNumbers;
