import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import * as S from './styles';

export function VerticalBarChart() {
  ChartJS.register(
    Title,
    Legend,
    Tooltip,
    BarElement,
    LinearScale,
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
        text: 'Title Vertical Bar!',
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
    'Ago:',
    'Sept',
    'Octuber',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Bar options={options} data={data} />
      </S.Wrapper>
    </S.Container>
  );
}
