import { useState } from 'react';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { Button, PersonsFilter } from '~/components';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

export default function Reports() {
  const { checkPersonStatusActive } = usePersonsFilter();
  const [filterType, setFilterType] = useState('');

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Relatórios</h2>

        <S.WrapperSearch>
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

          <S.WrapperButtonsSearch>
            <Button
              size="md"
              title="Limpar"
              rightIcon={<FiTrash />}
              disabled={!checkPersonStatusActive}
            />
            <Button
              size="md"
              title="Buscar"
              rightIcon={<FiSearch />}
              disabled={!checkPersonStatusActive}
            />
          </S.WrapperButtonsSearch>
        </S.WrapperSearch>

        {filterType && (
          <S.WrapperFilters>
            <S.WrapperOptions>
              {filterType === 'pessoas' && <PersonsFilter />}

              {filterType !== 'pessoas' && (
                <h3>Ainda não há nada por aqui {':('}</h3>
              )}
            </S.WrapperOptions>
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
