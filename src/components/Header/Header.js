import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav>
            <Stack className='header bg-primary justify-content-center p-3' direction='horizontal' gap={5}>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </Stack>
           </nav>
        </div>
    );
};

export default Header;