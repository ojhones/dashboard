import { AiOutlineCloseCircle } from 'react-icons/ai';

import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as S from './styles';

interface MultiplesStates {
  selectedStates: string[];

  color?: 'yellow' | 'green';
}

export function MultiplesStates({ color, selectedStates }: MultiplesStates) {
  const { state, setState } = usePersonsFilter();

  return (
    <S.Container>
      <S.Wrapper>
        {selectedStates.map((uniqueState, index) => (
          <S.Badge key={index} colorScheme={color}>
            <S.RemoveButton
              onClick={() =>
                setState(
                  state.filter((itemToRemove) => itemToRemove !== uniqueState)
                )
              }
            >
              <AiOutlineCloseCircle />
            </S.RemoveButton>
            {uniqueState}
          </S.Badge>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
