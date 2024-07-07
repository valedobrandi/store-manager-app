import { ReactNode } from 'react';
import createColumns from '../../utils/createColumns';

type TableProps = {
  data: Record<string, any>[];
  children?: ReactNode;
  close?: boolean;
  visible?: string;
};

export default function Table({ data, visible = '',
  children = null, close = false }: TableProps) {
  return (
    <div className={ `${close ? 'hidden' : ''} m-4` }>
      <div className="mb-8">
        <div className="join">

          {children}
        </div>
        <table className="table table-fixed">
          <thead>
            <tr
              className="bg-black text-white"
            >
              {createColumns(data).map((column, index) => (
                <th key={ index }>{column.toUpperCase()}</th>))}
            </tr>
          </thead>
          <tbody className={ visible }>
            {data.map((row, index) => {
              const values = Object.values(row);
              return (
                <tr className="text-black font-extrabold " key={ index }>
                  {values.map((objValue: string, indexA) => (
                    <td key={ indexA }>{objValue}</td>))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
