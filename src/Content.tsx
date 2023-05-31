/** @jsxImportSource @emotion/react */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '@/routes';

function Content() {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element()} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default Content;
