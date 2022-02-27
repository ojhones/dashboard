import { forwardRef, ForwardRefRenderFunction, useState } from 'react';

import { FieldError } from 'react-hook-form';

import * as S from './styles';

import { InputProps } from '@chakra-ui/react';

import { IconBaseProps } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputContentProps extends InputProps {
  name: string;
  type: string;
  label?: string;
  error?: FieldError;

  icon?: React.ComponentType<IconBaseProps>;
}

const InputComponentForm: ForwardRefRenderFunction<
  HTMLInputElement,
  InputContentProps
> = ({ label, icon, name, type, error = null, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <S.FormControl isInvalid={!!error}>
      {!!label && <S.FormLabel htmlFor={name}>{label}</S.FormLabel>}

      <S.InputGroup>
        {!!icon && (
          <S.InputLeftElement pointerEvents="none">
            <S.Icon as={icon} />
          </S.InputLeftElement>
        )}

        <S.Input
          {...rest}
          ref={ref}
          id={name}
          name={name}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
        />

        {type === 'password' && (
          <S.InputRightElement>
            <S.Button type="button" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </S.Button>
          </S.InputRightElement>
        )}
      </S.InputGroup>
    </S.FormControl>
  );
};

export const Input = forwardRef(InputComponentForm);
