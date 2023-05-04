import { BrowserRouter } from "react-router-dom";
import { WebRoute } from "./routes/web";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <WebRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
