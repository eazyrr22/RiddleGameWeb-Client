import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
    <Link to={"/"}>Back to Home</Link>
      <form action="submit" method="post">
        <input type="email" name="email" placeholder="Email Adress" />
        <input type="password" name="password" minLength={6} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
