import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Link extends Component {
	state = {};
	render() {
		return (
			<>
				<a
					href="https://docs.google.com/document/d/1n_Fqpy-rCEesuwzxhjLuQh2n6XlnbeTaejkYtYlcASQ/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="text-center d-block mt-5 fs-4 mb-5 text-decoration-none text-white bg-dark p-3 rounded w-25 mx-auto"
				>
					Documento de Análisis
				</a>
			</>
		);
	}
}

export default Link;
