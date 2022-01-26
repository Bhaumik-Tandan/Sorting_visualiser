import NavBar from "./navbar";
import Provider from "./context/provider";
function App() {
  return (
    <Provider>
      <NavBar></NavBar>
    </Provider>
  );
}

export default App;
