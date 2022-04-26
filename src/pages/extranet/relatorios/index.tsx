import { useRouter } from 'next/router';
import { useState, useEffect, ReactNode } from 'react';

import { BiExport } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { api } from '~/services/api/config';

import { tableColumnsRender } from '~/utils/tableColumnsRender';
import { convertStateToCallApi } from '~/utils/convertStateToCallApi';
import { checkedPersonStatusToCallApi } from '~/utils/checkedPersonStatusToCallApi';
import { convertDateExhibitionToCallApi } from '~/utils/convertDateExhibitionToCallApi';
import {
  convertTimeSocietyToCallApi,
  convertCustomTimeSocietyToCallApi,
} from '~/utils/convertTimeSocietyToCallApi';

import { Button, PersonsFilter, Table, Input, Badge } from '~/components';

import { useFilterType } from '~/hooks/FilterType';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

interface PartnersProps {
  name: string;
  email: string;
  nickname: string;
  status: ReactNode;
  cellphone: string;
  localization: string;
  associatedAt?: string;
}

interface PartnersTableProps {
  name: string;
  city: string;
  email: string;
  state: string;
  status: string;
  nickname: string;
  cellphone: string;
  localization: string;
  associated_at: string;
}

export default function Reports() {
  const router = useRouter();

  const {
    state,
    timeSociety,
    checkedPersonType,
    checkedPersonStatus,
    checkPersonStatusActive,
    customTimeSocietyStart,
    customTimeSocietyFinish,
    handleResetPersonFilters,
    checkProfessionalStatusActive,
  } = usePersonsFilter();
  const { filterType, setFilterType } = useFilterType();

  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchTable, setSearchTable] = useState('');
  const [loadingExport, setLoadingExport] = useState(false);
  const [formattedTableData, setFormattedTableData] = useState<PartnersProps[]>(
    []
  );

  console.log(searchTable, 'searchTable');

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
    if (checkedPersonType === 'socios') {
      try {
        setLoading(true);

        api
          .get(
            `/partners/report/associateds?partnerTypeId=1&status=${checkedPersonStatusToCallApi(
              checkedPersonStatus
            )}${convertTimeSocietyToCallApi(
              String(timeSociety)
            )}${convertCustomTimeSocietyToCallApi(
              String(timeSociety),
              String(customTimeSocietyStart),
              String(customTimeSocietyFinish)
            )}${convertStateToCallApi(state)}`
          )
          .then((response) => {
            setTableData(response.data.partners);
            setLoading(false);
          });
      } catch (error) {
        throw new Error('Erro ao listar os Dados da Tabela');
      }
    }
  }

  function handleExport() {
    if (checkedPersonType === 'socios') {
      try {
        setLoadingExport(true);

        api
          .get(
            `/partners/report/associateds/export?partnerTypeId=1&status=${checkedPersonStatusToCallApi(
              checkedPersonStatus
            )}${convertTimeSocietyToCallApi(
              String(timeSociety)
            )}${convertCustomTimeSocietyToCallApi(
              String(timeSociety),
              String(customTimeSocietyStart),
              String(customTimeSocietyFinish)
            )}${convertStateToCallApi(state)}`
          )
          .then((response) => {
            setLoadingExport(false);
            router.push(response.request.responseURL);
          });
      } catch (error) {
        throw new Error('Erro ao exportar os dados');
      }
    }
  }

  useEffect(() => {
    if (tableData) {
      if (checkedPersonType === 'socios') {
        const formattedPartnerTable = tableData.map(
          (itemTable: PartnersTableProps) => {
            return {
              status: <Badge title={itemTable.status} />,
              name: itemTable.name,
              nickname: itemTable.nickname,
              email: itemTable.email,
              localization: `${itemTable.city} - ${itemTable.state}`,
              cellphone: itemTable.cellphone,
              associatedAt:
                itemTable.associated_at !== null
                  ? convertDateExhibitionToCallApi(itemTable.associated_at)
                  : '--',
            };
          }
        );
        setFormattedTableData(formattedPartnerTable);
      }
    }
  }, [checkedPersonType, tableData]);

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
              isLoading={loadingExport}
              rightIcon={<BiExport size={18} />}
              onClick={() => handleExport()}
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
                  icon={AiOutlineSearch}
                  placeholder="Digite o que deseja pesquisar"
                  onChange={(e) => setSearchTable(e.target.value)}
                />
              </S.WrapperInputSearch>

              <Table
                tableData={formattedTableData}
                tableColumns={tableColumnsRender(checkedPersonType)}
              />
            </>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
