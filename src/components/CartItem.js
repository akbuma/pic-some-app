import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({ item }) {
    const [hovered, ref] = useHover()
    const { removeFromCart } = useContext(Context)

    const iconClassName = hovered ? "ri-delete-bin-line" : "ri-delete-bin-fill"

    return (
        <div className="c3art-item">
            <i className={iconClassName} 
               onClick={() => removeFromCart(item)} 
               ref={ref}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem