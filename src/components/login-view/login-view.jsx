import { useState } from "react";
import { Form, Button, Col, Row, Container, Card, CardBody, CardTitle } from "react-bootstrap";


export const LoginView = ({ onLoggedIn }) => {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };
    
      fetch("https://myflix-z4g1.onrender.com/login", { 
      method: "POST",
      body: JSON.stringify(data),
      headers: {
              "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Login response: ", data);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
          } else {
            alert("No such user");
          }
        })
        .catch((e) => {
          alert("Something went wrong");
        });
    }
  return (
    <Container >
      <Row>
      <Col>
      <Card className="shadow p-4 mb-4 bg-grey mt-5 border-0">
        <CardBody>
          <CardTitle className="card-title">Login</CardTitle>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" className="submit">
        Submit
      </Button>
    </Form>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};