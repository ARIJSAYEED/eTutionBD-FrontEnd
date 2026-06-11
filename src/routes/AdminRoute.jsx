import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/Auth/AuthContext';
import useRole from '../hooks/useRole';
import Loading from '../components/shared/Loading';
import Forbidden from '../components/shared/Forbidden';

const AdminRoute = ({ children }) => {
    const { loading } = use(AuthContext)
    const { role, roleLoading } = useRole()

    // console.log("from admin route", role)

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== "admin") {
        return <Forbidden></Forbidden>
    }

    return children

};

export default AdminRoute;