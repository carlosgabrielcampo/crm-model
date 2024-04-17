import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import AuthProvider from "./config/context/auth/index.jsx";
import CRMProvider from "./config/context/provider/index.jsx";

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
