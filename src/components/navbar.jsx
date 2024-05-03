import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

const navLinks = [
	{ title: "Inicio", path: "#home" },
	{ title: "Informes", path: "#informs" },
];

const navItems = navLinks.map((link, index) => (
	<li className="nav-item active" key={index}>
		<a className="nav-link" href={link.path} id="nb-li">
			{link.title}
		</a>
	</li>
));

class NavBar extends Component {
	state = {};
	render() {
		return (
			<>
				<Navbar className="navbar navbar-dark bg-dark fixed-top justify-content-end">
					<a
						className="navbar-brand position-absolute"
						href="#root"
						style={{ left: "10px", top: "7.5px" }}
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_Iberdrola_%282023%29.svg/120px-Logo_Iberdrola_%282023%29.svg.png"
							height="30"
							className="d-inline-block align-top"
							alt="Iberdrola S.A. logo"
						/>
					</a>
					<ul className="nav justify-content-end">
						{navItems}
						<NavDropdown title="Cuentas" id="basic-nav-dropdown">
							<NavDropdown.Item href="#balance-sheets">
								Balances
							</NavDropdown.Item>
							<NavDropdown.Item href="#income-statements">PyG</NavDropdown.Item>
						</NavDropdown>
					</ul>
					<Dropdown className="drop-menu" drop="down">
						<Dropdown.Toggle variant="dark" id="dropdown-basic">
							Menú
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#home">Inicio</Dropdown.Item>
							<Dropdown.Item href="#balance-sheets">Balance</Dropdown.Item>
							<Dropdown.Item href="#income-statements">PyG</Dropdown.Item>
							<Dropdown.Item href="#informs">Informe</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
			</>
		);
	}
}

export default NavBar;
