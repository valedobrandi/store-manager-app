export default function Table({ data, columns, isSuccess, isLoading }) {
  return (
    <div className="overflow-x-auto table-lg">
      <table className="table">
        {/* head */}
        <thead className="text-black font-extrabold">
          <tr>
            {columns && columns.map((column, index) => <th key={ index }>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isSuccess && data.map((row, index) => (
            <tr className="text-black font-extrabold" key={ index }>
              <th>{row.id}</th>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
