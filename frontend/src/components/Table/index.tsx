import createColumns from '../../utils/createColumns';

type TableProps = {
  data: Record<string, any>[];
  width?: string;
};

export default function Table({ data, width = '' }: TableProps) {
  return (
    <div
      className={ `overflow-x-auto
    table-lg font-Poppins bg-slate-50
    rounded-lg mt-2 w-${width}` }
    >
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
