import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-card">
      <h1 className="title">Riddle Game </h1>
      <header className="home-header">
        <div>guest </div>
        <div>mode </div>
      </header>
      <h2 className="description">Challenge Your Mind with Epic Riddles</h2>
      <div className="menu-btn-container">
        <Link to="/game">Play Now</Link>
        <Link to="/login">Login</Link>
        <Link to="/leaderBoard">LeaderBoard</Link>
      </div>
    </div>
  );
}
