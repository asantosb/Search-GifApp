import { useState } from 'react';

import { AddCategory, GifGrid } from './components';
import { DeleteCategories } from './components/DeleteCategories';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        // setCategories( cat => [...cat, 'Valorant']);
        setCategories([newCategory ,...categories]);
    }

    return (
        <>

            <h1>SearchGifApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            
            <DeleteCategories deleteAllCategories= { setCategories }/>

                {
                    categories.map(category => (
                        <GifGrid 
                        key={ category } 
                        category={ category } />
                        )
                    )
                }
        </>
    );
}