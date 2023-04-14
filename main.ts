// Importando modulos necesarios para inicialización del servidor
import server from "./src/server.ts";

server.listen(3000, () => {
  console.log("Listening in port 3000");
});
