import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { UserProvider } from "./provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
