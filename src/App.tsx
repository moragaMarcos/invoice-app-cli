import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/invoice/:invoiceNumber"
            element={<InvoiceDetailPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
