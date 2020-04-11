import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    
    const [allPhotos, setAllPhotos] = useState([])

    let url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        console.log('Updating Photos!')
        setAllPhotos(prevPhotos => {
            prevPhotos.forEach(photo => {
                if(photo.id === id) {
                    photo.isFavorite = !photo.isFavorite;
                }  
            })
            return prevPhotos; 
        })
        //console.log(allPhotos)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }