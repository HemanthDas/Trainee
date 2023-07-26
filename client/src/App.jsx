import "./App.css";
import UserPage from "./pages/userpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicPage from "./pages/dynamicpage";
import AdminPage from "./pages/adminpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UserPage />} />
          <Route path="/dynamic/:id" element={<DynamicPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
