const teluguAlphabets = [
    // Vowels (Achulu)
    { symbol: "అ", pronunciation: "A (అ)" },
    { symbol: "ఆ", pronunciation: "Aa (ఆ)" },
    { symbol: "ఇ", pronunciation: "I (ఇ)" },
    { symbol: "ఈ", pronunciation: "Ee (ఈ)" },
    { symbol: "ఉ", pronunciation: "U (ఉ)" },
    { symbol: "ఊ", pronunciation: "Oo (ఊ)" },
    { symbol: "ఋ", pronunciation: "Ri (ఋ)" },
    { symbol: "ఌ", pronunciation: "Li (ఌ)" },
    { symbol: "ఎ", pronunciation: "E (ఎ)" },
    { symbol: "ఐ", pronunciation: "Ai (ఐ)" },
    { symbol: "ఒ", pronunciation: "O (ఒ)" },
    { symbol: "ఔ", pronunciation: "Au (ఔ)" },

    // Consonants (Hallulu)
    { symbol: "క", pronunciation: "Ka (క)" },
    { symbol: "ఖ", pronunciation: "Kha (ఖ)" },
    { symbol: "గ", pronunciation: "Ga (గ)" },
    { symbol: "ఘ", pronunciation: "Gha (ఘ)" },
    { symbol: "ఙ", pronunciation: "Nga (ఙ)" },
    { symbol: "చ", pronunciation: "Cha (చ)" },
    { symbol: "ఛ", pronunciation: "Chha (ఛ)" },
    { symbol: "జ", pronunciation: "Ja (జ)" },
    { symbol: "ఝ", pronunciation: "Jha (ఝ)" },
    { symbol: "ఞ", pronunciation: "Nya (ఞ)" },
    { symbol: "ట", pronunciation: "Ta (ట)" },
    { symbol: "ఠ", pronunciation: "Tha (ఠ)" },
    { symbol: "డ", pronunciation: "Da (డ)" },
    { symbol: "ఢ", pronunciation: "Dha (ఢ)" },
    { symbol: "ణ", pronunciation: "Na (ణ)" },
    { symbol: "త", pronunciation: "Ta (త)" },
    { symbol: "థ", pronunciation: "Tha (థ)" },
    { symbol: "ద", pronunciation: "Da (ద)" },
    { symbol: "ధ", pronunciation: "Dha (ధ)" },
    { symbol: "న", pronunciation: "Na (న)" },
    { symbol: "ప", pronunciation: "Pa (ప)" },
    { symbol: "ఫ", pronunciation: "Pha (ఫ)" },
    { symbol: "బ", pronunciation: "Ba (బ)" },
    { symbol: "భ", pronunciation: "Bha (భ)" },
    { symbol: "మ", pronunciation: "Ma (మ)" },
    { symbol: "య", pronunciation: "Ya (య)" },
    { symbol: "ర", pronunciation: "Ra (ర)" },
    { symbol: "ల", pronunciation: "La (ల)" },
    { symbol: "వ", pronunciation: "Va (వ)" },
    { symbol: "శ", pronunciation: "Sha (శ)" },
    { symbol: "ష", pronunciation: "Shha (ష)" },
    { symbol: "స", pronunciation: "Sa (స)" },
    { symbol: "హ", pronunciation: "Ha (హ)" },
    { symbol: "ఱ", pronunciation: "Ra (ఱ)" }
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = teluguAlphabets[currentIndex];
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
    if (currentIndex < teluguAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
