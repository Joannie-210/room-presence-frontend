import { useState } from "react";
import { sendMessage } from "../services/socket";

export default function ControlPanel() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const btn =
    "bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900";

  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      <h2 className="font-semibold text-lg">Room Controls</h2>

      <input
        className="border p-2 w-full rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="border p-2 w-full rounded"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button onClick={() => sendMessage({ type: "JOIN", username, room })} className={btn}>
          Join Room
        </button>
        <button onClick={() => sendMessage({ type: "LEAVE", username, room })} className={btn}>
          Leave Room
        </button>
        <button onClick={() => sendMessage({ type: "GET_ONLINE_USERS" })} className={btn}>
          Online Users
        </button>
        <button onClick={() => sendMessage({ type: "GET_ROOM_PRESENCE", room })} className={btn}>
          Room Presence
        </button>
      </div>
    </div>
  );
}
