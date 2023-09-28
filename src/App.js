import "./styles/style.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Calculator from "./components/Calculator/Calculator";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Calculator />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
