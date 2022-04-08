import { AiOutlineCloseCircle } from 'react-icons/ai';

import * as S from './styles';

interface MultiplesStates {
  selectedStates: string[];

  color?: 'yellow' | 'green';
}

export function MultiplesStates({ color, selectedStates }: MultiplesStates) {
  return (
    <S.Container>
      <S.Wrapper>
        {selectedStates.map((state, index) => (
          <S.Badge key={index} colorScheme={color}>
            <S.RemoveButton onClick={() => console.log(state, 'state')}>
              <AiOutlineCloseCircle />
            </S.RemoveButton>
            {state}
          </S.Badge>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
