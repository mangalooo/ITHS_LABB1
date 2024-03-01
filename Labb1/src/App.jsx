import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Contacts from "./components/Contacts";

function App() {
  // Set page title
  useEffect(() => {
    document.title = "Kontakter";
  });

  return <Contacts />;
}

export default App;
