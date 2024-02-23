import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '@/src/components/CharacterCard';

const mockCharacter = {
  id: 1,
  name: 'Spider-Man',
  thumbnail: {
    path: 'path/to/image',
    extension: 'jpg'
  }
};

describe('CharacterCard component', () => {
  test('renders character name', () => {
    render(<CharacterCard character={mockCharacter} />);
    const characterNameElement = screen.getByText('Spider-Man');
    expect(characterNameElement).toBeInTheDocument();
  });

  test('renders character image with alt text', () => {
    render(<CharacterCard character={mockCharacter} />);
    const characterImageElement = screen.getByAltText('Spider-Man-Pic');
    expect(characterImageElement).toBeInTheDocument();
    expect(characterImageElement).toHaveAttribute('src', 'path/to/image.jpg');
  });

  test('renders character detail link with correct href', () => {
    render(<CharacterCard character={mockCharacter} />);
    const characterDetailLink = screen.getByRole('link', { name: 'Character Detail' });
    expect(characterDetailLink).toBeInTheDocument();
    expect(characterDetailLink).toHaveAttribute('href', 'character/1');
  });
});
