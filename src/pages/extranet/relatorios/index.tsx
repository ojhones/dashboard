import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button, PersonsFilter } from '~/components';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

export default function Reports() {
  const [filterType, setFilterType] = useState('');

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Relatórios</h2>

        <C.Select
          size="md"
          bg="white"
          maxWidth="15rem"
          placeholder="Tipo de Relatório"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="pessoas">Pessoas</option>
          <option value="cobrancas">Cobranças</option>
          <option value="eventos">Eventos</option>
          <option value="provas">Provas</option>
          <option value="resultados">Resultados</option>
          <option value="administrativo">Administrativo</option>
        </C.Select>

        {filterType && (
          <S.WrapperFilters>
            <S.WrapperOptions>
              {filterType === 'pessoas' && <PersonsFilter />}

              {filterType === 'cobrancas' && <h2>Cobrancas</h2>}

              {filterType === 'eventos' && <h2> Eventos</h2>}
            </S.WrapperOptions>

            <S.WrapperSearch>
              {filterType && (
                <Button size="md" title="Buscar" rightIcon={<FiSearch />} />
              )}
            </S.WrapperSearch>
          </S.WrapperFilters>
        )}

        <S.Content>
          {!filterType && (
            <S.WrapperImageDefault>
              <span>Selecione um tipo de relatório para iniciar.</span>
              <S.ImageDefault
                alt="Logo no next js"
                fallbackSrc="/images/svg/search.svg"
                src="/images/svg/search.svg"
              />
            </S.WrapperImageDefault>
          )}

          {filterType && (
            <S.WrapperImageDefault>
              <span>Aplique os filtros desejados e clique em buscar!</span>
              <S.ImageDefault
                alt="Logo no next js"
                fallbackSrc="/images/svg/filter.svg"
                src="/images/svg/filter.svg"
              />
            </S.WrapperImageDefault>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
