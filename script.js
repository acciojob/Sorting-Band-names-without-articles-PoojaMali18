// An array of band names
let bandNames = ['The Rolling Stones', 'The Beatles', 'Aerosmith', 'Queen'];

// Function to remove articles from a band name
function removeArticles(name) {
  // List of common articles
  const articles = ['the', 'a', 'an'];

  // Split the name into words
  const words = name.split(' ');

  // Filter out articles from the words
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

  // Join the filtered words back into a single string
  return filteredWords.join(' ');
}

// Remove articles and sort the band names lexicographically
bandNames = bandNames.map(removeArticles);
bandNames.sort();

// Get the ul element with the id 'band'
const ulElement = document.getElementById('band');

// Create list items and append them to the ul
for (let i = 0; i < bandNames.length; i++) {
  const liElement = document.createElement('li');
  liElement.textContent = bandNames[i];
  ulElement.appendChild(liElement);
}
