import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import BalanceSheet from "./components/balance-sheet";
import PyG from "./components/PyG";
import Informs from "./components/informes";
import "./App.css";
import Link from "./components/link";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Navbar />
		<div className="container" id="home">
			<App />
			<BalanceSheet />
			<PyG />
			<Informs />
			<Link />
		</div>
	</React.StrictMode>
);
