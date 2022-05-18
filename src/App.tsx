import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,  Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/dashboard'


export default function App () {
    return (
        <Router>
            
            <Routes>

                <Route path="/dashboard/:id" element={ <Dashboard /> }/>

                <Route path="*" element={<Navigate to="/dashboard/12" />}/>

            </Routes>

        </Router>
    )
}
