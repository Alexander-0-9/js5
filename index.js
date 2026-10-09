const API_URL = "https://whoa.onrender.com/whoas/random";

async function getFilm() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Kunne ikke hente data");
        }

        const result = await response.json();

        // API-et returnerer en liste
        const data = result[0];

        console.log(data);


        // Filmtittel
        document.getElementById("title").textContent =
            data.movie;


        // Årstall
        document.getElementById("year").textContent =
            data.year;


        // Regissør
        document.getElementById("director").textContent =
            data.director;


        // Rollefigur
        document.getElementById("actors").textContent =
            data.character;


        // Filmsitat
        document.getElementById("quote").textContent =
            data.full_line;


        // Tidspunkt i filmen
        document.getElementById("timestamp").textContent =
            data.timestamp;


        // Tell hvor mange ganger "whoa" finnes i sitatet
        const whoaCount =
            (data.full_line.match(/whoa/gi) || []).length;

        document.getElementById("whoaCount").textContent =
            whoaCount;


        // Filmplakat
        document.getElementById("poster").src =
            data.poster;

        document.getElementById("poster").alt =
            data.movie;


        // Video
        const video = document.getElementById("video");

        video.src = data.video["720p"];

        video.load();

    }

    catch (error) {

        console.error("Feil:", error);

        document.getElementById("title").textContent =
            "Kunne ikke hente filmen.";
    }
}


// Hent film når siden åpnes
getFilm();


// Hent ny film når knappen trykkes
document.getElementById("newFilm").addEventListener(
    "click",
    getFilm
);