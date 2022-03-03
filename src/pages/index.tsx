import Link from 'next/link';
import Image from 'next/image';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/login.styles';

import { FaEnvelope, FaLock } from 'react-icons/fa';

import { Button, Input } from '~/components';

export default function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Login as="form" boxShadow="md">
          <Image
            alt="Logo"
            width={70}
            height={70}
            objectFit="contain"
            src="/images/svg/logo-abvaq.svg"
          />

          <S.WrapperLogin>
            <C.Text as="p">Olá, bem vindo.</C.Text>
            <C.Text as="h2">Faça seu login:</C.Text>
          </S.WrapperLogin>

          <Input
            type="email"
            name="E-mail"
            label="E-mail:"
            icon={FaEnvelope}
            placeholder="exemplo@gmail.com"
          />

          <Input
            name="Senha"
            icon={FaLock}
            label="Senha:"
            type="password"
            placeholder="Abvaq@123"
          />

          <S.WrapperLogin>
            <C.Text as="p">
              Esqueceu sua senha?
              <Link href="/">
                <a>Clique aqui.</a>
              </Link>
            </C.Text>
          </S.WrapperLogin>

          <Link href="/extranet/home/">
            <Button title="Entrar" size="md" />
          </Link>
        </S.Login>
      </S.Wrapper>
    </S.Container>
  );
}
