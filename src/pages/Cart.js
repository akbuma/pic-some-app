import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

//     # Challenge

//     Let our user place their order!

//     Clicking the "Place Order" button should:
//     1. Change the text to "Ordering..."
//     2. Timeout for 3 seconds(to simulate an order being placed)
//     3. Log "Order placed!" to the console
//     4. Empty out the cart

function Cart() {
    const { cartItems, setCartItems } = useContext(Context)
    const [orderPlaced, setOrderPlaced] = useState(false)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setOrderPlaced(true)
        setTimeout(function () { 
            setOrderPlaced(false)
            console.log('Order placed!')
            setCartItems([])
        }, 3000);
    }

    function displayOrderButton() {
        if(cartItems.length > 0) {
            return (
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{orderPlaced ? "Ordering..." : "Place Order"}</button>
                </div>
            )}
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {displayOrderButton()}
        </main>
    )
}

export default Cart