import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const YourComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State for alert visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "test@email.com" && password === "1234") {
            props.setAuthenticated(true);
            setShowAlert(false); // Hide alert if authenticated
        } else {
            setShowAlert(true); // Show alert on failure
            props.setAuthenticated(false);
            console.log("got here");
        }
    };

    return (
        <Container>
            <div>Email=test@email.com and password=1234</div>
            <Row>
                <Col>
                    {showAlert && (
                        <Alert key="danger" variant="danger" onClose={() => setShowAlert(false)} dismissible>
                            Wrong username or password
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default YourComponent;
