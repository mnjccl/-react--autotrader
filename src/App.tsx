import "./sass/_main.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
