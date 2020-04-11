import React, { useState, useContext, useEffect } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

// # Challenge
// Add propTypes to the Image component
// 1. className should be a string
// 2. img should be an object, specifically an object with `id`, `url`, and`isFavorite` properties
//     a. Hint: Specifying the properties of an object is called and object's "shape"
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)

    const [isFavorite, setFavorite] = useState(img.isFavorite)
    const [heartIcon, setHeartIcon] = useState(getHeartIcon())

    const { toggleFavorite } = useContext(Context)

    useEffect(() => {
        setHeartIcon(getHeartIcon())
    }, [isFavorite, hovered])

    function getHeartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => {toggleFavorite(img.id); setFavorite(!isFavorite)}}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => { toggleFavorite(img.id); setFavorite(!isFavorite) }}></i>
        }
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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
