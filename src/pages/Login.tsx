import { Link } from "react-router";
import Form from "react-bootstrap/Form";


export default function Login() {
  return (
    <div className="main-card">
      <Link to={"/"} className="disable-default-style">Back to Home</Link>
      <Form>
         <h3 className="centrelize mb-3">Login</h3>
        <Form.Group className="mb-3" controlId="ControlInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlInput">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="centrelize" type="submit">Sign in</button>
      </Form>
    </div>
  );
}

{/* <form action="submit" method="post">
        <h3>Login</h3>
        <input type="email" name="email" placeholder="Email Adress" />
        <input
          type="password"
          name="password"
          placeholder="PassWord"
          minLength={6}
        />
        <button type="submit">Sign in</button> */}