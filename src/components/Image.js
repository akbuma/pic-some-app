import React, { useState, useContext, useEffect } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

import useHover from "../hooks/useHover"

function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context)

    const [isFavorite, setFavorite] = useState(img.isFavorite)
    const [heartIcon, setHeartIcon] = useState(getHeartIcon())

    const [alreadyInCart, setAlreadyInCart] = useState(cartItems.some(item => item.id === img.id))
    const [cartIcon, setCartIcon] = useState(getCartIcon())

    useEffect(() => {
        setHeartIcon(getHeartIcon())
        setCartIcon(getCartIcon())
    }, [isFavorite, alreadyInCart, hovered])

    function getHeartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => {toggleFavorite(img.id); setFavorite(!isFavorite)}}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => { toggleFavorite(img.id); setFavorite(!isFavorite) }}></i>
        }
    }

    function getCartIcon() {
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => { removeFromCart(img); setAlreadyInCart(!alreadyInCart)}}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => { addToCart(img); setAlreadyInCart(!alreadyInCart)}}></i>
        }
    }

    return (
        <div
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

export default Image


