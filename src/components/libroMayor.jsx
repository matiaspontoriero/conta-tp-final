import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const generalLedgerData = [
	{
		cuenta: "Activos no corrientes",
		saldoInicial: 100000,
		movimientos: 1000,
		saldoFinal: 101000,
	},
];

const Mayor = () => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Cuenta</th>
					<th>Saldo Inicial (€Millones)</th>
					<th>Movimientos (€Millones)</th>
					<th>Saldo Final (€Millones)</th>
				</tr>
			</thead>
			<tbody>
				{generalLedgerData.map((item) => (
					<tr key={item.cuenta}>
						<td>{item.cuenta}</td>
						<td align="right">{item.saldoInicial.toLocaleString()}</td>
						<td align="right">{item.movimientos.toLocaleString()}</td>
						<td align="right">{item.saldoFinal.toLocaleString()}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Mayor;
