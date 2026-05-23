import React, { use } from 'react';
import { AuthContext } from '../Context/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/auth/signin'></Navigate>
    }
    else {
        return children
    }

};

export default PrivateRoute;