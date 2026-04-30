import Login from "./pages/Login";
import Register from "./pages/Register";
// import RegisterEvent from "./pages/RegisterEvent";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-2">
      <Login />

      <Register />
    </div>
  );
}

export default App;