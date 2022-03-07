import "./App.css";
import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCards from "./components/ItemCards";
import store from "./redux/reducers/store";
import {Provider} from 'react-redux';
import {Routes, Route} from "react-router-dom"
function App() {
	return (
		<div>
			<Provider store={store}>
			<Header />
            <ItemCards/>
			</Provider>
		</div>
		
	);
}

export default App;
