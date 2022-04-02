import { render } from '@testing-library/react'; // renderiza o component de maneira 'virtual'

import { Header } from '.';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Sair')).toBeInTheDocument;
  });
});
