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
            if (!document.querySelector('.main').classList.contains('hidden')) {
                document.querySelector('.main').classList.add('hidden');
            }

            document.querySelector('.error_widget').classList.remove('hidden');
            return;
        } else {
            if (!document.querySelector('.error_widget').classList.contains('hidden')) {
                document.querySelector('.error_widget').classList.add('hidden');
            }

            document.querySelector('.main').classList.remove('hidden');

            const movieDeatils = {
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

            document.getElementById('title').innerText = movieDeatils.title || "N/A";
            document.getElementById('year').innerText = movieDeatils.year || "N/A";
            document.getElementById('rating').innerText = movieDeatils.rating || "N/A";
            document.getElementById('description').innerText = movieDeatils.description || "N/A";
            document.getElementById('genre').innerText = movieDeatils.genre || "N/A";
            document.getElementById('director').innerText = movieDeatils.director || "N/A";
            document.getElementById('language').innerText = movieDeatils.language || "N/A";
            document.getElementById('runtime').innerText = movieDeatils.runtime || "N/A";
            document.getElementById('country').innerText = movieDeatils.country || "N/A";
            document.getElementById('poster').src = movieDeatils.poster || "";
        };
       

    } catch (error) {
        console.error("An error:", error);
    }
});
