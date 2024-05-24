import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
