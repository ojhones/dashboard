import { ReactNode, useEffect, useState } from 'react';
import { useSortableData } from '~/functions/useSortableData';

import { Button } from '~/components';

import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import * as S from './styles';
import * as C from '@chakra-ui/react';

interface TableDataProps {
  name?: string;
  email?: string;
  nickname?: string;
  cellphone?: string;
  localization?: string;
  associatedAt?: string;
  status?: ReactNode;
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

  const [lenghTable, setLenghTable] = useState(20);

  useEffect(() => {
    if (tableData) setLenghTable(20);
  }, [tableData]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Table variant="simple" size="sm">
          <S.THead>
            <S.TRows>
              <S.THeadColumn>
                <S.ButtonOrder disabled>{tableColumns[0].title}</S.ButtonOrder>
              </S.THeadColumn>
              {tableColumns.map((column) => (
                <>
                  {column.key !== 'status' && (
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
                  )}
                </>
              ))}
            </S.TRows>
          </S.THead>

          {tableData.length > 0 ? (
            <>
              <S.TBody>
                {items
                  .map((data, dataIndex) => (
                    <S.TRows key={dataIndex}>
                      {Object.keys(data).map((column, columnIndex) => (
                        <S.TBodyColumn key={columnIndex}>
                          <div>{data[column]}</div>
                        </S.TBodyColumn>
                      ))}
                    </S.TRows>
                  ))
                  .splice(0, lenghTable)}
              </S.TBody>

              <S.TableCaption>
                <C.Flex w="100%" justify="flex-end">
                  <Button
                    size="sm"
                    title="Carregar Mais"
                    rightIcon={<AiOutlineDown />}
                    onClick={() => setLenghTable(lenghTable + 20)}
                    disabled={lenghTable <= tableData.length ? false : true}
                  />
                </C.Flex>
              </S.TableCaption>
            </>
          ) : (
            <S.TableCaption>Ainda não há nada por aqui 🙁 </S.TableCaption>
          )}
        </S.Table>
      </S.Wrapper>
    </S.Container>
  );
}
