/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { BiExport } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { api } from '~/services/api/config';

import { searchInTable } from '~/utils/searchInTable';
import { tableColumnsRender } from '~/utils/tableColumnsRender';
import { convertStateToCallApi } from '~/utils/convertStateToCallApi';
import { checkedPersonStatusToCallApi } from '~/utils/checkedPersonStatusToCallApi';
import { convertDateExhibitionToCallApi } from '~/utils/convertDateExhibitionToCallApi';
import { checkedProfessionalsStatusToCallApi } from '~/utils/checkedProfessionalsStatusToCallApi';
import { checkedProfessionalsFunctionsToCallApi } from '~/utils/checkedProfessionalsFunctionsToCallApi';

import {
  convertTimeSocietyToCallApi,
  convertCustomTimeSocietyToCallApi,
} from '~/utils/convertTimeSocietyToCallApi';

import { Button, PersonsFilter, Table, Input, Badge } from '~/components';

import { useFilterType } from '~/hooks/FilterType';
import { useTableRender } from '~/hooks/TableRender';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import {
  FormInputsProps,
  PartnersProps,
  PartnersTableProps,
} from '~/interfaces/partner';

import {
  ProfessionalsAssociatedsProps,
  ProfessionalsAssociatedsTableProps,
} from '~/interfaces/professionals';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/relatorios/relatorios.styles';

export default function Reports() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FormInputsProps>();

  const { searchedTable, setSearchedTable } = useTableRender();

  const {
    state,
    timeSociety,
    checkedPersonType,
    checkedPersonStatus,
    professionalFunctions,
    customTimeSocietyStart,
    checkPersonStatusActive,
    customTimeSocietyFinish,
    handleResetPersonFilters,
    checkedProfessionalStatus,
    checkProfessionalStatusActive,
  } = usePersonsFilter();

  const { filterType, setFilterType } = useFilterType();

  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loadingExport, setLoadingExport] = useState(false);
  const [totalItemsSearched, setTotalItemsSearched] = useState(0);
  const [formattedTableData, setFormattedTableData] = useState<
    PartnersProps[] | ProfessionalsAssociatedsProps[]
  >([]);

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

  useEffect(() => {
    if (router.query.typePerson) {
      setTableData([]);
    }

  }, [router.query.typePerson])

  useEffect(() => {
    if (tableData) {
      if (formattedTableData) {
        setTotalItems(formattedTableData.length);
      }

      if (searchedTable) {
        setTotalItemsSearched(searchedTable.length);
      }
    }
  }, [formattedTableData, searchedTable, tableData]);

  function handleGetTableData() {
    if (checkedPersonType === 'socios') {
      try {
        setLoading(true);
        setTableData([]);
        setFormattedTableData([]);

        api
          .get(
            `/partners/report/associateds?partnerTypeId=1${checkedPersonStatusToCallApi(
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

    if (checkedPersonType === 'profissionais') {
      try {
        setLoading(true);
        setTableData([]);
        setFormattedTableData([]);

        api
          .get(
            `https://dev.api.abvaq-extranet.iclouds.com.br/partners/report/professionals?partnerTypeId=3${checkedProfessionalsStatusToCallApi(
              checkedProfessionalStatus
            )}${convertStateToCallApi(
              state
            )}${checkedProfessionalsFunctionsToCallApi(professionalFunctions)}`
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
            `/partners/report/associateds/export?partnerTypeId=1${checkedPersonStatusToCallApi(
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
              association_status: (
                <Badge title={itemTable.association_status} />
              ),
              name: itemTable.name,
              nickname: itemTable.nickname,
              email: itemTable.email,
              localization: `${itemTable.city} - ${itemTable.state}`,
              cellphone: itemTable.cellphone,
              associatedAt:
                itemTable.associated_at !== null
                  ? convertDateExhibitionToCallApi(
                    itemTable.associated_at || ''
                  )
                  : '--',
            };
          }
        );
        setFormattedTableData(formattedPartnerTable);
      }

      if (checkedPersonType === 'profissionais') {
        const formattedProfessionalTable = tableData.map(
          (itemTable: ProfessionalsAssociatedsTableProps) => {
            return {
              status: <Badge title={itemTable.accreditation_status} />,
              name: itemTable.name,
              nickname: itemTable.nickname,
              function: itemTable.function,
              cpf: itemTable.cpf,
              localization: `${itemTable.city} - ${itemTable.state}`,
              cellphone: itemTable.cellphone,
            };
          }
        );
        setFormattedTableData(formattedProfessionalTable);
      }
    }
  }, [checkedPersonType, tableData]);

  function onSubmit(data: FormInputsProps) {
    const formattedTableDataSearched = searchInTable(
      formattedTableData,
      data.search
    );

    setSearchedTable(formattedTableDataSearched);

    reset();
  }

  function handleResetTable() {
    setSearchedTable([]), reset();
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
              isLoading={loadingExport}
              rightIcon={<BiExport size={18} />}
              onClick={() => handleExport()}
              disabled={
                !checkPersonStatusActive && !checkProfessionalStatusActive
              }
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
                <S.Form as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    size="md"
                    minW="25rem"
                    maxW="30rem"
                    bg="#fff"
                    type="text"
                    icon={AiOutlineSearch}
                    placeholder="Busque por nome, apelido, e-mail ou telefone..."
                    {...register('search')}
                  />

                  <Button type="submit" title="Pesquisar" size="md" />
                  <Button
                    title="Redefinir"
                    size="md"
                    onClick={handleResetTable}
                  />
                </S.Form>

                <C.Flex align="center" minW="8.7rem">
                  <C.Text as="span" mr="0.25rem" fontWeight="bold">
                    Total de Itens:
                  </C.Text>
                  <C.Badge variant="solid" colorScheme="green">
                    {totalItemsSearched !== 0 ? totalItemsSearched : totalItems}
                  </C.Badge>
                </C.Flex>
              </S.WrapperInputSearch>

              <Table
                tableData={
                  searchedTable.length ? searchedTable : formattedTableData
                }
                tableColumns={tableColumnsRender(checkedPersonType)}
              />
            </>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
