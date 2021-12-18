import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Template } from '../Components/Template';
import { Player } from '../Components/Player';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Player />} />
                <Route exact path="/template" element={<Template />} />
                <Route path="*" element={<h1>Page Not found</h1>}>
                </Route>
            </Routes>
        </div>
    )
}

export { AllRoutes }