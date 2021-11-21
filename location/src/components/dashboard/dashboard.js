import "../../App.css";
import NavVertical from "./navVertical";
import NavBar from "./navBar";
import Tableau_bord from "./Tableau_bord";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <NavVertical />
      <div style={{ width: "100%" }}>
        <NavBar />
        <Tableau_bord />
      </div>
    </div>
  );
}

export default App;
