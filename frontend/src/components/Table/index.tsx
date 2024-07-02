type TableProps = {
  data: string[];
  columns: string[];
  isSuccess: boolean;
}

export default function Table({ data, columns, isSuccess }: TableProps) {

  return (
    <div className="overflow-x-auto table-lg min-h-64">
      <table className="table">
        {/* head */}
        <thead className="text-black font-extrabold">
          <tr>
            {columns && columns.map((column, index) => <th key={index}>{column.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isSuccess && data.map((row, index) => {
            const values = Object.values(row);
            return (
              <tr className="text-black font-extrabold" key={index}>
                {values.map((objValue: string) => <td>{objValue}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
