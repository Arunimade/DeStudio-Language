const manipuriAlphabets = [
    // Vowels (স্বরবর্ণ)
    { symbol: "অ", pronunciation: "A (অ)" },
    { symbol: "আ", pronunciation: "Aa (আ)" },
    { symbol: "ই", pronunciation: "I (ই)" },
    { symbol: "ঈ", pronunciation: "Ee (ঈ)" },
    { symbol: "উ", pronunciation: "U (উ)" },
    { symbol: "ঊ", pronunciation: "Oo (ঊ)" },
    { symbol: "ঋ", pronunciation: "Ri (ঋ)" },
    { symbol: "এ", pronunciation: "E (এ)" },
    { symbol: "ঐ", pronunciation: "Oi (ঐ)" },
    { symbol: "ও", pronunciation: "O (ও)" },
    { symbol: "ঔ", pronunciation: "Au (ঔ)" },

    // Consonants (ব্যঞ্জনবর্ণ)
    { symbol: "ক", pronunciation: "Ka (ক)" },
    { symbol: "খ", pronunciation: "Kha (খ)" },
    { symbol: "গ", pronunciation: "Ga (গ)" },
    { symbol: "ঘ", pronunciation: "Gha (ঘ)" },
    { symbol: "ঙ", pronunciation: "Nga (ঙ)" },
    { symbol: "চ", pronunciation: "Cha (চ)" },
    { symbol: "ছ", pronunciation: "Chha (ছ)" },
    { symbol: "জ", pronunciation: "Ja (জ)" },
    { symbol: "ঝ", pronunciation: "Jha (ঝ)" },
    { symbol: "ঞ", pronunciation: "Nya (ঞ)" },
    { symbol: "ট", pronunciation: "Ta (ট)" },
    { symbol: "ঠ", pronunciation: "Tha (ঠ)" },
    { symbol: "ড", pronunciation: "Da (ড)" },
    { symbol: "ঢ", pronunciation: "Dha (ঢ)" },
    { symbol: "ণ", pronunciation: "Na (ণ)" },
    { symbol: "ত", pronunciation: "Ta (ত)" },
    { symbol: "থ", pronunciation: "Tha (থ)" },
    { symbol: "দ", pronunciation: "Da (দ)" },
    { symbol: "ধ", pronunciation: "Dha (ধ)" },
    { symbol: "ন", pronunciation: "Na (ন)" },
    { symbol: "প", pronunciation: "Pa (প)" },
    { symbol: "ফ", pronunciation: "Pha (ফ)" },
    { symbol: "ব", pronunciation: "Ba (ব)" },
    { symbol: "ভ", pronunciation: "Bha (ভ)" },
    { symbol: "ম", pronunciation: "Ma (ম)" },
    { symbol: "য", pronunciation: "Ya (য)" },
    { symbol: "ৰ", pronunciation: "Ra (ৰ)" },
    { symbol: "ল", pronunciation: "La (ল)" },
    { symbol: "শ", pronunciation: "Sha (শ)" },
    { symbol: "ষ", pronunciation: "Shha (ষ)" },
    { symbol: "স", pronunciation: "Sa (স)" },
    { symbol: "হ", pronunciation: "Ha (হ)" },
    { symbol: "ৎ", pronunciation: "T (ৎ)" },
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = manipuriAlphabets[currentIndex];
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
    if (currentIndex < manipuriAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
