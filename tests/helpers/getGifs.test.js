import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs()', () => {

    test('debe de devolver un arreglo de gifs', async () => {

        const gifs = await getGifs('sekiro');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        //otra opcion
        // expect(gifs[0]).toHaveProperty('id', 'title', 'url');

    });

});