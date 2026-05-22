import React, { use } from 'react';
import { AuthContext } from '../Context/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user } = use(AuthContext)

    if (!user) {
        return <Navigate to='/auth/signin'></Navigate>
    }
    else {
        return children
    }

};

export default PrivateRoute;