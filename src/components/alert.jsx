import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AlertBtn() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="danger" onClick={handleShow}>
				¡Importante!
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title style={{ color: "black" }}>Importante!</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ color: "black" }}>
					Los informes en esta página web no se encuentran completos, por lo que
					si quieres la información completa entra al link que se encuentra al
					final.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
					<a href="#link-button">
						<Button variant="primary" onClick={handleClose}>
							Ir al Link
						</Button>
					</a>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AlertBtn;
