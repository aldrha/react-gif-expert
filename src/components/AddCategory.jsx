import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const valueFinal = inputValue.trim();

        if (valueFinal.length <= 1) return;

        onNewCategory(valueFinal);
        // setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            {/* si el metodo solo recibe un evento [(event) => onSubmit(event), (event) => onInputChange(event)] ==> entonces se puede resumir con solo el nombre del mismo */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
