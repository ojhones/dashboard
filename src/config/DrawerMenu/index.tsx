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
    slug: '/extranet/Pessoas',
    subItems: [
      {
        id: 1,
        title: 'Cadastro de sócios',
        slug: '/extranet/pessoas/cadastro-de-socios',
      },
      {
        id: 2,
        title: 'Cadastro de Profissionais',
        slug: '/extranet/pessoas/cadastro-de-profissionais',
      },
      {
        id: 3,
        title: 'Cadastro de Competidores',
        slug: '/extranet/pessoas/cadastro-de-competidores',
      },
      {
        id: 4,
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
        id: 1,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/cobrancas',
      },
      {
        id: 2,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/cobrancas',
      },
      {
        id: 3,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/cobrancas',
      },
      {
        id: 4,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 4',
        slug: '/extranet/cobrancas',
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
        id: 1,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/eventos',
      },
      {
        id: 2,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/eventos',
      },
      {
        id: 3,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/eventos',
      },
      {
        id: 4,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 4',
        slug: '/extranet/eventos',
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
        id: 1,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/provas',
      },
      {
        id: 2,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/provas',
      },
      {
        id: 3,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/provas',
      },
      {
        id: 4,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 4',
        slug: '/extranet/provas',
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
        id: 1,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/resultados',
      },
      {
        id: 2,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/resultados',
      },
      {
        id: 3,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/resultados',
      },
      {
        id: 4,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 4',
        slug: '/extranet/resultados',
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
        id: 1,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 1',
        slug: '/extranet/administrativo',
      },
      {
        id: 2,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 2',
        slug: '/extranet/administrativo',
      },
      {
        id: 3,
        icon: IoPeopleSharp,
        iconColor: colors.gray[300],
        title: 'Item 3',
        slug: '/extranet/administrativo',
      },
      {
        id: 4,
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
