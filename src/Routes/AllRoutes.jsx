import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Player } from '../Components/Player';

const AllRoutes = () => {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Routes>
                <Route exact path="/" element={<Player />} />
                <Route path="*" element={<h1>Page Not found</h1>}>
                </Route>
            </Routes>
        </div>
    )
}

export { AllRoutes }