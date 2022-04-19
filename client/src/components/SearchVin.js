import React from 'react'

const SearchVin = (props) => {
	const { onSubmitHandler, setVin, vin, errors } = props;
	return (
		<>
		<form onSubmit= { onSubmitHandler }>
			<div id="nav">
				<span></span>
				<h1>VIN lookup</h1>
				{
					errors == ""
					? <span><a href='https://vpic.nhtsa.dot.gov/api/' target="_blank" className='link-success'>API Status: OK</a></span>
					: <span><a href='https://vpic.nhtsa.dot.gov/api/' target="_blank" className='link-danger'>API Status: Down</a></span>
				}
			</div>
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
		</>
	)
}

export default SearchVin;