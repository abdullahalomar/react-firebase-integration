import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const {signInWithGoogle} = useFirebase();
    return (
        <div>
              <div className="registration w-50 mx-auto mt-5">
            <h3 className='text-primary'>Please Login</h3>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
    </Button>
    <Button onClick={signInWithGoogle} className='ms-4' variant="primary" type="submit">
    SignIn With Google
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Login;