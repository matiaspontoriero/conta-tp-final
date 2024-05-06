import React, { useEffect } from "react";
import "../App.css";

const Background = () => {
	useEffect(() => {
		const particles = document.querySelectorAll(".particle");
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		particles.forEach((particle) => {
			const speed = Math.random() * 1 + 0.5;
			let xDirection = Math.random() < 0.5 ? -1 : 1;
			let yDirection = Math.random() < 0.5 ? -1 : 1;

			particle.style.left = centerX + "px";
			particle.style.top = centerY + "px";

			const animate = () => {
				let x = parseFloat(particle.style.left) || centerX;
				let y = parseFloat(particle.style.top) || centerY;

				if (x < 0 || x > window.innerWidth) {
					xDirection *= -1;
				}

				if (y < 0 || y > window.innerHeight) {
					yDirection *= -1;
				}

				x += speed * xDirection;
				y += speed * yDirection;

				particle.style.left = x + "px";
				particle.style.top = y + "px";

				requestAnimationFrame(animate);
			};

			animate();
		});
	}, []);
	return (
		<div className="background">
			{[...Array(50)].map((_, index) => (
				<div key={index} className="particle" />
			))}
		</div>
	);
};

export default Background;
