import { render, screen } from '@testing-library/react'; // renderiza o component de maneira 'virtual'

import { Header } from '.';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

describe('Header component', () => {
  it('Have Exit Button', () => {
    render(<Header />);

    screen.getByRole('button', { name: /sair/i });
  });

  it('Have a Fake User (Vítor Emanuel Queiroz Ferreira)', () => {
    render(<Header />);

    expect(screen.getByText('Vítor Emanuel Queiroz Ferreira'))
      .toBeInTheDocument;
  });

  it('Fake Redirect to login Page', () => {
    render(<Header />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');

    screen.logTestingPlaygroundURL();
  });
});
