// Obtén el botón y el elemento para mostrar el chiste
const getJokeButton = document.getElementById("get-joke");
const jokeDisplay = document.getElementById("joke-display");

// Agrega un oyente de eventos para el botón
getJokeButton.addEventListener("click", () => {
  // Llama a la función que obtiene el chiste de la API
  getRandomJoke();
});

// Función que se conecta con la API de JokeAPI
async function getRandomJoke() {
  // Construye la URL para realizar la solicitud a la API
  const apiUrl = "https://v2.jokeapi.dev/joke/Any";

  try {
    // Realiza la solicitud a la API
    const response = await fetch(apiUrl);

    // Verifica si la respuesta es exitosa
    if (response.ok) {
      // Convierte la respuesta a JSON
      const data = await response.json();

      // Muestra el chiste en el elemento "joke-display"
      displayJoke(data);
    } else {
      // Muestra un mensaje de error en caso de que la solicitud no sea exitosa
      jokeDisplay.innerHTML = "<p>Error al obtener el chiste.</p>";
    }
  } catch (error) {
    // Muestra un mensaje de error en caso de que ocurra una excepción
    jokeDisplay.innerHTML = "<p>Error al conectarse con la API.</p>";
  }
}

// Función que muestra el chiste en el elemento "joke-display"
function displayJoke(jokeData) {
  let joke;

  if (jokeData.type === "single") {
    // Si el chiste es de una sola parte
    joke = jokeData.joke;
  } else {
    // Si el chiste tiene dos partes (pregunta y respuesta)
    joke = `${jokeData.setup}<br><br>${jokeData.delivery}`;
  }

  // Agrega el chiste al elemento "joke-display"
  jokeDisplay.innerHTML = `<p>${joke}</p>`;
}
