const kannadaAlphabets = [
    // Vowels (ಅಕ್ಷರ)
    { symbol: "ಅ", pronunciation: "A (ಅ)" },
    { symbol: "ಆ", pronunciation: "Aa (ಆ)" },
    { symbol: "ಇ", pronunciation: "I (ಇ)" },
    { symbol: "ಈ", pronunciation: "Ee (ಈ)" },
    { symbol: "ಉ", pronunciation: "U (ಉ)" },
    { symbol: "ಊ", pronunciation: "Oo (ಊ)" },
    { symbol: "ಋ", pronunciation: "Ri (ಋ)" },
    { symbol: "ಎ", pronunciation: "E (ಎ)" },
    { symbol: "ಏ", pronunciation: "Ae (ಏ)" },
    { symbol: "ಐ", pronunciation: "Ai (ಐ)" },
    { symbol: "ಒ", pronunciation: "O (ಒ)" },
    { symbol: "ಓ", pronunciation: "Oo (ಓ)" },
    { symbol: "ಔ", pronunciation: "Au (ಔ)" },

    // Consonants (ವ್ಯಂಜನ)
    { symbol: "ಕ", pronunciation: "Ka (ಕ)" },
    { symbol: "ಖ", pronunciation: "Kha (ಖ)" },
    { symbol: "ಗ", pronunciation: "Ga (ಗ)" },
    { symbol: "ಘ", pronunciation: "Gha (ಘ)" },
    { symbol: "ಙ", pronunciation: "Nga (ಙ)" },
    { symbol: "ಚ", pronunciation: "Cha (ಚ)" },
    { symbol: "ಛ", pronunciation: "Chha (ಛ)" },
    { symbol: "ಜ", pronunciation: "Ja (ಜ)" },
    { symbol: "ಝ", pronunciation: "Jha (ಝ)" },
    { symbol: "ಞ", pronunciation: "Nya (ಞ)" },
    { symbol: "ಟ", pronunciation: "Ta (ಟ)" },
    { symbol: "ಠ", pronunciation: "Tha (ಠ)" },
    { symbol: "ಡ", pronunciation: "Da (ಡ)" },
    { symbol: "ಢ", pronunciation: "Dha (ಢ)" },
    { symbol: "ಣ", pronunciation: "Na (ಣ)" },
    { symbol: "ತ", pronunciation: "Ta (ತ)" },
    { symbol: "ಥ", pronunciation: "Tha (ಥ)" },
    { symbol: "ದ", pronunciation: "Da (ದ)" },
    { symbol: "ಧ", pronunciation: "Dha (ಧ)" },
    { symbol: "ನ", pronunciation: "Na (ನ)" },
    { symbol: "ಪ", pronunciation: "Pa (ಪ)" },
    { symbol: "ಫ", pronunciation: "Pha (ಫ)" },
    { symbol: "ಬ", pronunciation: "Ba (ಬ)" },
    { symbol: "ಭ", pronunciation: "Bha (ಭ)" },
    { symbol: "ಮ", pronunciation: "Ma (ಮ)" },
    { symbol: "ಯ", pronunciation: "Ya (ಯ)" },
    { symbol: "ರ", pronunciation: "Ra (ರ)" },
    { symbol: "ಲ", pronunciation: "La (ಲ)" },
    { symbol: "ವ", pronunciation: "Va (ವ)" },
    { symbol: "ಶ", pronunciation: "Sha (ಶ)" },
    { symbol: "ಷ", pronunciation: "Shha (ಷ)" },
    { symbol: "ಸ", pronunciation: "Sa (ಸ)" },
    { symbol: "ಹ", pronunciation: "Ha (ಹ)" },
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = kannadaAlphabets[currentIndex];
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
    if (currentIndex < kannadaAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
