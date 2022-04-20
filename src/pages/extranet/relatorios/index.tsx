import { useRouter } from 'next/router';
import { useState } from 'react';

import { BiExport } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { Button, PersonsFilter, Table, Input } from '~/components';

import { useFilterType } from '~/hooks/FilterType';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

export default function Reports() {
  const router = useRouter();

  const {
    checkPersonStatusActive,
    handleResetPersonFilters,
    checkProfessionalStatusActive,
  } = usePersonsFilter();
  const { filterType, setFilterType } = useFilterType();

  const [search, setSearch] = useState<boolean>(false);

  function handleSetFilterType(value: string | string[] | undefined) {
    setFilterType(value);

    router.push({
      query: { filterType: value },
    });
  }

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Relatórios</h2>

        <S.WrapperSearch>
          <C.Select
            size="md"
            bg="white"
            maxWidth="15rem"
            value={filterType}
            placeholder="Tipo de Relatório"
            onChange={(e) => handleSetFilterType(e.target.value)}
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
              title="Buscar"
              rightIcon={<FiSearch />}
              onClick={() => setSearch(!search)}
              disabled={
                !checkPersonStatusActive && !checkProfessionalStatusActive
              }
            />
            <Button
              size="md"
              title="Exportar"
              rightIcon={<BiExport size={18} />}
              onClick={() => setSearch(!search)}
              disabled={!search}
            />
            <Button
              size="md"
              title="Limpar"
              rightIcon={<FiTrash />}
              onClick={handleResetPersonFilters}
              disabled={
                !checkPersonStatusActive && !checkProfessionalStatusActive
              }
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
          {search && <h2>Resultado:</h2>}

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

          {filterType && !search && (
            <S.WrapperImageDefault>
              <span>Aplique os filtros desejados e clique em buscar!</span>
              <S.ImageDefault
                alt="Logo no next js"
                fallbackSrc="/images/svg/filter.svg"
                src="/images/svg/filter.svg"
              />
            </S.WrapperImageDefault>
          )}

          {search && (
            <>
              <C.Flex
                alignItems="center"
                justify="flex-start"
                gap="1rem"
                maxWidth="30rem"
              >
                <Input
                  bg="#fff"
                  type="text"
                  name="pesquisar"
                  title="Pesquisar"
                  placeholder="Digite o que deseja pesquisar"
                  icon={AiOutlineSearch}
                />

                <Button size="md" title="Pesquisar" rightIcon={<FiSearch />} />
              </C.Flex>
              <Table />
            </>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
