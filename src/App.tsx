import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import HeroContainer from './containers/hero'

export default function App () {
    return (
        <Router>

            <Routes>
                <Route path="user/:id" element={
                    <>
                        <HeroContainer />
                    </>
                }/>
            </Routes>

        </Router>
    )
}
