import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const incomeStatementData = [
	{ concepto: "Ingresos por venta de energía", importe: 45000 },
	{ concepto: "Ingresos por servicios de red", importe: 3000 },
	{ concepto: "Otros ingresos", importe: 2884 },
	{
		concepto: "Aprovisionamiento de combustible y otros costes variables",
		importe: 28000,
	},
	{ concepto: "Gastos de personal", importe: 5000 },
	{ concepto: "Amortizaciones", importe: 4200 },
	{ concepto: "Otros gastos de explotación", importe: 3800 },
	{ concepto: "**Total Gastos de explotación**", importe: 41000 },
	{ concepto: "Beneficio de explotación", importe: 9884 },
	{ concepto: "Gastos por intereses", importe: 2500 },
	{ concepto: "Beneficio antes de impuestos", importe: 7384 },
	{ concepto: "Impuestos sobre beneficios", importe: 3004 },
	{ concepto: "**Beneficio neto**", importe: 4380 },
];

const PyG = () => {
	return (
		<div className="text-center">
			<hr className="m-4" />
			<h2 className="fs-2" id="income-statements">
				Cuenta de Pérdidas y Ganancias
			</h2>
			<hr className="m-4" />

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Concepto</th>
						<th>Importe (en €Millones)</th>
					</tr>
				</thead>
				<tbody>
					{incomeStatementData.map((item) => (
						<tr key={item.concepto}>
							<td>{item.concepto}</td>
							<td align="right">{item.importe.toLocaleString()}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PyG;
