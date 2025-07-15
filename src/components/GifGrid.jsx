import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h1 aria-label="category-title">{category}</h1>
            {isLoading && <h2>Cargando ...</h2>}

            {/* Las propiedades se pueden desestructurar sino son muchas, cuando son muchas pueden enviarse como se hacen comun mente => img.id, img.title, img.url o usar la propiedad {...img} (esto significa esparcir las props y se usa cuando son bastantes) */}
            <div className="card-grid">
                {images.map((img) => (
                    <GifItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
