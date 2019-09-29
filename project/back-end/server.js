const express = require("express");
const http = require("http");
const socketIO = require("socket.io");


// our localhost port
const port = process.env.PORT || 3001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

io.on("connection", socket => {
  console.log("New client connected" + socket.id);
  socket.on("muthu", kumar => {
      console.log('onnnnnnnnnn', kumar)
      io.sockets.emit('get_muthu', kumar)
  })




socket.on("january", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_january', kumar)
})


socket.on("Febuary", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_Febuary', kumar)
})


socket.on("march", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_march', kumar)
})


socket.on("april", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_april', kumar)
})


socket.on("may", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_may', kumar)
})

socket.on("june", kumar => {
    console.log('onnnnnnnnnn', kumar)
    io.sockets.emit('get_june', kumar)
})


  //console.log(socket);

  // Returning the initial data of food menu from FoodItems collection
  
  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend */

app.use(express.static("build"));
app.use("/kitchen", express.static("build"));
app.use("/updatepredicted", express.static("build"));

server.listen(port, () => console.log(`Listening on port ${port}`));
