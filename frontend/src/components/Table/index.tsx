export default function Table({ data, columns, isSuccess, isLoading }) {
  if (isLoading || !isSuccess) return <h1 className="text-black text-center">Request Data</h1>;
  return (
    <div className="overflow-x-auto table-lg">
      <table className="table bg-gray-300">
        {/* head */}
        <thead className="text-black font-extrabold">
          <tr>
            {columns.map((column, index) => <th key={ index }>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((row, index) => (
            <tr className="text-black font-extrabold hover" key={ index }>
              <th>{row.id}</th>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
