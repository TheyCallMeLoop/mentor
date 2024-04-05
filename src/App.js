/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import "./assets/css/style.css";
import Router from "./Routes/Router";
// _____custom css____
import "./assets/css/style.css"
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Router />
    </div>
  );
}

export default App;
