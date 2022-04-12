import { ReactNode } from 'react';
import { useSortableData } from '~/functions/useSortableData';

import * as S from './styles';

import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

interface TableDataProps {
  [key: string]: ReactNode;
}

const tableColumns = [
  {
    key: 'status',
    title: 'Status',
  },

  {
    key: 'name',
    title: 'Nome',
  },

  {
    key: 'surname',
    title: 'Apelido',
  },

  {
    key: 'email',
    title: 'E-mail',
  },

  {
    key: 'localization',
    title: 'Localização',
  },

  {
    key: 'phone',
    title: 'Telefone',
  },

  {
    key: 'timeSociety',
    title: 'Tempo de associação',
  },
];

const tableData: TableDataProps[] = [
  {
    status: 'Ativo',
    name: 'Vítor',
    surname: 'Vítor',
    email: 'veq@gmail.com',
    localization: 'Itapetininga - SP',
    phone: '(15) 99605 0001',
    timeSociety: '1 anos',
  },

  {
    status: 'Pendente',
    name: 'Jhonatam',
    surname: 'Jhonatam',
    email: 'jh@gmail.com',
    localization: 'Itapetininga - SP',
    phone: '(15) 99605 0002',
    timeSociety: '3 anos',
  },

  {
    status: 'Expirado',
    name: 'Bruno',
    surname: 'Bruno',
    email: 'br@gmail.com',
    localization: 'Itapetininga - SP',
    phone: '(15) 99605 0003',
    timeSociety: '2 anos',
  },
];

export function Table() {
  const { items, requestSort, sortConfig } = useSortableData(tableData);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Table variant="simple" size="sm">
          <S.THead>
            <S.TRows>
              {tableColumns.map((column) => (
                <S.THeadyCollum key={column.key}>
                  <S.ButtonOrder onClick={() => requestSort(column.key)}>
                    {column.title}
                    {sortConfig.direction === 'ascending' ||
                    sortConfig.direction === null ? (
                      <AiOutlineCaretUp size={14} />
                    ) : (
                      <AiOutlineCaretDown size={14} />
                    )}
                  </S.ButtonOrder>
                </S.THeadyCollum>
              ))}
            </S.TRows>
          </S.THead>

          {tableData.length > 0 ? (
            <S.TBody>
              {items.map((data, dataIndex) => (
                <S.TRows key={dataIndex}>
                  {Object.keys(data).map((column, columnIndex) => (
                    <S.TBodyCollum key={columnIndex}>
                      <div>{data[column]}</div>
                    </S.TBodyCollum>
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
