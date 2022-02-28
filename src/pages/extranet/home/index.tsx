import {
  Table,
  PieChart,
  LineChart,
  DoughnutChart,
  VerticalBarChart,
} from '~/components';

import * as S from '~/styles/pages/home.styles';

export default function Home() {
  // const breadCrumbs = [
  //   {
  //     id: 0,
  //     url: '/',
  //     title: 'Home',
  //     isCurrentPage: false,
  //   },
  //   {
  //     id: 1,
  //     url: '/',
  //     title: 'Home',
  //     isCurrentPage: false,
  //   },
  // ];

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Home</h2>
        {/* <S.WrapperBreadCrumb>
          <BreadCrumb paths={breadCrumbs} />
        </S.WrapperBreadCrumb> */}

        <S.Content>
          <S.WrapperCharts>
            <VerticalBarChart />
          </S.WrapperCharts>

          <S.WrapperCharts>
            <LineChart />
          </S.WrapperCharts>

          <S.WrapperSmallChart>
            <PieChart />
          </S.WrapperSmallChart>

          <S.WrapperSmallChart>
            <DoughnutChart />
          </S.WrapperSmallChart>

          <S.WrapperTable>
            <h2>Recent orders</h2>

            <Table />
          </S.WrapperTable>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
