// MONGOOSE ENLAZADO CON INDEX
const mongoose = require("mongoose");

// Ruta de la base de datos. Esta es local, podría ser la ruta de mongo atlas.
// ENLAZAMOS CON NUESTRA BASE DE DATOS
const DB_URL =
  "mongodb+srv://root:root@cluster0.0xy1t4k.mongodb.net/MoviesI?retryWrites=true&w=majority";

// SI NUESTRA URL NO ESTA ENLAZADA QUE ME PONGA EL SIGUUIENTE MENSAJE
if (!DB_URL) throw new Error("No se encuentra la URL a la base de datos");

//  Y SI LA ENCUENTRA...
const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectado con éxito a la db: ${name} en ${host}`);
  } catch (error) {
    console.log("Error conectando a la base de datos:", error);
  }
};

// EXPORTAMOS
module.exports = {
  connectDb,
  DB_URL,
};
