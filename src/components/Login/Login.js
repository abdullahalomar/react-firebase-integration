import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please login</h2>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;