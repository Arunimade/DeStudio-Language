const odiaAlphabets = [
    // Vowels (ସ୍ଵର)
    { symbol: "ଅ", pronunciation: "A (ଅ)" },
    { symbol: "ଆ", pronunciation: "Aa (ଆ)" },
    { symbol: "ଇ", pronunciation: "I (ଇ)" },
    { symbol: "ୀ", pronunciation: "Ee (ୀ)" },
    { symbol: "ଉ", pronunciation: "U (ଉ)" },
    { symbol: "ଊ", pronunciation: "Oo (ଊ)" },
    { symbol: "ଋ", pronunciation: "Ri (ଋ)" },
    { symbol: "ଏ", pronunciation: "E (ଏ)" },
    { symbol: "ଐ", pronunciation: "Ai (ଐ)" },
    { symbol: "ଓ", pronunciation: "O (ଓ)" },
    { symbol: "ଔ", pronunciation: "Au (ଔ)" },

    // Consonants (ବ୍ୟଞ୍ଜନ)
    { symbol: "କ", pronunciation: "Ka (କ)" },
    { symbol: "ଖ", pronunciation: "Kha (ଖ)" },
    { symbol: "ଗ", pronunciation: "Ga (ଗ)" },
    { symbol: "ଘ", pronunciation: "Gha (ଘ)" },
    { symbol: "ଙ", pronunciation: "Nga (ଙ)" },
    { symbol: "ଚ", pronunciation: "Cha (ଚ)" },
    { symbol: "ଛ", pronunciation: "Chha (ଛ)" },
    { symbol: "ଜ", pronunciation: "Ja (ଜ)" },
    { symbol: "ଝ", pronunciation: "Jha (ଝ)" },
    { symbol: "ଞ", pronunciation: "Nya (ଞ)" },
    { symbol: "ଟ", pronunciation: "Ta (ଟ)" },
    { symbol: "ଠ", pronunciation: "Tha (ଠ)" },
    { symbol: "ଡ", pronunciation: "Da (ଡ)" },
    { symbol: "ଢ଼", pronunciation: "Dha (ଢ଼)" },
    { symbol: "ଣ", pronunciation: "Na (ଣ)" },
    { symbol: "ତ", pronunciation: "Ta (ତ)" },
    { symbol: "ଥ", pronunciation: "Tha (ଥ)" },
    { symbol: "ଦ", pronunciation: "Da (ଦ)" },
    { symbol: "ଧ", pronunciation: "Dha (ଧ)" },
    { symbol: "ନ", pronunciation: "Na (ନ)" },
    { symbol: "ପ", pronunciation: "Pa (ପ)" },
    { symbol: "ଫ", pronunciation: "Pha (ଫ)" },
    { symbol: "ବ", pronunciation: "Ba (ବ)" },
    { symbol: "ଭ", pronunciation: "Bha (ଭ)" },
    { symbol: "ମ", pronunciation: "Ma (ମ)" },
    { symbol: "ୟ", pronunciation: "Ya (ୟ)" },
    { symbol: "ର", pronunciation: "Ra (ର)" },
    { symbol: "ଲ", pronunciation: "La (ଲ)" },
    { symbol: "ଶ", pronunciation: "Sha (ଶ)" },
    { symbol: "ଷ", pronunciation: "Shha (ଷ)" },
    { symbol: "ସ", pronunciation: "Sa (ସ)" },
    { symbol: "ହ", pronunciation: "Ha (ହ)" },
    { symbol: "ଳ", pronunciation: "La (ଳ)" },
    { symbol: "଱", pronunciation: "Rra (଱)" },
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = odiaAlphabets[currentIndex];
    document.getElementById("alphabetSymbol").textContent = alphabet.symbol;
    document.getElementById("alphabetPronunciation").textContent = alphabet.pronunciation;
}

// Navigate to the Previous Alphabet
function previousAlphabet() {
    if (currentIndex > 0) {
        currentIndex--;
        updateAlphabet();
    }
}

// Navigate to the Next Alphabet
function nextAlphabet() {
    if (currentIndex < odiaAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
