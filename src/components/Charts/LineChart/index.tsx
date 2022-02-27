import {
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import * as S from './styles';

export function LineChart() {
  ChartJS.register(
    Title,
    Legend,
    Tooltip,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Line options={options} data={data} />
      </S.Wrapper>
    </S.Container>
  );
}
