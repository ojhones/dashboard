import { AiFillHome } from 'react-icons/ai';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoMdAnalytics } from 'react-icons/io';
import { RiMoneyDollarCircleFill, RiAdminFill } from 'react-icons/ri';
import { BsFillAwardFill, BsFillCalendarDateFill } from 'react-icons/bs';

import { colors } from '~/styles/theme/colors';

export const MenuItems = [
  {
    id: 0,
    title: 'Home',
    slug: '/extranet/home',
    subItems: [],
    icon: <AiFillHome />,
    iconColor: colors.gray[300],
  },

  {
    id: 1,
    title: 'Pessoas',
    slug: '/extranet/pessoas',
    subItems: [
      {
        id: 11,
        title: 'Cadastro de sócios',
        slug: '/extranet/pessoas/cadastro-de-socios',
      },
      {
        id: 12,
        title: 'Cadastro de Profissionais',
        slug: '/extranet/pessoas/cadastro-de-profissionais',
      },
      {
        id: 13,
        title: 'Cadastro de Competidores',
        slug: '/extranet/pessoas/cadastro-de-competidores',
      },
      {
        id: 14,
        title: 'Relatórios',
        slug: '/extranet/pessoas/relatorios-de-pessoas',
      },
    ],
    icon: <IoPeopleSharp />,
    iconColor: colors.gray[300],
  },

  {
    id: 2,
    title: 'Cobranças',
    slug: '/extranet/cobrancas',
    subItems: [
      {
        id: 21,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Associações',
        slug: '/extranet/cobrancas/associacoes',
      },
      {
        id: 22,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Inscrições',
        slug: '/extranet/cobrancas/inscricoes',
      },
      {
        id: 23,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Relatórios',
        slug: '/extranet/cobrancas/relatorios-de-cobrancas',
      },
    ],
    icon: <RiMoneyDollarCircleFill />,
    iconColor: colors.gray[300],
  },

  {
    id: 3,
    title: 'Eventos',
    slug: '/extranet/eventos',
    subItems: [
      {
        id: 31,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Gerenciamento de Eventos',
        slug: '/extranet/eventos/gerenciamento-de-eventos',
      },
      {
        id: 32,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Gerenciamento de Organizadores',
        slug: '/extranet/eventos/gerenciamento-de-organizadores',
      },
      {
        id: 33,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Gerenciamento de Parques',
        slug: '/extranet/eventos/gerenciamento-de-parques',
      },
      {
        id: 34,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Relatórios',
        slug: '/extranet/eventos/relatorios-de-eventos',
      },
    ],
    icon: <BsFillCalendarDateFill />,
    iconColor: colors.gray[300],
  },

  {
    id: 4,
    title: 'Provas',
    slug: '/extranet/provas',
    subItems: [
      {
        id: 41,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Gerenciamento de Provas',
        slug: '/extranet/provas/gerenciamento-de-provas',
      },
      {
        id: 42,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Relatórios',
        slug: '/extranet/provas/relatorios-de-provas',
      },
    ],
    icon: <BsFillAwardFill />,
    iconColor: colors.gray[300],
  },

  {
    id: 5,
    title: 'Resultados',
    slug: '/extranet/resultados',
    subItems: [
      {
        id: 51,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Gerenciamento de Resultados',
        slug: '/extranet/resultados/gerenciamento-de-resultados',
      },
      {
        id: 52,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Relatórios',
        slug: '/extranet/resultados/relatorios-de-resultados',
      },
    ],
    icon: <IoMdAnalytics />,
    iconColor: colors.gray[300],
  },

  {
    id: 6,
    title: 'Administrativo',
    slug: '/extranet/administrativo',
    subItems: [
      {
        id: 61,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/administrativo',
      },
      {
        id: 62,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/administrativo',
      },
      {
        id: 63,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/administrativo',
      },
      {
        id: 64,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 4',
        slug: '/extranet/administrativo',
      },
    ],
    icon: <RiAdminFill />,
    iconColor: colors.gray[300],
  },
];
