import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import AuthProvider from "./config/context/auth/index.jsx";
import CRMProvider from "./config/context/provider/index.jsx";
import './style.scss';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CRMProvider>
          <Router />
        </CRMProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
