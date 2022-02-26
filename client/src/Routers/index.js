import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Conditions from '../Components/Conditions'
import Home from '../Components/Home'

const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/conditions/:type" element={<Conditions />} exact />
            </Routes>
        </Router>
    )
}

export default Routers