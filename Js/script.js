
// Display student info dynamically using JavaScript
const studentInfo = document.createElement("p");
studentInfo.textContent = "Name: Paul Biju | Student ID: 123456789";
document.body.appendChild(studentInfo);

// Giphy API key - make sure to replace this with your actual API key from https://developers.giphy.com
const apiKey = "YOUR_GIPHY_API_KEY"; // Replace with your real key!

// Add event listener for the search button
document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  if (!query) return;

  // Construct Giphy API URL
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`;

  // Fetch data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gifContainer = document.getElementById("gif-result");
      gifContainer.innerHTML = ""; // Clear previous result

      if (data.data.length > 0) {
        const gifURL = data.data[0].images.original.url;
        const gifImage = document.createElement("img");
        gifImage.src = gifURL;
        gifImage.alt = "GIF result";
        gifContainer.appendChild(gifImage);
      } else {
        gifContainer.textContent = "No GIFs found. Try a different search term.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data from Giphy API:", error);
    });
});
