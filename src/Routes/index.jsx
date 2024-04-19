import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import DashboardContainer from "../containers/dashboard";
import Home from "../pages/home";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<DashboardContainer><Home/></DashboardContainer>}/>
          <Route path="/financeiro" element={<></>}/>
          <Route path="/cadastro" element={<></>}/>
          <Route path="/cadastro/clientes" element={<></>}/>
          <Route path="/cadastro/usuarios" element={<></>}/>
          <Route path="/funil" element={<></>}/>
          <Route path="/configuracoes" element={<></>}/>
      </Routes>
  );
}