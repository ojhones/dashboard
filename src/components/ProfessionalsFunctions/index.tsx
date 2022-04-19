import { useRouter } from 'next/router';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { usePersonsFilter } from '~/hooks/PersonsFilter';

import * as S from './styles';

interface MultiplesProfessions {
  selectedProfession: string[];

  color?: 'yellow' | 'green';
}

export function ProfessionalsFunctions({
  color,
  selectedProfession,
}: MultiplesProfessions) {
  const router = useRouter();
  const { professionalFunctions, setProfessionalFunctions } =
    usePersonsFilter();

  async function handleRemoveUniqueProfession(uniqueProfession: string) {
    await router.push({
      query: {
        ...router.query,
        professions: (router?.query?.professions as string)
          ?.split('-')
          .filter((itemToRemove) => itemToRemove !== uniqueProfession)
          .join('-'),
      },
    });

    setProfessionalFunctions(
      professionalFunctions.filter(
        (itemToRemove) => itemToRemove !== uniqueProfession
      )
    );
  }

  return (
    <S.Container>
      <S.Wrapper>
        {selectedProfession.map((uniqueProfession, index) => (
          <S.Badge key={index} colorScheme={color}>
            <S.RemoveButton
              onClick={() => handleRemoveUniqueProfession(uniqueProfession)}
            >
              <AiOutlineCloseCircle />
            </S.RemoveButton>
            {uniqueProfession}
          </S.Badge>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
