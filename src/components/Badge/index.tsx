import * as S from './styles';
import * as C from '@chakra-ui/react';

interface BadgeProps {
  title: string;
}

export function Badge({ title }: BadgeProps) {
  return (
    <C.Stack direction="row">
      {title === 'Ativo' && (
        <S.Badge variant="solid" colorScheme="green">
          {title}
        </S.Badge>
      )}

      {title === 'Pendente' && (
        <S.Badge variant="solid" colorScheme="yellow">
          {title}
        </S.Badge>
      )}

      {title === 'Expirado' && (
        <S.Badge variant="solid" colorScheme="red">
          {title}
        </S.Badge>
      )}
    </C.Stack>
  );
}
