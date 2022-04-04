import { render, screen } from '@testing-library/react'; // renderiza o component de maneira 'virtual'

import { BreadCrumb } from '.';

describe('BreadCrumb component', () => {
  it('Renders correctly ', () => {
    const paths = [
      {
        id: 1,
        url: '/',
        title: 'Render Test',
        isCurrentPage: true,
      },

      {
        id: 2,
        url: '/',
        title: 'Render Test 2',
        isCurrentPage: false,
      },
    ];

    render(<BreadCrumb paths={paths} />);

    expect(screen.getByText('Render Test'));

    expect(
      screen.getByRole('link', {
        name: /render test 2/i,
      })
    );

    // screen.logTestingPlaygroundURL();
  });
});
