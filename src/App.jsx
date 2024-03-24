import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Recipe from "./Components/Recipe/Recipe";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipe></Recipe>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center items-center mt-10">
        
      </div>
    </>
  );
}

export default App;
