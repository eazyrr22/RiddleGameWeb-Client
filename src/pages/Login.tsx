import { Link } from "react-router";
export default function Login() {
  return (
    <div className="main-card">
    <Link to={"/"}>Back to Home</Link>
      <form action="submit" method="post">
        <h3>Login</h3>
        <input type="email" name="email" placeholder="Email Adress" />
        <input type="password" name="password"  placeholder="PassWord" minLength={6} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
