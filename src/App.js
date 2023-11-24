import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-[1500px] h-[948px]">
      <div className="bg-gray-500">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
