import { ReactNode } from 'react';
import useCollapse from '../../Hooks/useCollapse';
import createColumns from '../../utils/createColumns';
import FetchButton from '../FetchButton';

type TableProps = {
  data: Record<string, any>[];
  useRefresh: () => void;
  children?: ReactNode;
  close?: boolean;
};

export default function Table({ data, useRefresh,
  children = null, close = false }: TableProps) {
  const { collapse, setCollapse, visible } = useCollapse();

  return (
    <div className={ close ? 'hidden' : '' }>
      {children}
      <table className="table table-fixed m-4">
        <thead>
          <tr
            className="bg-black text-white"
          >
            <input
              onClick={ () => setCollapse(!collapse) }
              type="checkbox"
              className="toggle toggle-sm ml-4 mr-2"
              defaultChecked
            />
            <FetchButton btnType="info" title="REFRESH" usefetchLazyData={ useRefresh } />
            {createColumns(data).map((column, index) => (
              <th key={ index }>{column.toUpperCase()}</th>))}

          </tr>
        </thead>
        <tbody className={ visible }>
          {data.map((row, index) => {
            const values = Object.values(row);
            return (
              <tr className="text-black font-extrabold " key={ index }>
                <td>-</td>
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
