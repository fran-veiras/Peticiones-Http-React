import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { EmojiGrid } from './Components/EmojiGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([])

    return (
        <>
            <h1>EmojiApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <EmojiGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
