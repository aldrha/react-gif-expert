import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Power Rangers']);

    const onAddCategory = (onNewCategory) => {
        console.log(onNewCategory);
        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories]);
    };

    return (
        <>
            <h1 aria-label="title">GiftExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
