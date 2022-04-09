import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const CarDetail = (props) => {
	const i = props.cars.length - 1;
	if (props.cars[i]){
		return (
			<>
			<h2>Car Details </h2>
			<table className='car-detail-table'>
				<tbody>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>ABS</Tooltip>}><td className="table-row-label">ABS</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ABS ? props.cars[i].ABS : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Active Safety Sys Note</Tooltip>}><td className="table-row-label">Active Safety Sys Note</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ActiveSafetySysNote ? props.cars[i].ActiveSafetySysNote : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Cruise Control</Tooltip>}><td className="table-row-label">Adaptive Cruise Control</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AdaptiveCruiseControl ? props.cars[i].AdaptiveCruiseControl : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Driving Beam</Tooltip>}><td className="table-row-label">Adaptive Driving Beam</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AdaptiveDrivingBeam ? props.cars[i].AdaptiveDrivingBeam : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Headlights</Tooltip>}><td className="table-row-label">Adaptive Headlights</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AdaptiveHeadlights ? props.cars[i].AdaptiveHeadlights : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Additional Error Text</Tooltip>}><td className="table-row-label">Additional Error Text</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AdditionalErrorText ? props.cars[i].AdditionalErrorText : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Curtain</Tooltip>}><td className="table-row-label">Air Bag Loc Curtain</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AirBagLocCurtain ? props.cars[i].AirBagLocCurtain : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Front</Tooltip>}><td className="table-row-label">Air Bag Loc Front</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AirBagLocFront ? props.cars[i].AirBagLocFront : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Knee</Tooltip>}><td className="table-row-label">Air Bag Loc Knee</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AirBagLocKnee ? props.cars[i].AirBagLocKnee : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Seat Cushion</Tooltip>}><td className="table-row-label">Air Bag Loc Seat Cushion</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AirBagLocSeatCushion ? props.cars[i].AirBagLocSeatCushion : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Side</Tooltip>}><td className="table-row-label">Air Bag Loc Side</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AirBagLocSide ? props.cars[i].AirBagLocSide : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Auto Reverse System</Tooltip>}><td className="table-row-label">Auto Reverse System</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AutoReverseSystem ? props.cars[i].AutoReverseSystem : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Automatic Pedestrian Alerting Sound</Tooltip>}><td className="table-row-label">Automatic Pedestrian Alerting Sound</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AutomaticPedestrianAlertingSound ? props.cars[i].AutomaticPedestrianAlertingSound : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Axle Configuration</Tooltip>}><td className="table-row-label">Axle Configuration</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].AxleConfiguration ? props.cars[i].AxleConfiguration : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Axles</Tooltip>}><td className="table-row-label">Axles</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Axles ? props.cars[i].Axles : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Base Price</Tooltip>}><td className="table-row-label">Base Price</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BasePrice ? props.cars[i].BasePrice : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery A</Tooltip>}><td className="table-row-label">Battery A</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryA ? props.cars[i].BatteryA : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery A_to</Tooltip>}><td className="table-row-label">Battery A_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryA_to ? props.cars[i].BatteryA_to : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Cells</Tooltip>}><td className="table-row-label">Battery Cells</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryCells ? props.cars[i].BatteryCells : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Info</Tooltip>}><td className="table-row-label">Battery Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryInfo ? props.cars[i].BatteryInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery KWh</Tooltip>}><td className="table-row-label">Battery KWh</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryKWh ? props.cars[i].BatteryKWh : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery KWh_to</Tooltip>}><td className="table-row-label">Battery KWh_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryKWh_to ? props.cars[i].BatteryKWh_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Modules</Tooltip>}><td className="table-row-label">Battery Modules</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryModules ? props.cars[i].BatteryModules : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Packs</Tooltip>}><td className="table-row-label">Battery Packs</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryPacks ? props.cars[i].BatteryPacks : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Type</Tooltip>}><td className="table-row-label">Battery Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryType ? props.cars[i].BatteryType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery V</Tooltip>}><td className="table-row-label">Battery V</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryV ? props.cars[i].BatteryV : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery V_to</Tooltip>}><td className="table-row-label">Battery V_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BatteryV_to ? props.cars[i].BatteryV_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bed Length IN</Tooltip>}><td className="table-row-label">Bed Length IN</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BedLengthIN ? props.cars[i].BedLengthIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bed Type</Tooltip>}><td className="table-row-label">Bed Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BedType ? props.cars[i].BedType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Blind Spot Intervention</Tooltip>}><td className="table-row-label">Blind Spot Intervention</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BlindSpotIntervention ? props.cars[i].BlindSpotIntervention : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Blind Spot Mon</Tooltip>}><td className="table-row-label">Blind Spot Mon</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BlindSpotMon ? props.cars[i].BlindSpotMon : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Body Cab Type</Tooltip>}><td className="table-row-label">Body Cab Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BodyCabType ? props.cars[i].BodyCabType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Body Class</Tooltip>}><td className="table-row-label">Body Class</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BodyClass ? props.cars[i].BodyClass : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Brake System Desc</Tooltip>}><td className="table-row-label">Brake System Desc</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BrakeSystemDesc ? props.cars[i].BrakeSystemDesc : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Brake System Type</Tooltip>}><td className="table-row-label">Brake System Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BrakeSystemType ? props.cars[i].BrakeSystemType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Floor Config Type</Tooltip>}><td className="table-row-label">Bus Floor Config Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BusFloorConfigType ? props.cars[i].BusFloorConfigType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Length</Tooltip>}><td className="table-row-label">Bus Length</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BusLength ? props.cars[i].BusLength : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Type</Tooltip>}><td className="table-row-label">Bus Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].BusType ? props.cars[i].BusType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>CAN_AACN</Tooltip>}><td className="table-row-label">CAN_AACN</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CAN_AACN ? props.cars[i].CAN_AACN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>CIB</Tooltip>}><td className="table-row-label">CIB</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CIB ? props.cars[i].CIB : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Cash For Clunkers</Tooltip>}><td className="table-row-label">Cash For Clunkers</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CashForClunkers ? props.cars[i].CashForClunkers : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Charger Level</Tooltip>}><td className="table-row-label">Charger Level</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ChargerLevel ? props.cars[i].ChargerLevel : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Charger Power KW</Tooltip>}><td className="table-row-label">Charger Power KW</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ChargerPowerKW ? props.cars[i].ChargerPowerKW : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Cooling Type</Tooltip>}><td className="table-row-label">Cooling Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CoolingType ? props.cars[i].CoolingType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Curb Weight LB</Tooltip>}><td className="table-row-label">Curb Weight LB</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CurbWeightLB ? props.cars[i].CurbWeightLB : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Custom Motorcycle Type</Tooltip>}><td className="table-row-label">Custom Motorcycle Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].CustomMotorcycleType ? props.cars[i].CustomMotorcycleType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Daytime Running Light</Tooltip>}><td className="table-row-label">Daytime Running Light</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DaytimeRunningLight ? props.cars[i].DaytimeRunningLight : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Destination Market</Tooltip>}><td className="table-row-label">Destination Market</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DestinationMarket ? props.cars[i].DestinationMarket : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement CC</Tooltip>}><td className="table-row-label">Displacement CC</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DisplacementCC ? props.cars[i].DisplacementCC : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement CI</Tooltip>}><td className="table-row-label">Displacement CI</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DisplacementCI ? props.cars[i].DisplacementCI : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement L</Tooltip>}><td className="table-row-label">Displacement L</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DisplacementL ? props.cars[i].DisplacementL : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Doors</Tooltip>}><td className="table-row-label">Doors</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Doors ? props.cars[i].Doors : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Drive Type</Tooltip>}><td className="table-row-label">Drive Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DriveType ? props.cars[i].DriveType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Driver Assist</Tooltip>}><td className="table-row-label">Driver Assist</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DriverAssist ? props.cars[i].DriverAssist : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Dynamic Brake Support</Tooltip>}><td className="table-row-label">Dynamic Brake Support</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].DynamicBrakeSupport ? props.cars[i].DynamicBrakeSupport : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>EDR</Tooltip>}><td className="table-row-label">EDR</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EDR ? props.cars[i].EDR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>ESC</Tooltip>}><td className="table-row-label">ESC</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ESC ? props.cars[i].ESC : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>EV Drive Unit</Tooltip>}><td className="table-row-label">EV Drive Unit</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EVDriveUnit ? props.cars[i].EVDriveUnit : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Electrification Level</Tooltip>}><td className="table-row-label">Electrification Level</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ElectrificationLevel ? props.cars[i].ElectrificationLevel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Configuration</Tooltip>}><td className="table-row-label">Engine Configuration</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineConfiguration ? props.cars[i].EngineConfiguration : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Cycles</Tooltip>}><td className="table-row-label">Engine Cycles</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineCycles ? props.cars[i].EngineCycles : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Cylinders</Tooltip>}><td className="table-row-label">Engine Cylinders</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineCylinders ? props.cars[i].EngineCylinders : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine HP</Tooltip>}><td className="table-row-label">Engine HP</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineHP ? props.cars[i].EngineHP : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine HP_to</Tooltip>}><td className="table-row-label">Engine HP_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineHP_to ? props.cars[i].EngineHP_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine KW</Tooltip>}><td className="table-row-label">Engine KW</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineKW ? props.cars[i].EngineKW : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Manufacturer</Tooltip>}><td className="table-row-label">Engine Manufacturer</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineManufacturer ? props.cars[i].EngineManufacturer : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Model</Tooltip>}><td className="table-row-label">Engine Model</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EngineModel ? props.cars[i].EngineModel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Entertainment System</Tooltip>}><td className="table-row-label">Entertainment System</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].EntertainmentSystem ? props.cars[i].EntertainmentSystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Error Code</Tooltip>}><td className="table-row-label">Error Code</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ErrorCode ? props.cars[i].ErrorCode : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Error Text</Tooltip>}><td className="table-row-label">Error Text</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ErrorText ? props.cars[i].ErrorText : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Forward Collision Warning</Tooltip>}><td className="table-row-label">Forward Collision Warning</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ForwardCollisionWarning ? props.cars[i].ForwardCollisionWarning : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Injection Type</Tooltip>}><td className="table-row-label">Fuel Injection Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].FuelInjectionType ? props.cars[i].FuelInjectionType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Type Primary</Tooltip>}><td className="table-row-label">Fuel Type Primary</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].FuelTypePrimary ? props.cars[i].FuelTypePrimary : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Type Secondary</Tooltip>}><td className="table-row-label">Fuel Type Secondary</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].FuelTypeSecondary ? props.cars[i].FuelTypeSecondary : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GCWR</Tooltip>}><td className="table-row-label">GCWR</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].GCWR ? props.cars[i].GCWR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GCWR_to</Tooltip>}><td className="table-row-label">GCWR_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].GCWR_to ? props.cars[i].GCWR_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GVWR</Tooltip>}><td className="table-row-label">GVWR</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].GVWR ? props.cars[i].GVWR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GVWR_to</Tooltip>}><td className="table-row-label">GVWR_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].GVWR_to ? props.cars[i].GVWR_to : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Keyless Ignition</Tooltip>}><td className="table-row-label">Keyless Ignition</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].KeylessIgnition ? props.cars[i].KeylessIgnition : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Centering Assistance</Tooltip>}><td className="table-row-label">Lane Centering Assistance</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].LaneCenteringAssistance ? props.cars[i].LaneCenteringAssistance : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Departure Warning</Tooltip>}><td className="table-row-label">Lane Departure Warning</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].LaneDepartureWarning ? props.cars[i].LaneDepartureWarning : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Keep System</Tooltip>}><td className="table-row-label">Lane Keep System</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].LaneKeepSystem ? props.cars[i].LaneKeepSystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lower Beam Headlamp Light Source</Tooltip>}><td className="table-row-label">Lower Beam Headlamp Light Source</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].LowerBeamHeadlampLightSource ? props.cars[i].LowerBeamHeadlampLightSource : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Make</Tooltip>}><td className="table-row-label">Make</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Make ? props.cars[i].Make : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Make ID</Tooltip>}><td className="table-row-label">Make ID</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].MakeID ? props.cars[i].MakeID : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Manufacturer</Tooltip>}><td className="table-row-label">Manufacturer</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Manufacturer ? props.cars[i].Manufacturer : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Manufacturer Id</Tooltip>}><td className="table-row-label">Manufacturer Id</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ManufacturerId ? props.cars[i].ManufacturerId : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model</Tooltip>}><td className="table-row-label">Model</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Model ? props.cars[i].Model : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model ID</Tooltip>}><td className="table-row-label">Model ID</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ModelID ? props.cars[i].ModelID : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model Year</Tooltip>}><td className="table-row-label">Model Year</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ModelYear ? props.cars[i].ModelYear : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Motorcycle Chassis Type</Tooltip>}><td className="table-row-label">Motorcycle Chassis Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].MotorcycleChassisType ? props.cars[i].MotorcycleChassisType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Motorcycle Suspension Type</Tooltip>}><td className="table-row-label">Motorcycle Suspension Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].MotorcycleSuspensionType ? props.cars[i].MotorcycleSuspensionType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Body Type</Tooltip>}><td className="table-row-label">NCSA Body Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSABodyType ? props.cars[i].NCSABodyType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Make</Tooltip>}><td className="table-row-label">NCSA Make</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSAMake ? props.cars[i].NCSAMake : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Map Exc Approved By</Tooltip>}><td className="table-row-label">NCSA Map Exc Approved By</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSAMapExcApprovedBy ? props.cars[i].NCSAMapExcApprovedBy : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Map Exc Approved On</Tooltip>}><td className="table-row-label">NCSA Map Exc Approved On</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSAMapExcApprovedOn ? props.cars[i].NCSAMapExcApprovedOn : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Mapping Exception</Tooltip>}><td className="table-row-label">NCSA Mapping Exception</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSAMappingException ? props.cars[i].NCSAMappingException : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Model</Tooltip>}><td className="table-row-label">NCSA Model</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSAModel ? props.cars[i].NCSAModel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Note</Tooltip>}><td className="table-row-label">NCSA Note</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NCSANote ? props.cars[i].NCSANote : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Non Land Use</Tooltip>}><td className="table-row-label">Non Land Use</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].NonLandUse ? props.cars[i].NonLandUse : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Note</Tooltip>}><td className="table-row-label">Note</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Note ? props.cars[i].Note : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Bus Info</Tooltip>}><td className="table-row-label">Other Bus Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].OtherBusInfo ? props.cars[i].OtherBusInfo : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Engine Info</Tooltip>}><td className="table-row-label">Other Engine Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].OtherEngineInfo ? props.cars[i].OtherEngineInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Motorcycle Info</Tooltip>}><td className="table-row-label">Other Motorcycle Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].OtherMotorcycleInfo ? props.cars[i].OtherMotorcycleInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Restraint System Info</Tooltip>}><td className="table-row-label">Other Restraint System Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].OtherRestraintSystemInfo ? props.cars[i].OtherRestraintSystemInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Trailer Info</Tooltip>}><td className="table-row-label">Other Trailer Info</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].OtherTrailerInfo ? props.cars[i].OtherTrailerInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Park Assist</Tooltip>}><td className="table-row-label">Park Assist</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ParkAssist ? props.cars[i].ParkAssist : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Pedestrian Automatic Emergency Braking</Tooltip>}><td className="table-row-label">Pedestrian Automatic Emergency Braking</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PedestrianAutomaticEmergencyBraking ? props.cars[i].PedestrianAutomaticEmergencyBraking : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant City</Tooltip>}><td className="table-row-label">Plant City</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PlantCity ? props.cars[i].PlantCity : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant Company Name</Tooltip>}><td className="table-row-label">Plant Company Name</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PlantCompanyName ? props.cars[i].PlantCompanyName : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant Country</Tooltip>}><td className="table-row-label">Plant Country</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PlantCountry ? props.cars[i].PlantCountry : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant State</Tooltip>}><td className="table-row-label">Plant State</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PlantState ? props.cars[i].PlantState : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Possible Values</Tooltip>}><td className="table-row-label">Possible Values</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].PossibleValues ? props.cars[i].PossibleValues : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Pretensioner</Tooltip>}><td className="table-row-label">Pretensioner</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Pretensioner ? props.cars[i].Pretensioner : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Automatic Emergency Braking</Tooltip>}><td className="table-row-label">Rear Automatic Emergency Braking</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].RearAutomaticEmergencyBraking ? props.cars[i].RearAutomaticEmergencyBraking : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Cross Traffic Alert</Tooltip>}><td className="table-row-label">Rear Cross Traffic Alert</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].RearCrossTrafficAlert ? props.cars[i].RearCrossTrafficAlert : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Visibility System</Tooltip>}><td className="table-row-label">Rear Visibility System</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].RearVisibilitySystem ? props.cars[i].RearVisibilitySystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>SAE Automation Level</Tooltip>}><td className="table-row-label">SAE Automation Level</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SAEAutomationLevel ? props.cars[i].SAEAutomationLevel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>SAE Automation Level_to</Tooltip>}><td className="table-row-label">SAE Automation Level_to</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SAEAutomationLevel_to ? props.cars[i].SAEAutomationLevel_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seat Belts All</Tooltip>}><td className="table-row-label">Seat Belts All</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SeatBeltsAll ? props.cars[i].SeatBeltsAll : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seat Rows</Tooltip>}><td className="table-row-label">Seat Rows</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SeatRows ? props.cars[i].SeatRows : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seats</Tooltip>}><td className="table-row-label">Seats</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Seats ? props.cars[i].Seats : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Semiautomatic Headlamp Beam Switching</Tooltip>}><td className="table-row-label">Semiautomatic Headlamp Beam Switching</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SemiautomaticHeadlampBeamSwitching ? props.cars[i].SemiautomaticHeadlampBeamSwitching : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Series</Tooltip>}><td className="table-row-label">Series</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Series ? props.cars[i].Series : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Series2</Tooltip>}><td className="table-row-label">Series2</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Series2 ? props.cars[i].Series2 : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Steering Location</Tooltip>}><td className="table-row-label">Steering Location</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SteeringLocation ? props.cars[i].SteeringLocation : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Suggested VIN</Tooltip>}><td className="table-row-label">Suggested VIN</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].SuggestedVIN ? props.cars[i].SuggestedVIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>TPMS</Tooltip>}><td className="table-row-label">TPMS</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TPMS ? props.cars[i].TPMS : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Top Speed MPH</Tooltip>}><td className="table-row-label">Top Speed MPH</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TopSpeedMPH ? props.cars[i].TopSpeedMPH : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Track Width</Tooltip>}><td className="table-row-label">Track Width</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TrackWidth ? props.cars[i].TrackWidth : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Traction Control</Tooltip>}><td className="table-row-label">Traction Control</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TractionControl ? props.cars[i].TractionControl : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Body Type</Tooltip>}><td className="table-row-label">Trailer Body Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TrailerBodyType ? props.cars[i].TrailerBodyType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Length</Tooltip>}><td className="table-row-label">Trailer Length</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TrailerLength ? props.cars[i].TrailerLength : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Type</Tooltip>}><td className="table-row-label">Trailer Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TrailerType ? props.cars[i].TrailerType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Transmission Speeds</Tooltip>}><td className="table-row-label">Transmission Speeds</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TransmissionSpeeds ? props.cars[i].TransmissionSpeeds : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Transmission Style</Tooltip>}><td className="table-row-label">Transmission Style</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].TransmissionStyle ? props.cars[i].TransmissionStyle : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trim</Tooltip>}><td className="table-row-label">Trim</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Trim ? props.cars[i].Trim : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trim2</Tooltip>}><td className="table-row-label">Trim2</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Trim2 ? props.cars[i].Trim2 : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Turbo</Tooltip>}><td className="table-row-label">Turbo</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Turbo ? props.cars[i].Turbo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>VIN</Tooltip>}><td className="table-row-label">VIN</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].VIN ? props.cars[i].VIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Valve Train Design</Tooltip>}><td className="table-row-label">Valve Train Design</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].ValveTrainDesign ? props.cars[i].ValveTrainDesign : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Vehicle Type</Tooltip>}><td className="table-row-label">Vehicle Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].VehicleType ? props.cars[i].VehicleType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Long</Tooltip>}><td className="table-row-label">Wheel Base Long</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].WheelBaseLong ? props.cars[i].WheelBaseLong : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Short</Tooltip>}><td className="table-row-label">Wheel Base Short</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].WheelBaseShort ? props.cars[i].WheelBaseShort : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Type</Tooltip>}><td className="table-row-label">Wheel Base Type</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].WheelBaseType ? props.cars[i].WheelBaseType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Size Front</Tooltip>}><td className="table-row-label">Wheel Size Front</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].WheelSizeFront ? props.cars[i].WheelSizeFront : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Size Rear</Tooltip>}><td className="table-row-label">Wheel Size Rear</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].WheelSizeRear ? props.cars[i].WheelSizeRear : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheels</Tooltip>}><td className="table-row-label">Wheels</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Wheels ? props.cars[i].Wheels : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Windows</Tooltip>}><td className="table-row-label">Windows</td></OverlayTrigger><td className="table-row-data">{ props.cars[i].Windows ? props.cars[i].Windows : "-"}</td>
					</tr>
				</tbody>
			</table>
			<hr/>
		</>
		)
	}
}

export default CarDetail;