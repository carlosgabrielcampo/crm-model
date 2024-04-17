import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<></>}/>
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