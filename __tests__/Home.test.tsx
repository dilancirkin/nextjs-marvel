import { render, screen, act } from '@testing-library/react';
import Home from '@/app/page';
import FetchMock from 'jest-fetch-mock';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(() => ({ ref: jest.fn(), inView: true })),
}));

describe('Home component', () => {
  beforeEach(() => {
    FetchMock.resetMocks();
  });

  it('loads characters and displays them', async () => {
    const mockCharacters = { results: [{ id: 1, name: 'Character 1' }] };
    FetchMock.mockResponseOnce(JSON.stringify(mockCharacters));

    render(<Home />);

    expect(screen.getByRole('status')).toBeInTheDocument();


    expect(screen.getByText('Character 1')).toBeInTheDocument();

    expect(FetchMock).toHaveBeenCalledWith('https://gateway.marvel.com/v1/public/characters?offset=0&limit=30');
  });
});
