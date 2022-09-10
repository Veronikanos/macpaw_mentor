import './App.css';
import Homepage from "./components/Homepage";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<Homepage />
			{/* <Routes>
				<Route path="/" element={<Homepage />} />
			</Routes> */}
      </header>
    </div>
  );
}

export default App;
