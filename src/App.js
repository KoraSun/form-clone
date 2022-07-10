import logo from "./logo.svg";
/* import "./App.css"; */
import { Header } from "./components/header";
import { Template } from "./components/template";
import { MainBody } from "./components/mainBody";

function App() {
  return (
    <div className="App">
      <Header />
      <Template/>
      <MainBody/>
    </div>
  );
}

export default App;
