import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { PrivateRouter } from "./router/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <PrivateRouter />
    </BrowserRouter>
  );
}

export default App;
