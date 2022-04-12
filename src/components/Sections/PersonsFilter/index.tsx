import { useRouter } from 'next/router';

import { BsSearch } from 'react-icons/bs';

import { UF } from '~/utils/states';

import { Input, MultiplesStates } from '~/components';
import { PersonTypeProps, usePersonsFilter } from '~/hooks/PersonsFilter';

import * as S from './styles';

export function PersonsFilter() {
  const router = useRouter();

  const {
    state,
    setState,
    timeSociety,
    setTimeSociety,
    checkedPersonType,
    checkedPersonStatus,
    setCheckedPersonType,
    setCheckedPersonStatus,
    customTimeSocietyStart,
    checkPersonStatusActive,
    customTimeSocietyFinish,
    setCustomTimeSocietyStart,
    setCustomTimeSocietyFinish,
  } = usePersonsFilter();

  function handleSetPersonType(value: PersonTypeProps) {
    setCheckedPersonType(value);

    router.push({
      query: { filterType: router.query.filterType, typePerson: value },
    });
  }

  function handleSetStatusActive(value: boolean) {
    setCheckedPersonStatus({
      ...checkedPersonStatus,
      active: value,
    });

    router.push({
      query: {
        ...router.query,
        isactive: value,
      },
    });
  }

  function handleSetStatusPending(value: boolean) {
    setCheckedPersonStatus({
      ...checkedPersonStatus,
      expired: value,
    });

    router.push({
      query: {
        ...router.query,
        isPending: value,
      },
    });
  }

  function handleSetStatusExpired(value: boolean) {
    setCheckedPersonStatus({
      ...checkedPersonStatus,
      expired: value,
    });

    router.push({
      query: {
        ...router.query,
        isExpired: value,
      },
    });
  }

  function handleSetTimeSociety(value: string | string[] | undefined) {
    setTimeSociety(value);

    router.push({
      query: {
        ...router.query,
        timeSociety: value,
      },
    });
  }

  function handleSetState(value: string) {
    if (!state.includes(value) && value !== '') {
      setState([...state, value]);
    }

    router.push({
      query: {
        ...router.query,
        UF: [...state, value].join('-'),
      },
    });
  }

  return (
    <S.Container>
      <S.Wrapper as="form">
        <S.ContentDivider>
          <h3>Tipo</h3>
          <S.RadioGroup
            defaultValue=""
            value={String(checkedPersonType)}
            onChange={(value) => handleSetPersonType(value)}
          >
            <S.Stack spacing={2} direction="column">
              <S.Radio value="socios" colorScheme="green">
                Sócios
              </S.Radio>
              <S.Radio value="profissionais" colorScheme="green">
                Profissionais
              </S.Radio>
              <S.Radio value="competidores" colorScheme="green">
                Competidores
              </S.Radio>
            </S.Stack>
          </S.RadioGroup>
        </S.ContentDivider>

        {checkedPersonType === 'socios' && (
          <>
            <S.ContentDivider>
              <h3>Status</h3>
              <S.Stack spacing={2} direction="column">
                <S.Checkbox
                  size="md"
                  colorScheme="green"
                  defaultChecked={!!checkedPersonStatus.active}
                  onChange={(e) => handleSetStatusActive(e.target.checked)}
                >
                  Ativos
                </S.Checkbox>

                <S.Checkbox
                  size="md"
                  colorScheme="green"
                  defaultChecked={!!checkedPersonStatus.pending}
                  onChange={(e) => handleSetStatusPending(e.target.checked)}
                >
                  Pendentes
                </S.Checkbox>

                <S.Checkbox
                  size="md"
                  colorScheme="green"
                  defaultChecked={!!checkedPersonStatus.expired}
                  onChange={(e) => handleSetStatusExpired(e.target.checked)}
                >
                  Expirado
                </S.Checkbox>
              </S.Stack>
            </S.ContentDivider>

            {checkPersonStatusActive && (
              <>
                <S.ContentDivider>
                  <h3>Tempo de Sociedade</h3>
                  <S.Select
                    size="sm"
                    bg="white"
                    defaultValue=""
                    maxWidth="15rem"
                    value={String(timeSociety)}
                    disabled={
                      customTimeSocietyStart !== '' ||
                      customTimeSocietyFinish !== ''
                    }
                    onChange={(e) => handleSetTimeSociety(e.target.value)}
                  >
                    <option value="timeSelect">Selecione o Tempo</option>
                    <option value="week">últimos 7 dias</option>
                    <option value="month">últimos 30 dias</option>
                    <option value="quarter">últimos 90 dias</option>
                    <option value="1year">+ de 1 ano</option>
                    <option value="2year">+ de 2 anos</option>
                    <option value="custom">Personalizado</option>
                  </S.Select>

                  <h5>Personalizado</h5>
                  <S.Stack
                    spacing={2}
                    direction={['column', 'column', 'row', 'row']}
                  >
                    <Input
                      title="inicio"
                      type="date"
                      name="inicio"
                      icon={BsSearch}
                      disabled={timeSociety !== 'custom'}
                      onChange={(e) =>
                        setCustomTimeSocietyStart(e.target.value)
                      }
                    />

                    <Input
                      title="fim"
                      type="date"
                      name="fim"
                      icon={BsSearch}
                      disabled={timeSociety !== 'custom'}
                      onChange={(e) =>
                        setCustomTimeSocietyFinish(e.target.value)
                      }
                    />
                  </S.Stack>
                </S.ContentDivider>

                <S.ContentDivider>
                  <h3>Localidades</h3>
                  {state && (
                    <MultiplesStates selectedStates={state as string[]} />
                  )}

                  <S.Select
                    size="sm"
                    bg="white"
                    maxWidth="15rem"
                    placeholder="Selecione um ou mais"
                    onChange={(e) => handleSetState(e.target.value)}
                  >
                    {UF.map((mockState, index) => (
                      <option
                        key={index}
                        value={mockState.sigla}
                        disabled={state.includes(mockState.sigla)}
                      >
                        {mockState.sigla} - {mockState.estado}
                      </option>
                    ))}
                  </S.Select>
                </S.ContentDivider>
              </>
            )}
          </>
        )}

        {checkedPersonType === 'profissionais' && (
          <S.ContentDivider>
            <h3>default</h3>
            <p></p>
          </S.ContentDivider>
        )}

        {checkedPersonType === 'competidores' && (
          <S.ContentDivider>
            <h3>default</h3>
            <p></p>
          </S.ContentDivider>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
