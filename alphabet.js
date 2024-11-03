// Full Gujarati Alphabets with Pronunciations
const gujaratiAlphabets = [
    // Vowels (Swar)
    { symbol: "અ", pronunciation: "A (અ)" },
    { symbol: "આ", pronunciation: "Aa (આ)" },
    { symbol: "ઇ", pronunciation: "I (ઇ)" },
    { symbol: "ઈ", pronunciation: "Ee (ઈ)" },
    { symbol: "ઉ", pronunciation: "U (ઉ)" },
    { symbol: "ઊ", pronunciation: "Oo (ઊ)" },
    { symbol: "ઋ", pronunciation: "Ru (ઋ)" },
    { symbol: "એ", pronunciation: "E (એ)" },
    { symbol: "ઐ", pronunciation: "Ai (ઐ)" },
    { symbol: "ઓ", pronunciation: "O (ઓ)" },
    { symbol: "ઔ", pronunciation: "Au (ઔ)" },

    // Consonants (Vyanjan)
    { symbol: "ક", pronunciation: "Ka (ક)" },
    { symbol: "ખ", pronunciation: "Kha (ખ)" },
    { symbol: "ગ", pronunciation: "Ga (ગ)" },
    { symbol: "ઘ", pronunciation: "Gha (ઘ)" },
    { symbol: "ઙ", pronunciation: "Nga (ઙ)" },
    { symbol: "ચ", pronunciation: "Cha (ચ)" },
    { symbol: "છ", pronunciation: "Chha (છ)" },
    { symbol: "જ", pronunciation: "Ja (જ)" },
    { symbol: "ઝ", pronunciation: "Jha (ઝ)" },
    { symbol: "ઞ", pronunciation: "Nya (ઞ)" },
    { symbol: "ટ", pronunciation: "Ta (ટ)" },
    { symbol: "ઠ", pronunciation: "Tha (ઠ)" },
    { symbol: "ડ", pronunciation: "Da (ડ)" },
    { symbol: "ઢ", pronunciation: "Dha (ઢ)" },
    { symbol: "ણ", pronunciation: "Na (ણ)" },
    { symbol: "ત", pronunciation: "Ta (ત)" },
    { symbol: "થ", pronunciation: "Tha (થ)" },
    { symbol: "દ", pronunciation: "Da (દ)" },
    { symbol: "ધ", pronunciation: "Dha (ધ)" },
    { symbol: "ન", pronunciation: "Na (ન)" },
    { symbol: "પ", pronunciation: "Pa (પ)" },
    { symbol: "ફ", pronunciation: "Pha (ફ)" },
    { symbol: "બ", pronunciation: "Ba (બ)" },
    { symbol: "ભ", pronunciation: "Bha (ભ)" },
    { symbol: "મ", pronunciation: "Ma (મ)" },
    { symbol: "ય", pronunciation: "Ya (ય)" },
    { symbol: "ર", pronunciation: "Ra (ર)" },
    { symbol: "લ", pronunciation: "La (લ)" },
    { symbol: "વ", pronunciation: "Va (વ)" },
    { symbol: "શ", pronunciation: "Sha (શ)" },
    { symbol: "ષ", pronunciation: "Shha (ષ)" },
    { symbol: "સ", pronunciation: "Sa (સ)" },
    { symbol: "હ", pronunciation: "Ha (હ)" },
    { symbol: "ળ", pronunciation: "Lla (ળ)" },
    { symbol: "ક્ષ", pronunciation: "Ksha (ક્ષ)" },
    { symbol: "જ્ઞ", pronunciation: "Gnya (જ્ઞ)" }
];

let currentIndex = 0;

// Function to Update Alphabet Display
function updateAlphabet() {
    const alphabet = gujaratiAlphabets[currentIndex];
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
    if (currentIndex < gujaratiAlphabets.length - 1) {
        currentIndex++;
        updateAlphabet();
    }
}

// Initialize the Display
updateAlphabet();
