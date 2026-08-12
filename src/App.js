
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";

import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  return (
    <BrowserRouter>

    <Header />
    <Main />
    <Footer />

    </BrowserRouter>
  );
}

export default App;
