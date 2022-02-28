import { ReactNode } from 'react';

import { TableCaption } from '@chakra-ui/react';

import * as S from './styles';

interface TableDataProps {
  [key: string]: ReactNode;
}

const tableColumns = [
  {
    key: 'name',
    title: 'Name',
  },

  {
    key: 'Value',
    title: 'Value',
  },

  {
    key: 'type',
    title: 'type',
  },

  {
    key: 'date',
    title: 'date',
  },

  {
    key: 'orders',
    title: 'orders',
  },
];

const tableData: TableDataProps[] = [
  {
    name: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        John Doe
      </>
    ),
    Value: '$ 200,00',
    type: 'Delivered',

    date: '16/11/1995',

    orders: '438',
  },

  {
    name: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        John Doe
      </>
    ),
    Value: '$ 200,00',
    type: 'Delivered',

    date: '16/11/1995',

    orders: '438',
  },

  {
    name: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        John Doe
      </>
    ),
    Value: '$ 200,00',
    type: 'Delivered',

    date: '16/11/1995',

    orders: '438',
  },

  {
    name: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        John Doe
      </>
    ),
    Value: '$ 200,00',
    type: 'Delivered',

    date: '16/11/1995',

    orders: '438',
  },
];

export function Table() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Table variant="simple">
          <S.TableHead>
            <S.TableRows>
              {tableColumns.map((column) => (
                <S.TColumnHead key={column.key}>{column.title}</S.TColumnHead>
              ))}
            </S.TableRows>
          </S.TableHead>

          {tableData.length > 0 ? (
            <S.TableBody>
              {tableData.map((data, dataIndex) => (
                <S.TableRows key={dataIndex}>
                  {Object.keys(data).map((column, columnIndex) => (
                    <S.TColumnBody key={columnIndex}>
                      <div>{data[column]}</div>
                    </S.TColumnBody>
                  ))}
                </S.TableRows>
              ))}
            </S.TableBody>
          ) : (
            <TableCaption>Ainda não há nada por aqui 🙁 </TableCaption>
          )}
        </S.Table>
      </S.Wrapper>
    </S.Container>
  );
}
