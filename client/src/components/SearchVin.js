import React, { useState } from 'react'

const SearchVin = (props) => {
	const { onSubmitHandler, setVin, vin, errors } = props;
	return (
		<>
		<form onSubmit= { onSubmitHandler }>
			<h1>VIN lookup</h1>
			<p>
                <label>VIN </label>
                <input 
				className="box" 
				type="text" 
				value={vin} 
				onChange = {(e)=>setVin(e.target.value.toUpperCase())} /> 
            </p>
				{/* validation  */}
				{
					errors 
						? <span style={{color: "red", padding: "30px"}}>The following error codes have been detected: {errors}</span>
						: null
				}

            <input className="button" type="submit" value="Submit"/>
		</form>
		<a href='https://vpic.nhtsa.dot.gov/api/'></a>
		</>
	)
}

export default SearchVin;