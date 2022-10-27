const express = require("express");
const db = require("./src/utils/database/db");
const indexRoutes = require("./src/api/index/index.routes");
const movieRoutes = require("./src/api/movies/movies.routes");
const cors = require("cors");

db.connectDb();

//  CREA EL SERVIDOR
const server = express();
const PORT = 8080;

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//  GRACIAS A ESTO REQ.BODY FUNCIONA
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// AQUI LAS RUTAS
server.use("/", indexRoutes);
server.use("/movies", movieRoutes);

// SIRVE CUANDO NO ENCONTRAMOS LA RUTA ESPERADA (404 NOT FOUND)
server.use("*", (req, res) => {
  return res.status(404).json("Ruta no encontrada");
});
// CONTROLADOR DE ERRORES
server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
  // console.log("ERROR NEXT NO ERES EL CANDIDATO -->", error.message);
  // return res.status(418).json("Juan decia la verdad");
});

// ARRANCA EL SERVIDOR
server.listen(PORT, () => {
  console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});
