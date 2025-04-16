document.addEventListener("DOMContentLoaded", () => {
    // Insert student name and ID
    const studentInfo = document.getElementById("student-info");
    studentInfo.textContent = "Student ID: 200594567 | Name: Mariya Jemy";
  
    const searchBtn = document.getElementById("search-btn");
  
    searchBtn.addEventListener("click", () => {
      const query = document.getElementById("search-input").value.trim();
      const apiKey = "ZaasYY2IZng7a95MR67zHQJm9ywM6pjb"; 
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const gifContainer = document.getElementById("gif-result");
          if (data.data.length > 0) {
            const gifUrl = data.data[0].images.original.url;
            gifContainer.innerHTML = `<img src="${gifUrl}" alt="GIF result">`;
          } else {
            gifContainer.innerHTML = `<p>No GIF found for "${query}"</p>`;
          }
        })
        .catch((error) => {
          console.error("Error fetching from Giphy API:", error);
          document.getElementById("gif-result").innerHTML =
            "<p>Error loading GIF. Try again.</p>";
        });
    });
  });
  