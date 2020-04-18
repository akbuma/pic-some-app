import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems)

    let url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    function addToCart(img) {
        setCartItems(prevItems => [...prevItems, img])
    }

    function removeFromCart(img) {
        setCartItems(prevItems => prevItems.filter(current => current.id !== img.id))
    }

    function toggleFavorite(id) {
        setAllPhotos(prevPhotos => {
            prevPhotos.forEach(photo => {
                if(photo.id === id) {
                    photo.isFavorite = !photo.isFavorite;
                }  
            })
            return prevPhotos; 
        })
    }

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, cartItems, setCartItems, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }