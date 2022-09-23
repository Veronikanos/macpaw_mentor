import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App({ children }) {
  return (
    <div className="App">
      <nav className="App__nav">
        <Link to="/voting">voting</Link>
        <Link to="/breeds">breeds</Link>
        <Link to="/gallery">gallery</Link>
      </nav>
      <main className="App__main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
