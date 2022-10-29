import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Template } from './Template';
import { Home } from './Home';
import { Radio } from './Radio';
import { Playlist } from './Playlist';

const AllRoutes = () => {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/radio" element={<Radio />} />
                <Route exact path="/playlist" element={<Playlist />} />
                <Route exact path="/template" element={<Template />} />
                <Route path="*" element={<h1>Page Not found</h1>}>
                </Route>
            </Routes>
        </div>
    )
}

export { AllRoutes }