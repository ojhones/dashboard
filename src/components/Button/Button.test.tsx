import { render, screen } from '@testing-library/react'; // renderiza o component de maneira 'virtual'

import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button title="Title" size="md" />);

    expect(screen.getByText('Title')).toBeInTheDocument;
  });
});
