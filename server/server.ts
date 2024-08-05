import express,{Request,Response} from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

 
const app = express();
const httpserver = createServer(app);

const io = new Server(httpserver,{

})
io.on("connection",(socket) =>{
    console.log(socket.id)

})
httpserver.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
  