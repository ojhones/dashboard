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

  const tableColumns = [
    {
      key: 'status',
      title: 'Status',
    },

    {
      key: 'name',
      title: 'Nome',
    },

    {
      key: 'surname',
      title: 'Apelido',
    },

    {
      key: 'email',
      title: 'E-mail',
    },

    {
      key: 'localization',
      title: 'Localização',
    },

    {
      key: 'phone',
      title: 'Telefone',
    },

    {
      key: 'timeSociety',
      title: 'Tempo de associação',
    },
  ];

  const tableData = [
    {
      status: 'Ativo',
      name: 'Vítor',
      surname: 'Vítor',
      email: 'veq@gmail.com',
      localization: 'Itapetininga - SP',
      phone: '(15) 99605 0001',
      timeSociety: '1 anos',
    },

    {
      status: 'Pendente',
      name: 'Jhonatan',
      surname: 'Jhonatan',
      email: 'jh@gmail.com',
      localization: 'Itapetininga - SP',
      phone: '(15) 99605 0002',
      timeSociety: '3 anos',
    },

    {
      status: 'Expirado',
      name: 'Bruno',
      surname: 'Bruno',
      email: 'br@gmail.com',
      localization: 'Itapetininga - SP',
      phone: '(15) 99605 0003',
      timeSociety: '2 anos',
    },
  ];

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

            <Table tableColumns={tableColumns} tableData={tableData} />
          </S.WrapperTable>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
