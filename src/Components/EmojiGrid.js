import React, {useState, useEffect} from 'react';

export const EmojiGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect (() => {
        getEmoji();
    }, [])

    const getEmoji = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=Pu5pRJvL6aWR9TATxBCWb8aSMhiZ3aca`;
        const resp = await fetch(url);
        const data = await resp.json();

        if (data) {
            const emojis = data.data.map((img) => {
                return {
                    id: img.id,
                    grupo: img.slug,
                    title: img.title,
                    url: img.images?.downsized_medium.url,
                }
            })
        
            console.log(emojis);
            setImages(emojis)
        }else {
            return
        }
    }

    return (
        <div>
            <ol>
            <h3>{category}</h3>
            {
                images.map(img => (
                    <li key={img.id}>
                        <p>{img.title}</p>
                        <img src={img.url}></img>
                    </li>
                ))
            }
            </ol>
        </ div>
    )
}
