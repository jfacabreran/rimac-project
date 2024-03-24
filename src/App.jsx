import "./App.css";
import "./styles/app.scss";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router";
import Resumen from "./pages/ResumenPage";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import PlanesPage from "./pages/PlansPage";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/planes" element={<PlanesPage />} />
            <Route path="/resumen" element={<Resumen />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
