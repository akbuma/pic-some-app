import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

import { Switch, Route } from "react-router-dom"
import "./styles.css"
import 'remixicon/fonts/remixicon.css'

function App() {
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App