import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

import { UF } from '~/utils/states';

import { Input } from '~/components';

import * as S from './styles';

export function PersonsFilter() {
  const [checkedPersonType, setCheckedPersonType] = useState('');

  const [checkedPersonStatus, setCheckedPersonStatus] = useState({
    active: false,
    pending: false,
    expired: false,
  });

  const [checkedTypeofPartner, setCheckedTypeofPartner] = useState({
    newPartner: false,
    timePartner: false,
  });

  return (
    <S.Container>
      <S.Wrapper as="form">
        <S.ContentDivider>
          <h3>Tipo</h3>
          <S.RadioGroup>
            <S.Stack spacing={2} direction="column">
              <S.Radio
                value="socios"
                colorScheme="green"
                onChange={(e) => setCheckedPersonType(e.target.value)}
              >
                Sócios
              </S.Radio>
              <S.Radio
                value="profissionais"
                colorScheme="green"
                onChange={(e) => setCheckedPersonType(e.target.value)}
              >
                Profissionais
              </S.Radio>
              <S.Radio
                value="competidores"
                colorScheme="green"
                onChange={(e) => setCheckedPersonType(e.target.value)}
              >
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
                  // isChecked={checkedItems[0]}
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
                  // isChecked={checkedItems[1]}
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
                  // isChecked={checkedItems[2]}
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

            {checkedPersonStatus.active === true && (
              <>
                <S.ContentDivider>
                  <h3>Localidade e Sociedade</h3>
                  <S.Select
                    size="sm"
                    bg="white"
                    maxWidth="15rem"
                    placeholder="Selecione o Estado"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {UF.map((state, index) => (
                      <option value={state.sigla} key={index}>
                        {state.sigla} - {state.estado}
                      </option>
                    ))}
                  </S.Select>

                  <S.Stack spacing={2} direction="column">
                    <S.Checkbox
                      size="md"
                      colorScheme="green"
                      onChange={(e) =>
                        setCheckedTypeofPartner({
                          ...checkedTypeofPartner,
                          newPartner: e.target.checked,
                        })
                      }
                    >
                      Novos Sócios
                    </S.Checkbox>

                    <S.Checkbox
                      size="md"
                      colorScheme="green"
                      onChange={(e) =>
                        setCheckedTypeofPartner({
                          ...checkedTypeofPartner,
                          timePartner: e.target.checked,
                        })
                      }
                    >
                      Tempo de Sociedade
                    </S.Checkbox>
                  </S.Stack>
                </S.ContentDivider>

                {checkedTypeofPartner.newPartner === true && (
                  <S.ContentDivider>
                    <h3>Novos Sócios</h3>
                    <S.Select
                      size="sm"
                      bg="white"
                      maxWidth="15rem"
                      placeholder="Selecione o Tempo"
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="7">últimos 7 dias</option>
                      <option value="30">últimos 30 dias</option>
                      <option value="currentYear">Ano Atual</option>
                    </S.Select>
                    <h5>Personalizado</h5>
                    <S.Stack spacing={2} direction="row">
                      <Input
                        title="inicio"
                        type="date"
                        name="inicio"
                        icon={BsSearch}
                      />

                      <Input
                        title="fim"
                        type="date"
                        name="fim"
                        icon={BsSearch}
                      />
                    </S.Stack>
                  </S.ContentDivider>
                )}

                {checkedTypeofPartner.timePartner === true && (
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
                      <option value="currentYear">Ano Atual</option>
                    </S.Select>
                    <h5>Personalizado</h5>
                    <S.Stack spacing={2} direction="row">
                      <Input
                        title="inicio"
                        type="date"
                        name="inicio"
                        icon={BsSearch}
                      />

                      <Input
                        title="fim"
                        type="date"
                        name="fim"
                        icon={BsSearch}
                      />
                    </S.Stack>
                  </S.ContentDivider>
                )}
              </>
            )}
          </>
        )}

        {checkedPersonType === 'profissionais' && (
          <S.ContentDivider>
            <h3></h3>
            <p>aqui nao</p>
          </S.ContentDivider>
        )}

        {checkedPersonType === 'competidores' && (
          <S.ContentDivider>
            <h3></h3>
            <p>aqui nao</p>
          </S.ContentDivider>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
