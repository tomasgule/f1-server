import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "localhost:4000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("data", (data) => {
    console.log(data);
    io.emit("frontend", data);
  });
});
