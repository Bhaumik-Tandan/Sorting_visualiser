import NavBar from "./navbar";
import Provider from "./context/provider";
import Visualizer from "./visualizer";
function App() {
  return (
    <Provider>
      <NavBar />
      <Visualizer />
    </Provider>
  );
}

export default App;
