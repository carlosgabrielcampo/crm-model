import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
