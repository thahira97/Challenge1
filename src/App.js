import { Explore } from "./components/Explore";
import { Project } from "./components/Project";
import MainNavigation from "./components/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MainNavigation></MainNavigation>
      <Explore></Explore>
      <Project></Project>
    </div>
  );
}

export default App;
