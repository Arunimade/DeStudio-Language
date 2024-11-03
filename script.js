const languages = [
    { name: 'Gujarati', description: 'Learn the language of Gujarat 🪁', link: 'guj.html' },
    { name: 'Bengali', description: 'Explore the beauty of Bengali 🌸', link: 'bengali.html' },
    { name: 'Assamese', description: 'Dive into Assamese culture 🐅', link: 'assamese.html' },
    { name: 'Telugu', description: 'Master the South Indian Telugu 🌊', link: 'telugu.html' },
    { name: 'Tamil', description: 'Learn Tamil - one of the oldest languages 🕉️', link: 'tamil.html' },
    { name: 'Kannada', description: 'Understand the language of Karnataka 🌄', link: 'kannada.html' },
    { name: 'Rajasthani', description: 'Explore the desert culture 🏜️', link: 'rajasthani.html' },
    { name: 'Marathi', description: 'Learn the language of Maharashtra 🎉', link: 'marathi.html' },
    { name: 'Punjabi', description: 'Get fluent in the energetic Punjabi 🥳', link: 'punjabi.html' },
    { name: 'Haryanvi', description: 'Discover the charm of Haryanvi 🌾', link: 'haryanvi.html' },
    { name: 'Maithili', description: 'Dive into the world of Maithili 📜', link: 'maithili.html' },
    { name: 'Manipuri', description: 'Learn the language of Manipur 🌺', link: 'manipuri.html' },
    { name: 'Odia', description: 'Explore the sweetness of Odia 🍬', link: 'odia.html' }
];

// Function to generate language cards dynamically
function generateCards() {
    const cardContainer = document.getElementById('language-cards');

    languages.forEach(language => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = language.link;
        card.target = '_blank'; // Opens in a new tab
        card.innerHTML = `
            <h3>${language.name}</h3>
            <p>${language.description}</p>
        `;
        cardContainer.appendChild(card);
    });
}

// Call the function on page load
window.onload = generateCards;
