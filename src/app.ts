import {Server} from '../src/presentacion/server'
import { envs } from "./config"; // importar el archivo envs de config
(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
  new Server({
    port: envs.PORT, // asignamos la variable de entorno en nuestra instancia de servidor.
  }).start();
  }