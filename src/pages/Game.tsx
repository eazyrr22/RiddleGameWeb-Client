
import { Link } from "react-router";
export default function Game() {
  return (
    <>
      <div className="header">
        <Link to={"/"}>Back to Home</Link>
      </div>
      <div className="riddle-query-container">
        <div className="inner-head">
          <div className="inner-head-item"></div>
          <div className="inner-head-item"></div>
        </div>
      </div>
      <form action="submit" method="post">
        <input type="text" name="answer" />
        <button type="submit">Submit Answer</button>
      </form>
    </>
  );
}
