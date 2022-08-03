import "./App.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes"

function App() {

  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
