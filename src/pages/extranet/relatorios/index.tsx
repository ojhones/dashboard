import { useRouter } from 'next/router';
import { useState } from 'react';

import { BiExport } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { api } from '~/services/api/config';

import { tableColumnsRender } from '~/utils/tableColumnsRender';
import { Button, PersonsFilter, Table, Input } from '~/components';

import { useFilterType } from '~/hooks/FilterType';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

export default function Reports() {
  const router = useRouter();

  const {
    checkedPersonType,
    checkPersonStatusActive,
    handleResetPersonFilters,
    checkProfessionalStatusActive,
  } = usePersonsFilter();
  const { filterType, setFilterType } = useFilterType();

  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  async function handleResetAllFilters() {
    await setTableData([]);
    handleResetPersonFilters();
  }

  async function handleSetFilterType(value: string | string[] | undefined) {
    await router.push({
      query: { filterType: value },
    });

    setFilterType(value);
  }

  function handleGetTableData() {
    try {
      setLoading(true);

      api
        .get(`/partners/report/associateds?partnerTypeId=1&status=1`)
        .then((response) => {
          setTableData(response.data.partners);
          setLoading(false);
        });
    } catch (error) {
      throw new Error('Erro ao listar os Dados da Tabela');
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperSearch>
          <S.WrapperFilterType>
            <h2>Relatórios: </h2>
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
          </S.WrapperFilterType>

          <S.WrapperButtonsSearch>
            <Button
              size="md"
              title="Buscar"
              isLoading={loading}
              rightIcon={<FiSearch />}
              onClick={() => handleGetTableData()}
              disabled={
                !checkPersonStatusActive && !checkProfessionalStatusActive
              }
            />
            <Button
              size="md"
              title="Exportar"
              rightIcon={<BiExport size={18} />}
              // onClick={() => handleGetTableData()}
              disabled={!tableData}
            />
            <Button
              size="md"
              title="Limpar"
              rightIcon={<FiTrash />}
              onClick={handleResetAllFilters}
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

          {filterType && !tableData && (
            <S.WrapperImageDefault>
              <span>Aplique os filtros desejados e clique em buscar!</span>
              <S.ImageDefault
                alt="Logo no next js"
                fallbackSrc="/images/svg/filter.svg"
                src="/images/svg/filter.svg"
              />
            </S.WrapperImageDefault>
          )}

          {tableData.length > 0 && (
            <>
              <S.WrapperInputSearch>
                <Input
                  marginLeft="auto"
                  bg="#fff"
                  type="text"
                  name="pesquisar"
                  title="Pesquisar"
                  placeholder="Digite o que deseja pesquisar"
                  icon={AiOutlineSearch}
                />
              </S.WrapperInputSearch>

              <Table
                tableData={tableData}
                tableColumns={tableColumnsRender(checkedPersonType)}
              />
            </>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
