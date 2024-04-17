import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./config/context/auth/index.js";
import CRMProvider from "./config/context/provider/index.jsx";
import Router from "./routes";

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
