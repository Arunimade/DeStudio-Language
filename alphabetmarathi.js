const marathiAlphabets = [
    // Vowels (स्वर)
    { symbol: "अ", pronunciation: "A (अ)" },
    { symbol: "आ", pronunciation: "Aa (आ)" },
    { symbol: "इ", pronunciation: "I (इ)" },
    { symbol: "ई", pronunciation: "Ee (ई)" },
    { symbol: "उ", pronunciation: "U (उ)" },
    { symbol: "ऊ", pronunciation: "Oo (ऊ)" },
    { symbol: "ऋ", pronunciation: "Ri (ऋ)" },
    { symbol: "ए", pronunciation: "E (ए)" },
    { symbol: "ऐ", pronunciation: "Ai (ऐ)" },
    { symbol: "ओ", pronunciation: "O (ओ)" },
    { symbol: "औ", pronunciation: "Au (औ)" },

    // Consonants (व्यंजन)
    { symbol: "क", pronunciation: "Ka (क)" },
    { symbol: "ख", pronunciation: "Kha (ख)" },
    { symbol: "ग", pronunciation: "Ga (ग)" },
    { symbol: "घ", pronunciation: "Gha (घ)" },
    { symbol: "ङ", pronunciation: "Nga (ङ)" },
    { symbol: "च", pronunciation: "Cha (च)" },
    { symbol: "छ", pronunciation: "Chha (छ)" },
    { symbol: "ज", pronunciation: "Ja (ज)" },
    { symbol: "झ", pronunciation: "Jha (झ)" },
    { symbol: "ञ", pronunciation: "Nya (ञ)" },
    { symbol: "ट", pronunciation: "Ta (ट)" },
    { symbol: "ठ", pronunciation: "Tha (ठ)" },
    { symbol: "ड", pronunciation: "Da (ड)" },
    { symbol: "ढ", pronunciation: "Dha (ढ)" },
    { symbol: "ण", pronunciation: "Na (ण)" },
    { symbol: "त", pronunciation: "Ta (त)" },
    { symbol: "थ", pronunciation: "Tha (थ)" },
    { symbol: "द", pronunciation: "Da (द)" },
    { symbol: "ध", pronunciation: "Dha (ध)" },
    { symbol: "न", pronunciation: "Na (न)" },
    { symbol: "प", pronunciation: "Pa (प)" },
    { symbol: "फ", pronunciation: "Pha (फ)" },
    { symbol: "ब", pronunciation: "Ba (ब)" },
    { symbol: "भ", pronunciation: "Bha (भ)" },
    { symbol: "म", pronunciation: "Ma (म)" },
    { symbol: "य", pronunciation: "Ya (य)" },
    { symbol: "र", pronunciation: "Ra (र)" },
    { symbol: "ल", pronunciation: "La (ल)" },
    { symbol: "व", pronunciation: "Va (व)" },
    { symbol: "श", pronunciation: "Sha (श)" },
    { symbol: "ष", pronunciation: "Shha (ष)" },
    { symbol: "स", pronunciation: "Sa (स)" },
    { symbol: "ह", pronunciation: "Ha (ह)" },
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = marathiAlphabets[currentIndex];
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
    if (currentIndex < marathiAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
