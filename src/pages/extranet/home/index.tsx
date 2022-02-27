import { MdEmail } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

import { Table, Modal, Input, Button, BreadCrumb } from '~/components';

import { colors } from '~/styles/theme/colors';
import * as S from '~/styles/pages/home.styles';

export default function Home() {
  const breadCrumbs = [
    {
      id: 0,
      url: '/',
      title: 'Home',
      isCurrentPage: false,
    },
    {
      id: 1,
      url: '/',
      title: 'Home',
      isCurrentPage: false,
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Home</h2>

        <S.WrapperBreadCrumb>
          <BreadCrumb paths={breadCrumbs} />
        </S.WrapperBreadCrumb>

        <S.WrapperButtons>
          <Button title="xSmall" size="xs" />

          <Button title="Small" size="sm" />

          <Button title="Medium" size="md" />

          <Button title="Large" size="lg" />

          <Button
            size="md"
            title="Right icon"
            rightIcon={<MdEmail color={colors.white} />}
          />

          <Button
            size="md"
            title="Left icon"
            leftIcon={<AiFillSetting color={colors.white} />}
          />

          <Button size="md" title="Loading" isLoading />

          <Button
            size="md"
            isLoading
            title="Loading"
            loadingText="Carregando..."
          />
        </S.WrapperButtons>

        <S.WrapperButtons>
          <Modal
            sizeModal="xs"
            sizeButton="xs"
            titleButtonClose="Fechar"
            titleButtonOpen="xSmall Modal"
            modalHeader="Título do modal"
          />

          <Modal
            sizeModal="sm"
            sizeButton="sm"
            titleButtonClose="Fechar"
            modalHeader="Título do modal"
            titleButtonOpen="Small Modal"
          />

          <Modal
            sizeModal="md"
            sizeButton="md"
            titleButtonClose="Fechar"
            modalHeader="Título do modal"
            titleButtonOpen="Medium Modal"
          />

          <Modal
            sizeModal="lg"
            sizeButton="lg"
            titleButtonClose="Fechar"
            modalHeader="Título do modal"
            titleButtonOpen="Large Modal"
          />

          <Modal
            sizeModal="xl"
            sizeButton="lg"
            titleButtonClose="Fechar"
            modalHeader="Título do modal"
            titleButtonOpen="xLarge Modal"
          />

          <Modal
            sizeButton="lg"
            sizeModal="full"
            titleButtonClose="Fechar"
            modalHeader="Título do modal"
            titleButtonOpen="Full Modal"
          />
        </S.WrapperButtons>

        <S.WrapperButtons>
          <Input
            type="text"
            name="Configuracoes"
            label="Configurações"
            placeholder="Configurações"
            icon={AiFillSetting}
          />
        </S.WrapperButtons>

        <Table />
      </S.Wrapper>
    </S.Container>
  );
}
