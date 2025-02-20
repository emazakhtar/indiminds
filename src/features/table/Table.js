export function Table({ data }) {
  console.log("Table received data:", data);

  if (
    !data ||
    !data.message ||
    !Array.isArray(data.message) ||
    data.message.length === 0
  ) {
    return (
      <p className="text-center text-gray-400 text-lg font-semibold">
        Loading...
      </p>
    );
  }

  const tableData = data.message;

  return (
    <div className="overflow-x-auto bg-gray-950 p-6 rounded-2xl shadow-2xl border border-gray-800">
      <table className="w-full text-white text-sm">
        <thead className="bg-gray-9 00 text-white font-semibold text-md border-b border-gray-700">
          <tr>
            {Object.keys(tableData[0] || {}).map((key) => (
              <th
                key={key}
                className="p-4 text-left uppercase tracking-wider text-gray-400"
              >
                {key.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-850"
              } hover:bg-gray-800 transition-all duration-200 text-lg font-medium`}
            >
              {Object.entries(row).map(([key, val], i) => (
                <td
                  key={i}
                  className="p-4 border-b border-gray-800 text-center"
                >
                  {key.toLowerCase().includes("change") ? (
                    <span
                      className={`${
                        parseFloat(val) >= 0
                          ? "text-green-500 font-bold"
                          : "text-red-500 font-bold"
                      } bg-opacity-20 px-2 py-1 rounded-md`}
                    >
                      {val}
                    </span>
                  ) : (
                    <span className="text-gray-300">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
