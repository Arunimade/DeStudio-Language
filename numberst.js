let teluguNumbers = [];
let currentNumberIndex = 0;

// Function to fetch numbers from JSON
async function loadNumbers() {
    try {
        const response = await fetch('numbersTelugu.json'); // Use the appropriate JSON file for Telugu numbers
        teluguNumbers = await response.json();
        updateNumber(); // Initialize with the first number
    } catch (error) {
        console.error('Error loading numbers:', error);
    }
}

// Function to update the number display
function updateNumber() {
    const number = teluguNumbers[currentNumberIndex];
    document.getElementById('numberSymbol').textContent = number.symbol; // Assuming the symbol is in Telugu
    document.getElementById('numberPronunciation').textContent = number.pronunciation; // Pronunciation in English or Telugu
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
    if (currentNumberIndex < teluguNumbers.length - 1) {
        currentNumberIndex++;
        updateNumber();
    }
}

// Load the numbers when the page loads
window.onload = loadNumbers;
