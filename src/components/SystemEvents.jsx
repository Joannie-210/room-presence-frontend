export default function SystemEvents({ events }) {
  return (
    <div className="bg-white p-4 rounded shadow max-h-64 overflow-y-auto">
      <h2 className="font-semibold mb-2">System Events</h2>
      <ul className="text-sm space-y-1">
        {events.map((e, i) => (
          <li key={i}>• {e}</li>
        ))}
      </ul>
    </div>
  );
}
