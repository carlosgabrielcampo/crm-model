import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import DashboardContainer from "../containers/dashboard";
import Home from "../pages/home";
import ClientRegister from "../pages/register/clientRegister";
import UserRegister from "../pages/register/userRegister";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<DashboardContainer><Home/></DashboardContainer>}/>
          <Route path="/financeiro" element={<DashboardContainer><Home/></DashboardContainer>}/>
          <Route path="/cadastro" element={<DashboardContainer><Home/></DashboardContainer>}/>
          <Route path="/cadastro/clientes" element={<DashboardContainer><ClientRegister/></DashboardContainer>}/>
          <Route path="/cadastro/usuarios" element={<DashboardContainer><UserRegister/></DashboardContainer>}/>
          <Route path="/funil" element={<DashboardContainer></DashboardContainer>}/>
          <Route path="/configuracoes" element={<DashboardContainer></DashboardContainer>}/>
      </Routes>
  );
}