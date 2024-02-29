import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import ContactProject from './components/ContactProject';
//import Test from './components/Test';

function App() {

  // Set page title
  useEffect(() => {
    document.title = 'Kontakter'
});

  return (
    <>
      <div>

      <ContactProject />
      {/* <Test /> */}


      </div>

    </>
  )
}

export default App
