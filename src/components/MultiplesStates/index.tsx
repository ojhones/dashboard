import { useRouter } from 'next/router';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as S from './styles';

interface MultiplesStates {
  selectedStates: string[];

  color?: 'yellow' | 'green';
}

export function MultiplesStates({ color, selectedStates }: MultiplesStates) {
  const router = useRouter();
  const { state, setState } = usePersonsFilter();

  async function handleRemoveUniqueState(value: string | undefined) {
    await router.push({
      query: {
        ...router.query,
        UF: (router?.query?.UF as string)
          .split(' ')
          .filter((itemToRemove) => itemToRemove !== value),
      },
    });

    setState(state.filter((itemToRemove) => itemToRemove !== value));
  }

  return (
    <S.Container>
      <S.Wrapper>
        {selectedStates.map((uniqueState, index) => (
          <S.Badge key={index} colorScheme={color}>
            <S.RemoveButton
              onClick={() => handleRemoveUniqueState(uniqueState)}
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
