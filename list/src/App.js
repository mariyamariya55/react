import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import Newapi from "./Components/Newapi";
import Formpage from "./Components/Formpage";
import Updata from "./Components/Updata";
import Login from "./Components/Login";
import NavbarHeader from "./Components/NavbarHeader";

function App() {
  let location = useLocation();

  return (
    <>
      {/* Navbar is rendered only if the path is not the root */}
      {location.pathname !== "/" && <NavbarHeader />}
      <Routes>
        <Route path='/Formpage' element={<Formpage />} />
        <Route path='/Newapi' element={<Newapi />} />
        <Route path='/Updata' element={<Updata />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
