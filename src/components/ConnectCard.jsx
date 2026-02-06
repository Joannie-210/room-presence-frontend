import { useState } from "react";
import { connectSocket } from "../services/socket";

export default function ConnectCard({ onConnect, onMessage }) {
  const [url, setUrl] = useState("ws://localhost:8080/ws/presence");

  const connect = () => {
    connectSocket(url, onMessage, () => onConnect(false));
    onConnect(true);
  };

  return (
    <div className="bg-white p-4 rounded shadow flex gap-3">
      <input
        className="border p-2 rounded flex-1"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={connect}
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        Connect
      </button>
    </div>
  );
}
