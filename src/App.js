import "./App.css";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import store from "./redux/reducers/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Checkout } from "./components/Checkout";
import LoginPage from "./components/LoginPage";
import ProductPage from './components/ProductPage'
function App() {
  return (
    <Router>
      <Provider store={store}>
       
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/user" element={<LoginPage />} />
          <Route path="/checkout" element={<Checkout />} />
		  <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
