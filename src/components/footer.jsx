import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function openWeb() {
	window.open("https://matipontoriero.netlify.app", "_blank");
}

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="footer mt-auto py-3 bg-dark text-white">
				<div className="container">
					<hr className="bg-dark" />
					<span className="text-white">
						© 2024 - Desarrollado por <a href={openWeb()}>Matías Pontoriero</a>
					</span>
					<br />
					<span className="text-white">
						Para más información, contactar a{" "}
						<span className="text-info">
							https://matipontoriero.netlify.app
						</span>
					</span>
					<hr className="bg-dark" />
				</div>
			</footer>
		);
	}
}

export default Footer;
