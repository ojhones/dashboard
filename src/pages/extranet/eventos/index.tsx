import { BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { MdShowChart } from 'react-icons/md';
import { AiFillShopping, AiFillEye } from 'react-icons/ai';

import {
  PieChart,
  LineChart,
  MetricsCard,
  NavigationCard,
  SmallMetricsCard,
} from '~/components';

import { MenuItems } from 'config/DrawerMenu';

import * as S from '~/styles/pages/eventos/eventos.styles';

export default function Events() {
  const metrics = [
    {
      id: 0,
      leftIcon: <BsFillPersonFill />,
      rightIcon: <MdShowChart />,
      category: 'Total Views',
      quantity: 375.0,
      footer: 'last registration 32/Fev',
    },

    {
      id: 1,
      leftIcon: <AiFillShopping />,
      rightIcon: <MdShowChart />,
      category: 'Total Products',
      quantity: 975.0,
      footer: 'last registration 32/Fev',
    },

    {
      id: 2,
      leftIcon: <AiFillEye />,
      rightIcon: <MdShowChart />,
      category: 'Total Users',
      quantity: 1175.0,
      footer: 'last registration 32/Fev',
    },

    {
      id: 3,
      leftIcon: <BsFillCartFill />,
      rightIcon: <MdShowChart />,
      category: 'Total Sells',
      quantity: 30175.0,
      footer: 'last registration 32/Fev',
    },
  ];

  const navigation = MenuItems.filter(
    (menuItem) => menuItem.title === 'Eventos'
  );

  const subItemsNavigation = navigation[0].subItems.map((subItem) => subItem);

  const smallMetrics = [
    {
      id: 0,
      target: '_blank',
      name: 'Jhonatan Lima',
      url: 'https://www.jhonatanlima.com.br',
    },

    {
      id: 1,
      target: '_blank',
      name: 'Felipe Milanez',
      url: 'https://www.jhonatanlima.com.br',
    },

    {
      id: 2,
      target: '_blank',
      name: 'Vitor Emanuel',
      url: 'https://www.jhonatanlima.com.br',
    },

    {
      id: 3,
      target: '_blank',
      name: 'Jaine Scruph',
      url: 'https://www.jhonatanlima.com.br',
    },

    {
      id: 4,
      target: '_blank',
      name: 'Paulo Almeida ',
      url: 'https://www.jhonatanlima.com.br',
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Eventos</h2>

        <S.WrapperMetrics>
          {metrics.map((metric) => (
            <MetricsCard
              key={metric.id}
              footer={metric.footer}
              category={metric.category}
              quantity={metric.quantity}
              leftIcon={metric.leftIcon}
              rightIcon={metric.rightIcon}
            />
          ))}
        </S.WrapperMetrics>

        <S.Content>
          <S.WrapperNavigation>
            <h2>Navegação</h2>

            {subItemsNavigation
              .slice(1, subItemsNavigation.length)
              .map((subMenuItem) => (
                <NavigationCard
                  key={subMenuItem.id}
                  title={subMenuItem.title}
                  slug={subMenuItem.slug}
                />
              ))}
          </S.WrapperNavigation>

          <S.ChartsContent>
            <h2>Item</h2>

            <S.WrapperChart>
              <PieChart />
            </S.WrapperChart>
          </S.ChartsContent>

          <S.LargerChart>
            <h2>Item </h2>

            <S.WrapperChart>
              <LineChart />
            </S.WrapperChart>
          </S.LargerChart>

          <S.WrapperPersons>
            <h2>Item</h2>

            {smallMetrics.map((smallMetric) => (
              <SmallMetricsCard
                key={smallMetric.id}
                url={smallMetric.url}
                name={smallMetric.name}
                target={smallMetric.target}
              />
            ))}
          </S.WrapperPersons>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
