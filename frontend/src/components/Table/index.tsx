import createColumns from '../../utils/createColumns';

type TableProps = {
  data: Record<string, any>[];
};

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto table-lg min-h-64 font-Poppins">
      <table className="table">
        <thead className="text-black font-extrabold">
          <tr>
            {data && (
              createColumns(data).map((column, index) => (
                <th key={ index }>{column.toUpperCase()}</th>)))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, index) => {
            const values = Object.values(row);
            return (
              <tr className="text-black font-extrabold" key={ index }>
                {values.map((objValue: string, indexA) => (
                  <td key={ indexA }>{objValue}</td>))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
