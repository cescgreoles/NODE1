const { mongoose } = require("mongoose");
const Movie = require("../../api/movies/movies.model");
const { DB_URL } = require("../database/db");

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    img: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    img: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/79/23/02/20073059.jpg",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    img: "https://es.web.img2.acsta.net/c_310_420/pictures/14/02/13/11/08/054573.jpg",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    img: "https://es.web.img2.acsta.net/c_310_420/pictures/16/06/13/16/29/565333.jpg",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    img: "https://es.web.img2.acsta.net/c_310_420/pictures/14/10/02/11/07/341344.jpg",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    img: "https://es.web.img3.acsta.net/c_310_420/pictures/14/02/18/13/24/107457.jpg",
    year: 2004,
    genre: "Comedia romántica",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find().lean();

    if (!allMovies.length) {
      console.log("[seed]: No se encuentran personajes, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allMovies.length} personajes.`);
      await Movie.collection.drop();
      console.log("[seed]: Colección Movies eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Movie.insertMany(movies);
    console.log("[seed]: Nuevas peliculas añadidas con éxito");
  })
  .catch((error) => console.log("[seed]: Error añadiendo las peliculas", error))
  .finally(() => mongoose.disconnect());
