import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { PrivateRouter } from "./router/PrivateRouter";
import { ThemeProvider } from "./provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
        <PrivateRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
