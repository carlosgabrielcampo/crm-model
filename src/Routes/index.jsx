import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<></>}/>
        <Route path="/financeiro" element={<></>}/>
        <Route path="/cadastro" element={<></>}/>
        <Route path="/cadastro/clientes" element={<></>}/>
        <Route path="/cadastro/usuarios" element={<></>}/>
        <Route path="/funil" element={<></>}/>
        <Route path="/configuracoes" element={<></>}/>
      </Routes>
  );
}