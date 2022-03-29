import { BsSearch } from 'react-icons/bs';

import { UF } from '~/utils/states';

import { Input } from '~/components';
import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as S from './styles';

export function PersonsFilter() {
  const {
    checkedPersonType,
    checkedPersonStatus,
    setCheckedPersonType,
    setCheckedPersonStatus,
    checkPersonStatusActive,
  } = usePersonsFilter();

  return (
    <S.Container>
      <S.Wrapper as="form">
        <S.ContentDivider>
          <h3>Tipo</h3>
          <S.RadioGroup
            defaultValue=""
            value={checkedPersonType}
            onChange={setCheckedPersonType}
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
                  onChange={(e) =>
                    setCheckedPersonStatus({
                      ...checkedPersonStatus,
                      active: e.target.checked,
                    })
                  }
                >
                  Ativos
                </S.Checkbox>
                <S.Checkbox
                  size="md"
                  colorScheme="green"
                  onChange={(e) =>
                    setCheckedPersonStatus({
                      ...checkedPersonStatus,
                      pending: e.target.checked,
                    })
                  }
                >
                  Pendentes
                </S.Checkbox>
                <S.Checkbox
                  size="md"
                  colorScheme="green"
                  onChange={(e) =>
                    setCheckedPersonStatus({
                      ...checkedPersonStatus,
                      expired: e.target.checked,
                    })
                  }
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
                    maxWidth="15rem"
                    placeholder="Selecione o Tempo"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <option value="7">últimos 7 dias</option>
                    <option value="30">últimos 30 dias</option>
                    <option value="30">últimos 90 dias</option>
                    <option value="1year">+ de 1 ano</option>
                    <option value="2year">+ de 2 anos</option>
                    <option value="3year">+ de 3 anos</option>
                    <option value="currentYear">Ano Épico atual</option>
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
                    />

                    <Input title="fim" type="date" name="fim" icon={BsSearch} />
                  </S.Stack>
                </S.ContentDivider>

                <S.ContentDivider>
                  <h3>Localidade</h3>
                  <S.Select
                    size="sm"
                    bg="white"
                    maxWidth="15rem"
                    placeholder="Todos"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {UF.map((state, index) => (
                      <option value={state.sigla} key={index}>
                        {state.sigla} - {state.estado}
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
