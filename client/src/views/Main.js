import React, { useState }from 'react';
import axios from 'axios';
import SearchVin from '../components/SearchVin';
import CarsList from '../components/CarsList';
import CarDetail from '../components/CarDetail';

const Main = () => {
    const [cars, setCars] = useState([]);
    const [vin, setVin] = useState("");
	const [errors, setErrors] = useState("")

	// initial check to confirm the .gov api is up 
	const checkVPIC = () => {
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
	checkVPIC();

	// onSubmitHandler for the search 
	const onSubmitHandler = (e) => {
		e.preventDefault();
		// const vin = "2hkrw6h30kh209140"
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
            {/* trying to pass the setter and getter form line 7 here */}
            {/* passed the getter and setter allowing ProhjectList to see it */}
			<SearchVin onSubmitHandler={onSubmitHandler} setVin={setVin} vin={vin} errors={errors} cars={cars} setCars={setCars}/>
            <hr/>
            <CarsList cars={cars} setCars={setCars}/>
			<hr/>
            <CarDetail cars={cars} setCars={setCars}/>
        </div>
    )
}
export default Main;