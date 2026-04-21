import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/home/Home';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signin',
                Component: SignIn
            }
        ]
    }
])

export default router;