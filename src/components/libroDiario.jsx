import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const journalData = [
	{
		fecha: new Date("2023-01-01"),
		asiento: 1,
		descripcion: "Compra de materia prima",
		debe: 1000,
		haber: 0,
	},
	{
		fecha: new Date("2023-01-01"),
		asiento: 2,
		descripcion: "Venta de producto terminado",
		debe: 0,
		haber: 1500,
	},
];

const Diario = () => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Fecha</th>
					<th>Asiento</th>
					<th>Descripción</th>
					<th>Debe (€Millones)</th>
					<th>Haber (€Millones)</th>
				</tr>
			</thead>
			<tbody>
				{journalData.map((item) => (
					<tr key={item.asiento}>
						<td>{item.fecha.toLocaleDateString()}</td>
						<td>{item.asiento}</td>
						<td>{item.descripcion}</td>
						<td align="right">{item.debe.toLocaleString()}</td>
						<td align="right">{item.haber.toLocaleString()}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Diario;
