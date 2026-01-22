function toggleWidget(showSelector, hideSelector) {
    const showElement = document.querySelector(showSelector);
    const hideElement = document.querySelector(hideSelector);
    
    if (hideElement && !hideElement.classList.contains('hidden')) {
        hideElement.classList.add('hidden');
    }
    
    if (showElement && showElement.classList.contains('hidden')) {
        showElement.classList.remove('hidden');
    }
}

document.getElementById('search_button').addEventListener("click", async () => {
    const userInput = document.getElementById('movie').value.trim();
    
    try {
        if (!userInput) {
            console.log("No input provided.");
            return;
        }

        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(userInput)}&apikey=98c8ec36`);

        const data = await response.json();

        if (data.Response === "False") {
            toggleWidget('.error_widget', '.main');
            return;
        }

        toggleWidget('.main', '.error_widget');

        const movieDetails = {
            title: data.Title,
            year: data.Year,
            rating: data.imdbRating,
            description: data.Plot,
            genre: data.Genre,
            director: data.Director,
            language: data.Language,
            runtime: data.Runtime,
            country: data.Country,
            poster: data.Poster
        };

        document.getElementById('title').innerText = movieDetails.title || "N/A";
        document.getElementById('year').innerText = movieDetails.year || "N/A";
        document.getElementById('rating').innerText = movieDetails.rating || "N/A";
        document.getElementById('description').innerText = movieDetails.description || "N/A";
        document.getElementById('genre').innerText = movieDetails.genre || "N/A";
        document.getElementById('director').innerText = movieDetails.director || "N/A";
        document.getElementById('language').innerText = movieDetails.language || "N/A";
        document.getElementById('runtime').innerText = movieDetails.runtime || "N/A";
        document.getElementById('country').innerText = movieDetails.country || "N/A";
        document.getElementById('poster').src = movieDetails.poster || "";
       

    } catch (error) {
        console.error("An error:", error);
    }
});
