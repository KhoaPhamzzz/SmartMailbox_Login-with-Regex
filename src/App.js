
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
