import React, { use } from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const { GoogleLogIn } = use(AuthContext)
    return (
        <div>
            <button onClick={GoogleLogIn} className="btn w-full">
                <FcGoogle />
                Sign In with Google
            </button>
        </div>
    );
};

export default SocialLogin;