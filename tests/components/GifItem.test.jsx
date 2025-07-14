import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
	const title = 'Esto es un titulo';

	const url =
		'https://fastly.picsum.photos/id/360/536/354.jpg?hmac=hkJ_RmEPujjDj-tkqFkWT01yZlT-pWSePQb2PUJlwvE';

	test('Debe hacer match con el snapshop', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('debe mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GifItem title={title} url={url} />);
		// expect(screen.getByRole('img').src).toBe(img.url);
		// expect(screen.getByRole('img').alt).toBe(img.alt);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('debe de mostrar el titulo en el componente', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getAllByText(title)).toBeTruthy();
	});
});
