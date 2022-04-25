// import { ReactNode } from 'react';
import { useSortableData } from '~/functions/useSortableData';

import * as S from './styles';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface TableDataProps {
  // [key: string]: ReactNode;
  name?: string;
  email?: string;
  status?: string;
  nickname?: string;
  cellphone?: string;
  localization?: string;
  associatedAt?: string;
}
interface ColumnsProps {
  key?: string;
  title?: string;
}

interface TableProps {
  tableColumns: ColumnsProps[];
  tableData: TableDataProps[];
}

export function Table({ tableColumns, tableData }: TableProps) {
  const { items, requestSort, sortConfig } = useSortableData(tableData);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Table variant="simple" size="sm">
          <S.THead>
            <S.TRows>
              {tableColumns.map((column) => (
                <S.THeadColumn key={column.key}>
                  <S.ButtonOrder onClick={() => requestSort(column.key)}>
                    {column.title}
                    {sortConfig.key === column.key ? (
                      <>
                        {sortConfig.direction === 'ascending' ? (
                          <IoIosArrowUp size={14} />
                        ) : (
                          <IoIosArrowDown size={14} />
                        )}
                      </>
                    ) : (
                      <IoIosArrowDown size={14} />
                    )}
                  </S.ButtonOrder>
                </S.THeadColumn>
              ))}
            </S.TRows>
          </S.THead>

          {tableData.length > 0 ? (
            <S.TBody>
              {items.map((data, dataIndex) => (
                <S.TRows key={dataIndex}>
                  {Object.keys(data).map((column, columnIndex) => (
                    <S.TBodyColumn key={columnIndex}>
                      <div>{data[column]}</div>
                    </S.TBodyColumn>
                  ))}
                </S.TRows>
              ))}
            </S.TBody>
          ) : (
            <S.TableCaption>Ainda não há nada por aqui 🙁 </S.TableCaption>
          )}
        </S.Table>
      </S.Wrapper>
    </S.Container>
  );
}
