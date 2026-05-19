import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Dashboard from '../layouts/DashboardLayout/Dashboard';
import PostNewTution from '../pages/Dashboard/Student/PostNewTution';
import MyTutions from '../pages/Dashboard/Student/MyTutions';
import AppliedTutors from '../pages/Dashboard/Student/AppliedTutors';
import Payments from '../pages/Dashboard/Student/Payments';
import Tutions from '../pages/Tutions/Tutions';
import Tutors from '../pages/Tutors/Tutors';
import TutionDetails from '../pages/Tutions/TutionDetails';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'tutions',
                element: <Tutions></Tutions>,
            },
            {
                path: 'tutions/:tutionId',
                element: <TutionDetails></TutionDetails>
            },
            {
                path: 'tutors',
                element: <Tutors></Tutors>
            },
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'my-tutions',
                Component: MyTutions
            },
            {
                path: 'post-new-tution',
                Component: PostNewTution
            },
            {
                path: 'applied-tutors',
                Component: AppliedTutors
            },
            {
                path: 'payments',
                Component: Payments
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