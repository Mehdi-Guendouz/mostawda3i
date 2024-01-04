import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import DetailsProduits from "./pages/ProductDetails";
import AchatProduits from "./pages/AchatPage";
import VenteProduits from "./pages/VentePage";
import { UserInfoForm } from "./components/Forms/UserInfoForm";
import LandingPage from "./pages/LandingPage";

import RegisterPage from "./pages/RegisterPage";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<DetailsProduits />} path="/DetailsProduit" />
        <Route element={<AchatProduits />} path="/AchatPage" />
        <Route element={<VenteProduits />} path="/VentePage" />
        <Route element={<DetailsProduits />} path="/ProductPage" />
        <Route element={<UserInfoForm />} path="/UserInfo" />
        <Route element={<Dashboard />} path="/" />
        {/* <Route element={<AjouterAchat />} path="/AjouterAchat" />
        <Route element={<AjouterVente />} path="/AjouterVente" />
        <Route element={<ModifierAchat />} path="/ModifierAchat" />
        <Route element={<ModifierVente />} path="/ModifierVente" /> */}
        <Route element={<AddProduct />} path="/addProduct" />
      </Route>
      <Route element={<AuthenticationPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route path="*" element={<h1>404</h1>} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
