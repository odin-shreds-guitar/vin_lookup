import { useState } from "react";
import React from "react";

const CarsList = (props) => {

	// delete car from state
	const deleteCar = (VIN) => {
		console.log(VIN)
		let newCars = props.cars.filter((car) => {
			return car.VIN !== VIN
		})

		props.setCars(newCars)
	}

	// show car from state
	const showCar = () => {
		console.log("showing car")
	}

	return (
		<>
			<h2>Previously viewed VINs</h2>
			<div className="row justify-content-center">
				<table id="list-table" className="table table-hover table-borderless w-75">
					<thead className="table-light">
						<tr >
							<th>VIN</th>
							<th>Year</th>
							<th>Make</th>
							<th>Model</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody >
					{ props.cars.map((car, index) => {
						return (
							<tr key={index}>
								<td> {car.VIN} </td>
								<td> {car.ModelYear} </td>
								<td> {car.Make} </td>
								<td> {car.Model} </td>
								<td> 
									<button type="button" className="btn btn-success" onClick={ showCar }>Show Car</button>
									<button type="button" className="btn btn-danger" onClick={() =>  deleteCar(car.VIN) }>Remove</button>
								</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default CarsList