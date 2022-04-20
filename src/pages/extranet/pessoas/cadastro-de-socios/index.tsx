import { FiSmartphone } from 'react-icons/fi';
import { GiLoveInjection } from 'react-icons/gi';
import { FaHorse, FaStreetView } from 'react-icons/fa';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { BsPerson, BsCalendarDate, BsEnvelope } from 'react-icons/bs';
import {
  AiOutlineStar,
  AiOutlineIdcard,
  AiOutlineFieldNumber,
} from 'react-icons/ai';

import { BreadCrumb, Input } from '~/components';

import * as S from '~/styles/pages/pessoas/cadastro-de-socios.styles';

export default function Partners() {
  const pathsBreadCrumb = [
    {
      id: 1,
      url: '/extranet/home',
      title: 'Home',
      isCurrentPage: false,
    },

    {
      id: 2,
      url: '/extranet/pessoas',
      title: 'Pessoas',
      isCurrentPage: false,
    },

    {
      id: 3,
      url: '/extranet/pessoas/cadastro-de-socios',
      title: 'Cadastro de sócios',
      isCurrentPage: true,
    },
  ];

  return (
    <S.Container>
      <S.Wrapper as="form">
        <h2>Cadastro de Sócios</h2>
        <S.WrapperBreadCrumb>
          <BreadCrumb paths={pathsBreadCrumb} />
        </S.WrapperBreadCrumb>

        <S.WrapperContentInput>
          <S.WrapperInputs>
            <h2>Dados Pessoais</h2>
            <Input
              name="cpf"
              type="text"
              label="CPF"
              icon={AiOutlineIdcard}
              maxWidth={['100%', '100%', '100%', '20rem']}
            />

            <Input name="nome" type="text" label="Nome" icon={BsPerson} />

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                name="apelido"
                label="Apelido"
                icon={AiOutlineStar}
              />

              <Input
                type="date"
                icon={BsCalendarDate}
                name="data-nascimento"
                label="Data de Nascimento"
              />
            </S.WrapperMultipleInputs>

            <Input
              name="rg"
              label="RG"
              type="text"
              maxWidth="26.7rem"
              icon={AiOutlineIdcard}
            />

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                icon={FaHorse}
                name="profissao"
                label="Profissão"
              />

              <Input
                type="text"
                name="crmv"
                label="CRMV"
                icon={GiLoveInjection}
              />
            </S.WrapperMultipleInputs>
          </S.WrapperInputs>

          <S.WrapperInputs>
            <h2>Endereço</h2>
            <Input
              name="cep"
              type="text"
              label="CEP"
              maxWidth={['100%', '100%', '100%', '20rem']}
              icon={TiLocationArrowOutline}
            />

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                name="endereco"
                label="Endereço"
                icon={FaStreetView}
                minWidth={['100%', '100%', '100%', '35rem']}
              />

              <Input
                type="number"
                name="numero"
                label="Número"
                icon={AiOutlineFieldNumber}
              />
            </S.WrapperMultipleInputs>

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                name="bairro"
                label="Bairro"
                icon={FaStreetView}
              />

              <Input
                type="text"
                name="complemento"
                label="Complemento"
                icon={TiLocationArrowOutline}
              />
            </S.WrapperMultipleInputs>

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                name="estado"
                label="Estado"
                icon={TiLocationArrowOutline}
              />

              <Input
                type="text"
                name="cidade"
                label="Cidade"
                icon={FaStreetView}
              />
            </S.WrapperMultipleInputs>
          </S.WrapperInputs>

          <S.WrapperInputs>
            <h2>Contato</h2>

            <S.WrapperMultipleInputs>
              <Input
                type="text"
                name="tel1"
                label="Telefone 1"
                icon={FiSmartphone}
              />

              <Input
                type="text"
                name="tel2"
                label="Telefone 2"
                icon={FiSmartphone}
              />
            </S.WrapperMultipleInputs>

            <Input type="email" name="email" label="Email" icon={BsEnvelope} />
          </S.WrapperInputs>
        </S.WrapperContentInput>
      </S.Wrapper>
    </S.Container>
  );
}
