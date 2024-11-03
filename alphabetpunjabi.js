const punjabiAlphabets = [
    // Vowels (ਸਵਰ)
    { symbol: "ਅ", pronunciation: "A (ਅ)" },
    { symbol: "ਆ", pronunciation: "Aa (ਆ)" },
    { symbol: "ਇ", pronunciation: "I (ਇ)" },
    { symbol: "ਈ", pronunciation: "Ee (ਈ)" },
    { symbol: "ਉ", pronunciation: "U (ਉ)" },
    { symbol: "ਊ", pronunciation: "Oo (ਊ)" },
    { symbol: "ਏ", pronunciation: "E (ਏ)" },
    { symbol: "ਐ", pronunciation: "Ai (ਐ)" },
    { symbol: "ਓ", pronunciation: "O (ਓ)" },
    { symbol: "ਔ", pronunciation: "Au (ਔ)" },

    // Consonants (ਵਿਜਨ)
    { symbol: "ਕ", pronunciation: "Ka (ਕ)" },
    { symbol: "ਖ", pronunciation: "Kha (ਖ)" },
    { symbol: "ਗ", pronunciation: "Ga (ਗ)" },
    { symbol: "ਘ", pronunciation: "Gha (ਘ)" },
    { symbol: "ਙ", pronunciation: "Nga (ਙ)" },
    { symbol: "ਚ", pronunciation: "Cha (ਚ)" },
    { symbol: "ਛ", pronunciation: "Chha (ਛ)" },
    { symbol: "ਜ", pronunciation: "Ja (ਜ)" },
    { symbol: "ਝ", pronunciation: "Jha (ਝ)" },
    { symbol: "ਞ", pronunciation: "Nya (ਞ)" },
    { symbol: "ਟ", pronunciation: "Ta (ਟ)" },
    { symbol: "ਠ", pronunciation: "Tha (ਠ)" },
    { symbol: "ਡ", pronunciation: "Da (ਡ)" },
    { symbol: "ਢ", pronunciation: "Dha (ਢ)" },
    { symbol: "ਣ", pronunciation: "Na (ਣ)" },
    { symbol: "ਤ", pronunciation: "Ta (ਤ)" },
    { symbol: "ਥ", pronunciation: "Tha (ਥ)" },
    { symbol: "ਦ", pronunciation: "Da (ਦ)" },
    { symbol: "ਧ", pronunciation: "Dha (ਧ)" },
    { symbol: "ਨ", pronunciation: "Na (ਨ)" },
    { symbol: "ਪ", pronunciation: "Pa (ਪ)" },
    { symbol: "ਫ", pronunciation: "Pha (ਫ)" },
    { symbol: "ਬ", pronunciation: "Ba (ਬ)" },
    { symbol: "ਭ", pronunciation: "Bha (ਭ)" },
    { symbol: "ਮ", pronunciation: "Ma (ਮ)" },
    { symbol: "ਯ", pronunciation: "Ya (ਯ)" },
    { symbol: "ਰ", pronunciation: "Ra (ਰ)" },
    { symbol: "ਲ", pronunciation: "La (ਲ)" },
    { symbol: "ਵ", pronunciation: "Va (ਵ)" },
    { symbol: "ਸ਼", pronunciation: "Sha (ਸ਼)" },
    { symbol: "ਸ਼", pronunciation: "Shha (ਸ਼)" },
    { symbol: "ਸ", pronunciation: "Sa (ਸ)" },
    { symbol: "ਹ", pronunciation: "Ha (ਹ)" },
    { symbol: "ੜ", pronunciation: "Rha (ੜ)" },
    { symbol: "ਖ਼", pronunciation: "Kha (ਖ਼)" },
    { symbol: "ਗ਼", pronunciation: "Ga (ਗ਼)" },
    { symbol: "ਜ਼", pronunciation: "Za (ਜ਼)" },
    { symbol: "ਫ਼", pronunciation: "Fa (ਫ਼)" }
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = punjabiAlphabets[currentIndex];
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
    if (currentIndex < punjabiAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
