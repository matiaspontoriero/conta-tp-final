import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const navLinks = [
	{ title: "Inicio", path: "#home" },
	{ title: "Balances", path: "#balance-sheets" },
	{ title: "PyG", path: "#income-statements" },
	{ title: "Informes", path: "#informs" },
];

const navItems = navLinks.map((link, index) => (
	<li className="nav-item active" key={index}>
		<a className="nav-link" href={link.path} id="nb-li">
			{link.title}
		</a>
	</li>
));

class Navbar extends Component {
	state = {};
	render() {
		return (
			<nav class="navbar navbar-dark bg-dark fixed-top">
				<a class="navbar-brand" href="#root">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_Iberdrola_%282023%29.svg/120px-Logo_Iberdrola_%282023%29.svg.png"
						height="30"
						className="d-inline-block align-top"
						alt="Iberdrola S.A. logo"
					/>
				</a>
				<ul className="nav justify-content-end">{navItems}</ul>
			</nav>
		);
	}
}

export default Navbar;
