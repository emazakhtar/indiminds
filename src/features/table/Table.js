export function Table({ data }) {
  if (!data) return <p>Loading...</p>;
  return (
    <table className="w-full mt-2 border">
      <thead>
        <tr>
          {Object.keys(data).map((key) => (
            <th key={key} className="border p-2">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(data).map((val, i) => (
            <td key={i} className="border p-2">
              {val}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
