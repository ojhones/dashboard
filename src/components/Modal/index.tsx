import { BiWindows } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { useDisclosure } from '@chakra-ui/react';

import { Button } from '~/components';

import * as S from './styles';
import { colors } from '~/styles/theme/colors';

interface ModalProps {
  modalHeader: string;
  titleButtonOpen?: string;
  titleButtonClose?: string;
  sizeButton: 'xs' | 'sm' | 'md' | 'lg';
  sizeModal: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Modal({
  sizeModal,
  sizeButton,
  modalHeader,
  titleButtonOpen,
  titleButtonClose,
}: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <S.Container>
      <S.Wrapper>
        <Button
          size={sizeButton}
          onClick={onOpen}
          title={titleButtonOpen || 'Abrir'}
          rightIcon={<BiWindows color={colors.white} />}
        />

        <S.Modal onClose={onClose} size={sizeModal} isOpen={isOpen} isCentered>
          <S.ModalOverlay />

          <S.ModalContent>
            <S.ModalHeader>{modalHeader}</S.ModalHeader>
            <S.ModalCloseButton />

            <S.ModalBody>
              Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra
              quem é amistosis quis leo.Sapien in monti palavris qui num
              significa nadis i pareci latim.Quem num gosta di mim que vai caçá
              sua turmis!Atirei o pau no gatis, per gatis num morreus. Praesent
              vel viverra nisi. Mauris aliquet nunc non turpis scelerisque,
              eget.Admodum accumsan disputationi eu sit. Vide electram
              sadipscing et per.Nullam volutpat risus nec leo commodo, ut
              interdum diam laoreet. Sed non consequat odio.Mé faiz elementum
              girarzis, nisi eros vermeio. Manduma pindureta quium dia nois
              paga.Não sou faixa preta cumpadi, sou preto inteiris,
              inteiris.Suco de cevadiss deixa as pessoas mais interessantis.Viva
              Forevis aptent taciti sociosqu ad litora torquent. Si num tem
              leite então bota uma pinga aí cumpadi!Quem num gosta di mim que
              vai caçá sua turmis!Detraxit consequat et quo num tendi nada.Mé
              faiz elementum girarzis, nisi eros vermeio. Detraxit consequat et
              quo num tendi nada.Quem num gosta di mim que vai caçá sua
              turmis!Tá deprimidis, eu conheço uma cachacis que pode alegrar sua
              vidis.Cevadis im ampola pa arma uma pindureta.
            </S.ModalBody>

            <S.ModalFooter>
              <Button
                onClick={onClose}
                size={sizeButton}
                title={titleButtonClose || 'Fechar'}
                leftIcon={<AiOutlineClose color={colors.white} />}
              />
            </S.ModalFooter>
          </S.ModalContent>
        </S.Modal>
      </S.Wrapper>
    </S.Container>
  );
}
