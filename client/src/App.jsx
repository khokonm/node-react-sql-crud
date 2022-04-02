import React from 'react'
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Search from './pages/Search'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/add" element={<Add />}>
                </Route>
                <Route path="/edit/:id" element={<Edit />}>
                </Route>
                <Route path="/search" element={<Search />}>
                </Route>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App