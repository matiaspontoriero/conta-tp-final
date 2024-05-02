import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";

class BalanceSheet extends Component {
	render() {
		return (
			<>
				<h2 className="text-center mt-5" id="balance-sheets">
					Balance
				</h2>
				<hr />
				<table className="table">
					<thead>
						<tr>
							<th>Activo</th>
							<th>Pasivo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-activo-anc"
										className="text-center dropdown-toggle-custom"
									>
										ANC
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											Inmovilizado material: Se desglosa por tipo de activo:
											terrenos, edificios, instalaciones, plantas de generación,
											redes de distribución y transporte, etc. (€105.102
											millones). Se proporciona la edad útil estimada de cada
											tipo de activo, ofreciendo una perspectiva de las
											inversiones a largo plazo. Se incluye el valor neto
											contable de cada tipo de activo, mostrando su valor
											residual.
										</Dropdown.Item>
										<Dropdown.Item>
											Inmovilizado intangible: Se desglosa por tipo de activo:
											concesiones, licencias, patentes, marcas comerciales, etc.
											(€14.204 millones). Se indica la fecha de vencimiento o
											amortización de cada activo intangible, proporcionando
											información sobre la duración de su valor. Se muestra el
											importe amortizado de cada activo intangible, reflejando
											la porción del costo ya reconocido como gasto.
										</Dropdown.Item>
										<Dropdown.Item>
											Activos financieros no corrientes: Se desglosa por tipo de
											inversión: inversiones en empresas asociadas, filiales y
											otros activos financieros. (€11.300 millones). Se indica
											el valor inicial de cada inversión, permitiendo comparar
											su evolución. Se muestra el valor actual de cada
											inversión, reflejando su valor en el mercado al cierre del
											ejercicio.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-pasivo-pnc"
										className="text-center dropdown-toggle-custom"
									>
										PNC
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											<b>Préstamos a largo plazo:</b> Se desglosa por tipo de
											prestamista: entidades financieras, organismos
											multilaterales y otros acreedores. (€50.000 millones). Se
											indica el tipo de interés de cada préstamo, mostrando el
											costo de la financiación a largo plazo. Se muestra el
											vencimiento de cada préstamo, proporcionando información
											sobre el calendario de vencimientos de la deuda.
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Pasivos por arrendamientos financieros:</b> Se desglosa
											por tipo de arrendamiento: arrendamientos operativos y
											arrendamientos financieros. (€8.000 millones). Se indica
											el valor presente neto de los pasivos por arrendamientos
											financieros, reflejando el valor actual de los pagos
											futuros por arrendamiento. Se muestra la vida útil no
											vencida de cada arrendamiento financiero, proporcionando
											información sobre la duración de la obligación.
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Provisiones a largo plazo:</b> Se desglosa por tipo de
											provisión: provisiones para litigios, provisiones para
											desmantelamiento de activos, etc. (€2.000 millones). Se
											indica el importe probable de cada provisión, estimando el
											costo futuro.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
						<tr>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-activo-ac"
										className="text-center dropdown-toggle-custom"
									>
										AC
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											<b>Inventarios:</b> Se desglosa por tipo de inventario:
											materias primas, combustibles y productos en curso.
											(€2.500 millones). Se indica la rotación de cada tipo de
											inventario, midiendo la eficiencia en su gestión. Se
											muestra la política de valoración de inventarios,
											detallando el método utilizado para determinar su valor.{" "}
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Deudores comerciales y otras cuentas a cobrar:</b> Se
											desglosa por tipo de deudor: clientes, proveedores y otros
											deudores. (€6.000 millones). Se indica el saldo vencido de
											las cuentas a cobrar, mostrando el riesgo de morosidad. Se
											muestra la política de provisiones para créditos
											incobrables, detallando el método utilizado para estimar
											las pérdidas esperadas.
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Activos financieros corrientes:</b> Se desglosa por
											tipo de inversión: inversiones a corto plazo en
											instrumentos financieros. (€1.500 millones). Se indica la
											naturaleza de cada inversión financiera, detallando el
											tipo de instrumento y su emisor. Se muestra el vencimiento
											de cada inversión financiera, proporcionando información
											sobre la liquidez de estos activos.{" "}
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Caja y bancos:</b> Se desglosa por tipo de efectivo:
											efectivo en caja y depósitos en bancos. (€1.000 millones).
											Se indica la distribución geográfica del efectivo y
											depósitos, mostrando la diversificación de la tesorería.
											Se muestra la rentabilidad de los depósitos en bancos,
											reflejando el ingreso generado por estos activos.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-pasivo-pc"
										className="text-center dropdown-toggle-custom"
									>
										PC
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											<b>Acreedores comerciales y otras cuentas a pagar:</b> Se
											desglosa por tipo de acreedor: proveedores, acreedores de
											corto plazo y otros acreedores. (€4.000 millones). Se
											indica el saldo vencido de las cuentas a pagar, mostrando
											el riesgo de liquidez a corto plazo. Se muestra la
											política de pagos a proveedores, detallando el plazo medio
											de pago.{" "}
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Préstamos a corto plazo:</b> Se desglosa por tipo de
											prestamista: entidades financieras, organismos públicos y
											otros acreedores a corto plazo. (€5.000 millones). Se
											indica el tipo de interés de cada préstamo a corto plazo,
											mostrando el costo de la financiación a corto plazo. Se
											muestra el vencimiento de cada préstamo a corto plazo,
											proporcionando información sobre el calendario de
											vencimientos de la deuda a corto plazo.{" "}
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Provisiones a corto plazo:</b> Se desglosa por tipo de
											provisión: provisiones para impuestos, provisiones para
											indemnizaciones, etc. (€1.000 millones). Se indica el
											importe probable de cada provisión a corto plazo,
											estimando el costo futuro asociado a la obligación a corto
											plazo. Se muestra la evolución de las provisiones a corto
											plazo, permitiendo analizar la tendencia de las
											obligaciones a corto plazo.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
						<tr>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-resultados"
										className="text-center dropdown-toggle-custom"
									>
										Resultados
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											<b>Beneficio neto atribuible a la sociedad dominante:</b>{" "}
											Se desglosa por tipo de resultado: beneficio neto
											atribuible a la sociedad dominante, beneficio neto
											atribuible a las minoritarias y otras partidas de
											resultado del ejercicio. (€4.380 millones). Se indica la
											participación en el resultado del ejercicio de cada tipo
											de accionista, detallando la distribución de beneficios
											entre los diferentes grupos de accionistas. Se muestra la
											evolución del resultado del ejercicio en los últimos años,
											permitiendo analizar la tendencia de la rentabilidad de la
											empresa.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
							<td colSpan="1">
								<Dropdown>
									<Dropdown.Toggle
										variant="light"
										id="dropdown-patrimonio-neto"
										className="text-center dropdown-toggle-custom"
									>
										PN
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-custom">
										<Dropdown.Item>
											<b>Capital social:</b> Se desglosa por tipo de acción:
											acciones ordinarias, acciones preferentes, etc. (€25.000
											millones). Se indica el valor nominal de cada tipo de
											acción, mostrando el valor aportado por los accionistas.
											Se muestra el número de acciones en circulación de cada
											tipo, detallando la estructura del capital social.{" "}
										</Dropdown.Item>
										<Dropdown.Item>
											<b>Reservas:</b> Se desglosa por tipo de reserva: reservas
											legales, reservas voluntarias y otras reservas. (€12.000
											millones). Se indica el origen de cada tipo de reserva,
											detallando su procedencia. Se muestra la política de
											distribución de dividendos, detallando los criterios para
											la distribución de beneficios a los accionistas.
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}
}

export default BalanceSheet;
