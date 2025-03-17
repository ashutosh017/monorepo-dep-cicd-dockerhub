import { WebSocketServer } from "ws";
import db from "@repo/db/client";
const server = new WebSocketServer({
  port: 3002,
});

server.on("connection", async (socket) => {
  const user = await db.user.findFirst();
  socket.on("message", (data) => {
    console.log(data);
    console.log(user);
    socket.send(
      JSON.stringify({
        user,
        data,
      })
    );
  });
});
