import "reflect-metadata";
import app from "./app";

function bootstrapApp() {
  app.listen(3000);
  console.log(".:|Server is Listening on Port", 3000);
}

bootstrapApp();
