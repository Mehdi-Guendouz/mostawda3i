import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import DemoPage from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<AuthenticationPage />} path="/login" />
        <Route element={<DemoPage />} path="/ProductPage" />
        <Route element={<Dashboard />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;
