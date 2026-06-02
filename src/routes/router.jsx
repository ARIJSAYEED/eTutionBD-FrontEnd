import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Dashboard from '../layouts/DashboardLayout/Dashboard';
// import PostNewtuition from '../pages/Dashboard/Student/PostNewtuition';
// import Mytuitions from '../pages/Dashboard/Student/Mytuitions';
import AppliedTutors from '../pages/Dashboard/Student/AppliedTutors';
import Payments from '../pages/Dashboard/Student/Payments';
// import Tuitions from '../pages/tuitions/tuitions';
import Tutors from '../pages/Tutors/Tutors';
// import TuitionDetails from '../pages/tuitions/tuitionDetails';
import PrivateRoute from './PrivateRoute';
import PostWaitingForApproval from '../pages/Dashboard/Admin/PostWaitingForApproval';
import UserManagement from '../pages/Dashboard/Admin/UserManagement';
import Profile from '../pages/Profile/Profile';
import TutorDetails from '../pages/Tutors/TutorDetails';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import PostNewTuition from '../pages/Dashboard/Student/PostNewTution';
import MyTuitions from '../pages/Dashboard/Student/MyTutions';
import Tuitions from '../pages/Tutions/Tutions';
import TutionDetails from '../pages/Tutions/TutionDetails';
import PaymentS from '../pages/Dashboard/Payment/PaymentS';
import PaymentC from '../pages/Dashboard/Payment/PaymentC';

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
                path: 'tuitions',
                element:
                    <Tuitions></Tuitions>

            },
            {
                path: 'tuitions/:tuitionId',
                element: <PrivateRoute>
                    <TutionDetails></TutionDetails>
                </PrivateRoute>
            },
            {
                path: 'tutors',
                element:
                    <Tutors></Tutors>

            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'profile',
                Component: Profile
            },
            {
                path: 'users/:email',
                Component: TutorDetails
            }
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'my-tuitions',
                Component: MyTuitions
            },
            {
                path: 'post-new-tuition',
                Component: PostNewTuition
            },
            {
                path: 'applied-tutors',
                Component: AppliedTutors
            },
            {
                path: 'payments',
                Component: Payments
            },
            {
                path: 'post-waiting-for-approval',
                Component: PostWaitingForApproval
            },
            {
                path: 'user-management',
                Component: UserManagement
            },
            {
                path: 'payment-success',
                Component: PaymentS
            },
            {
                path: 'payment-cancel',
                Component: PaymentC
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