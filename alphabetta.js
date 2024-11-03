const tamilAlphabets = [
    // Vowels (Uyir Ezhuthu)
    { symbol: "அ", pronunciation: "A (அ)" },
    { symbol: "ஆ", pronunciation: "Aa (ஆ)" },
    { symbol: "இ", pronunciation: "I (இ)" },
    { symbol: "ஈ", pronunciation: "Ee (ஈ)" },
    { symbol: "உ", pronunciation: "U (உ)" },
    { symbol: "ஊ", pronunciation: "Oo (ஊ)" },
    { symbol: "எ", pronunciation: "E (எ)" },
    { symbol: "ஏ", pronunciation: "Ee (ஏ)" },
    { symbol: "ஐ", pronunciation: "Ai (ஐ)" },
    { symbol: "ஒ", pronunciation: "O (ஒ)" },
    { symbol: "ஓ", pronunciation: "Oo (ஓ)" },
    { symbol: "ஔ", pronunciation: "Au (ஔ)" },

    // Consonants (Mey Ezhuthu)
    { symbol: "க", pronunciation: "Ka (க)" },
    { symbol: "ச", pronunciation: "Cha (ச)" },
    { symbol: "ட", pronunciation: "Ta (ட)" },
    { symbol: "த", pronunciation: "Tha (த)" },
    { symbol: "ப", pronunciation: "Pa (ப)" },
    { symbol: "ய", pronunciation: "Ya (ய)" },
    { symbol: "ர", pronunciation: "Ra (ர)" },
    { symbol: "ல", pronunciation: "La (ல)" },
    { symbol: "வ", pronunciation: "Va (வ)" },
    { symbol: "ழ", pronunciation: "Zha (ழ)" },
    { symbol: "ண", pronunciation: "Na (ண)" },
    { symbol: "ந", pronunciation: "Na (ந)" },
    { symbol: "ம", pronunciation: "Ma (ம)" },
    { symbol: "ய", pronunciation: "Ya (ய)" },
    { symbol: "ச", pronunciation: "Cha (ச)" },
    { symbol: "ஜ", pronunciation: "Ja (ஜ)" },
    { symbol: "ஷ", pronunciation: "Sha (ஷ)" },
    { symbol: "ஸ", pronunciation: "Sa (ஸ)" },
    { symbol: "ஹ", pronunciation: "Ha (ஹ)" },
    { symbol: "க்ஷ", pronunciation: "Ksha (க்ஷ)" },
    { symbol: "ஞ", pronunciation: "Nya (ஞ)" }
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = tamilAlphabets[currentIndex];
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
    if (currentIndex < tamilAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
