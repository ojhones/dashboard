import * as S from './styles';
import * as C from '@chakra-ui/react';

interface MultiplesStates {
  selectedStates: string[];

  color?: 'yellow' | 'green';
}

export function MultiplesStates({ color, selectedStates }: MultiplesStates) {
  return (
    <S.Container>
      <S.Wrapper>
        {selectedStates.map((state, index) => (
          <C.Badge key={index} colorScheme={color}>
            {state}
          </C.Badge>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
