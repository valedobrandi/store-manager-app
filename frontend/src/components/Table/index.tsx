import { ReactNode } from 'react';

import createColumns from '../../utils/createColumns';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import useDispatchs from '../../Hooks/useDispatchs';

type TableProps = {
  data: Record<string, any>[];
  children?: ReactNode;
  close?: boolean;
  visible?: string;
  icon?: boolean;
};

export default function Table({ data, visible = '',
  children = null, close = false, icon = false }: TableProps) {
  const { onDispatch } = useDispatchs();
  return (
    <div className={ `${close ? 'hidden' : ''} m-4` }>
      <div className="mb-8">
        <div className="join">

          {children}
        </div>
        <table className="table table-fixed font-Poppins">
          <thead>
            <tr
              className="bg-black text-white text-center"
            >
              {icon && <th aria-label="delete column" />}
              {createColumns(data).map((column, index) => (
                <th key={ index }>{column.toUpperCase()}</th>

              ))}
            </tr>
          </thead>
          <tbody className={ visible }>
            {data.map((row, index) => {
              const values = Object.values(row);
              const id = data[index].productId;
              return (
                <tr className="text-black font-extrabold text-center" key={ index }>
                  {icon && (
                    <ButtonDelete
                      handleClick={ () => onDispatch.deleteItemSaleList(id) }
                    />)}
                  {values.map((objValue: string, indexA) => (
                    <td key={ indexA }>{objValue}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
