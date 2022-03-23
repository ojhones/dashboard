import { useState } from 'react';

import * as S from './styles';

export function PersonsFilter() {
  const [checkedPersonType, setCheckedPersonType] = useState({
    partners: false,
    competitors: false,
    professionals: false,
  });

  const [checkedPersonStatus, setCheckedPersonStatus] = useState({
    active: false,
    pending: false,
    expired: false,
  });

  // console.log(checkedPersonType, 'checkedPersonType');
  // console.log(checkedPersonStatus, 'checkedPersonStatus');

  return (
    <S.Container>
      <S.Wrapper as="form">
        <S.ContentDivider>
          <h3>Tipo</h3>
          <S.Stack spacing={2} direction="column">
            <S.Checkbox
              size="md"
              colorScheme="green"
              // isChecked={checkedItems[0]}
              onChange={(e) =>
                setCheckedPersonType({
                  ...checkedPersonType,
                  partners: e.target.checked,
                })
              }
            >
              Sócios
            </S.Checkbox>
            <S.Checkbox
              size="md"
              colorScheme="green"
              // isChecked={checkedItems[1]}
              onChange={(e) =>
                setCheckedPersonType({
                  ...checkedPersonType,
                  professionals: e.target.checked,
                })
              }
            >
              Profissionais
            </S.Checkbox>
            <S.Checkbox
              size="md"
              colorScheme="green"
              // isChecked={checkedItems[2]}
              onChange={(e) =>
                setCheckedPersonType({
                  ...checkedPersonType,
                  competitors: e.target.checked,
                })
              }
            >
              Competidores
            </S.Checkbox>
          </S.Stack>
        </S.ContentDivider>

        {checkedPersonType.partners && (
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
        )}

        {checkedPersonType.competitors && (
          <S.ContentDivider>
            <h3></h3>
            <p>filtros</p>
          </S.ContentDivider>
        )}

        {checkedPersonType.professionals && (
          <S.ContentDivider>
            <p>filtros</p>
          </S.ContentDivider>
        )}
        {/* <S.ContentDivider>
          <S.Select
            size="md"
            bg="white"
            maxWidth="15rem"
            placeholder="Select 1"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="Select1">Item 1</option>
            <option value="Select2">Item 2</option>
            <option value="Select3">Item 3</option>
            <option value="Select4">Item 4</option>
          </S.Select>

          <S.Select
            size="md"
            bg="white"
            maxWidth="15rem"
            placeholder="Select 2"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="Select1">Select 1</option>
            <option value="Select2">Select 2</option>
            <option value="Select3">Select 3</option>
            <option value="Select4">Select 4</option>
          </S.Select>

          <S.Select
            size="md"
            bg="white"
            maxWidth="15rem"
            placeholder="Teste Select 3"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="Select1">Select 1</option>
            <option value="Select2">Select 2</option>
            <option value="Select3">Select 3</option>
            <option value="Select4">Select 4</option>
          </S.Select>
        </S.ContentDivider>

        <S.ContentDivider>
          <S.RadioGroup>
            <S.Stack spacing={4} direction="column">
              <S.Radio value="1" colorScheme="green">
                Radio 1
              </S.Radio>
              <S.Radio value="2" colorScheme="green">
                Radio 2
              </S.Radio>
              <S.Radio value="3" colorScheme="green">
                Radio 3
              </S.Radio>

              <S.Radio value="4" colorScheme="green">
                Radio 4
              </S.Radio>

              <S.Radio value="5" colorScheme="green">
                Radio 5
              </S.Radio>
            </S.Stack>
          </S.RadioGroup>
        </S.ContentDivider> */}
      </S.Wrapper>
    </S.Container>
  );
}
