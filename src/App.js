import logo from "./logo.svg";
import "./App.css";
import Homepage from "./homepage";
import About from "./about";
import Resume from "./resume";
import Contact from "./contact";
function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
