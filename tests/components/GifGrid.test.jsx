import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Naruto';

    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByText('Cargando ...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe mostrar las items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: '123ABC',
                title: 'Naruto',
                url: 'https://localhost.com/naruto.png',
            },
            {
                id: '456DEF',
                title: 'Eren',
                url: 'https://localhost.com/eren.png',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
