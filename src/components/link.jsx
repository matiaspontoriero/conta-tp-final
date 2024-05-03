import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function openLink() {
	window.open(
		"https://docs.google.com/document/d/1n_Fqpy-rCEesuwzxhjLuQh2n6XlnbeTaejkYtYlcASQ/edit?usp=sharing",
		"_blank"
	);
}

class Link extends Component {
	state = {};
	render() {
		return (
			<div className="d-flex justify-content-center" id="link-button">
				<button
					onClick={openLink}
					className="btn btn-secondary btn-lg btn-block m-4"
				>
					Link
				</button>
			</div>
		);
	}
}

export default Link;
