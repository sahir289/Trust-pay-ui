import { io } from "socket.io-client";

const socket = io("http://localhost:8090", {
  autoConnect: false, // Avoids auto-reconnection issues
  transports: ["websocket"], // Forces WebSocket transport
});

export default socket;
