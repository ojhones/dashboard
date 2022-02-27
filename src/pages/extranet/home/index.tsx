import { LineChart, BreadCrumb, VerticalBarChart } from '~/components';

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

        <S.WrapperButtons flexDir="row" justify="space-between">
          <VerticalBarChart />
          <LineChart />
        </S.WrapperButtons>
      </S.Wrapper>
    </S.Container>
  );
}
