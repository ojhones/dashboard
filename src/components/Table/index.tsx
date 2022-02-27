import { ReactNode } from 'react';

import { TableCaption } from '@chakra-ui/react';

import * as S from './styles';

interface TableDataProps {
  [key: string]: ReactNode;
}

const tableColumns = [
  {
    key: 'nome',
    title: 'Nome/CPF',
  },

  {
    key: 'apelido',
    title: 'Apelido',
  },

  {
    key: 'tipo',
    title: 'Tipo',
  },

  {
    key: 'data',
    title: 'data',
  },

  {
    key: 'situacao',
    title: 'Situação',
  },
];

const tableData: TableDataProps[] = [
  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
  },

  {
    nome: (
      <>
        <S.CoinImage
          src="/images/svg/avatar.svg"
          fallbackSrc="/images/svg/avatar.svg"
          alt="avatar"
        />
        Carlos
      </>
    ),
    apelido: 'Apelido',
    tipo: 'Competidor',

    data: '16/11/1995',

    situacao: 'ok',
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
