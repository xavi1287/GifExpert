import { useState } from 'react';
import { AddCategory, GifGrid} from './components';
// import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Pice','Naruto']);//se puede iniciar con cualqueri valor
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push('Naruto');
        console.log(newCategory)

        setCategories([...categories, newCategory])
    }
    return (
        <>
            {/*Titulo */}
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/*Input */}
            {/*ListadoGif */}


            {categories.map(category => (<GifGrid key={category} category={category}></GifGrid>))}


            {/*Gif Item */}
        </>
    )
}