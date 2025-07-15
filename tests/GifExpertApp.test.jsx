import { fireEvent, screen, render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('debe de hacer match con el snapshop', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el titulo', () => {
        render(<GifExpertApp />);

        expect(
            screen.getByRole('heading', { level: 1, name: 'title' })
        ).toBeTruthy();

        expect(screen.getByText('GiftExpertApp')).toBeTruthy();
    });

    test('debe agregar una nueva categoria', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Avatar' } });
        fireEvent.submit(form);

        const titles = screen.getAllByRole('heading', {
            level: 1,
            name: 'category-title',
        });

        expect(titles.length).toBeGreaterThan(1);
    });

    //solucion de alguien mas en el curso

    test('no debe de agregar una categoria si ya existe', () => {
        const category = 'Avatar';
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        // console.log(titles.name.length).toB;
        expect(screen.getAllByText(category).length).toBe(1);
    });
});
