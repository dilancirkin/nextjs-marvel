import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicsCard from '@/src/components/ComicsCard';
const mockComic = {
  id: 1,
  title: 'Test Comic',
  thumbnail: {
    path: 'test_path',
    extension: 'jpg'
  }
};

describe('ComicsCard component', () => {
  test('renders comic card correctly', () => {
    render(<ComicsCard comic={mockComic} />);

    expect(screen.getByAltText('Test Comic')).toBeInTheDocument();
    expect(screen.getByAltText('Test Comic')).toHaveAttribute('src', 'test_path.jpg');
  });
});
