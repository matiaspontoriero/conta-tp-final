import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import BalanceSheet from "./components/balance-sheet";
import PyG from "./components/PyG";
import Informs from "./components/informes";
import "./App.css";
import Link from "./components/link";
import Carr from "./components/carousel";
/* import Background from "./components/bg"; */
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavBar />
		{/* <Background className="z-1" /> */}
		<div className="container z-2" id="home">
			<App />
			<Carr />
			<BalanceSheet />
			<PyG />
			<Informs />
			<Link />
		</div>
		<Footer />
	</React.StrictMode>
);
