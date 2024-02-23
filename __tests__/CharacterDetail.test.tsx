import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterDetail from '@/app/character/[id]/page';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('CharacterDetail component', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify({
      results: [{
        id: 1,
        name: 'Test Character',
        description: 'Test description',
        thumbnail: {
          path: 'test_path',
          extension: 'jpg'
        }
      }]
    })).mockResponseOnce(JSON.stringify({
      results: [{
        id: 1,
        title: 'Test Comic',
        thumbnail: {
          path: 'test_path',
          extension: 'jpg'
        }
      }]
    }));
  });

  test('renders character detail correctly', async () => {
    render(<CharacterDetail params={{ id: '1' }} />);

    await screen.findByText('Test Character');

    expect(screen.getByText('Test Character')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test Comic')).toBeInTheDocument();
  });

  test('slides left and right on arrow click', async () => {
    render(<CharacterDetail params={{ id: '1' }} />);

    await screen.findByText('Test Character');

    const slider = screen.getByTestId('slider');

    const initialScrollLeft = slider.scrollLeft;

    fireEvent.click(screen.getByTestId('right-arrow'));

    expect(slider.scrollLeft).toBeGreaterThan(initialScrollLeft);

    fireEvent.click(screen.getByTestId('left-arrow'));

    expect(slider.scrollLeft).toBe(initialScrollLeft);
  });
});
