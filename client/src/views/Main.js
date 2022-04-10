import React, { useState, useEffect }from 'react';
import axios from 'axios';
import SearchVin from '../components/SearchVin';
import CarsList from '../components/CarsList';
import CarDetail from '../components/CarDetail';

const Main = () => {
    const [cars, setCars] = useState([]);
    const [vin, setVin] = useState("");
	const [errors, setErrors] = useState("");
	const [activeCar, setActiveCar] = useState({});

	// initial check to confirm the .gov api is up 
	const checkVPIC = () => {
		console.log("Gov API is up")
		axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/12345678901234567/?format=json')
			.then( response =>{
				if (response.status != 200){
					setErrors("There was a problem establishing connection to the API")
						} 
					}
			)
			.catch(
				err => {
					console.log( err )
					if (err.message){
						setErrors(err.message);
					} 
				})
			}
	// useEffect to check on the status of the gov API once (hence the empty array)
	useEffect(() => {
			checkVPIC();
		}, [])

	// onSubmitHandler for the search 
	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/' + vin + '?format=json'
			)
			.then( response => {
				setErrors("")
                const carDetail = response.data.Results[0]
				console.log(carDetail)
				if (carDetail.ErrorCode != "0" ){
					setErrors(carDetail.ErrorText)
				} else {
					setCars([...cars, carDetail]);
					setVin("");
					setActiveCar(carDetail)
				}
			})
			.catch( err => {
				console.log( err )
				if (err.message){
					setErrors(err.message);
				} 
			})
	}
    return (
        <div>
			<SearchVin onSubmitHandler={onSubmitHandler} setVin={setVin} vin={vin} errors={errors} cars={cars} setCars={setCars}/>
            <hr/>
            <CarsList cars={cars} setCars={setCars} setActiveCar={setActiveCar}/>
			<hr/>
            <CarDetail activeCar={activeCar}  />
        </div>
    )
}
export default Main;