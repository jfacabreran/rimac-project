import "./App.css";
import "./styles/app.scss";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router";
import SummaryPage from "./pages/SummaryPage";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import PlansPage from "./pages/PlansPage";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/planes" element={<PlansPage />} />
            <Route path="/resumen" element={<SummaryPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
