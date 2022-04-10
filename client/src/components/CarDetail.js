import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const CarDetail = (props) => {
		return (
			<>
			<h2>Car Details </h2>
			<table className='car-detail-table'>
				<tbody>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>ABS</Tooltip>}><td className="table-row-label">ABS</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ABS ? props.activeCar.ABS : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Active Safety Sys Note</Tooltip>}><td className="table-row-label">Active Safety Sys Note</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ActiveSafetySysNote ? props.activeCar.ActiveSafetySysNote : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Cruise Control</Tooltip>}><td className="table-row-label">Adaptive Cruise Control</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AdaptiveCruiseControl ? props.activeCar.AdaptiveCruiseControl : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Driving Beam</Tooltip>}><td className="table-row-label">Adaptive Driving Beam</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AdaptiveDrivingBeam ? props.activeCar.AdaptiveDrivingBeam : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Adaptive Headlights</Tooltip>}><td className="table-row-label">Adaptive Headlights</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AdaptiveHeadlights ? props.activeCar.AdaptiveHeadlights : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Additional Error Text</Tooltip>}><td className="table-row-label">Additional Error Text</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AdditionalErrorText ? props.activeCar.AdditionalErrorText : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Curtain</Tooltip>}><td className="table-row-label">Air Bag Loc Curtain</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AirBagLocCurtain ? props.activeCar.AirBagLocCurtain : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Front</Tooltip>}><td className="table-row-label">Air Bag Loc Front</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AirBagLocFront ? props.activeCar.AirBagLocFront : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Knee</Tooltip>}><td className="table-row-label">Air Bag Loc Knee</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AirBagLocKnee ? props.activeCar.AirBagLocKnee : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Seat Cushion</Tooltip>}><td className="table-row-label">Air Bag Loc Seat Cushion</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AirBagLocSeatCushion ? props.activeCar.AirBagLocSeatCushion : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Air Bag Loc Side</Tooltip>}><td className="table-row-label">Air Bag Loc Side</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AirBagLocSide ? props.activeCar.AirBagLocSide : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Auto Reverse System</Tooltip>}><td className="table-row-label">Auto Reverse System</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AutoReverseSystem ? props.activeCar.AutoReverseSystem : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Automatic Pedestrian Alerting Sound</Tooltip>}><td className="table-row-label">Automatic Pedestrian Alerting Sound</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AutomaticPedestrianAlertingSound ? props.activeCar.AutomaticPedestrianAlertingSound : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Axle Configuration</Tooltip>}><td className="table-row-label">Axle Configuration</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.AxleConfiguration ? props.activeCar.AxleConfiguration : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Axles</Tooltip>}><td className="table-row-label">Axles</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Axles ? props.activeCar.Axles : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Base Price</Tooltip>}><td className="table-row-label">Base Price</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BasePrice ? props.activeCar.BasePrice : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery A</Tooltip>}><td className="table-row-label">Battery A</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryA ? props.activeCar.BatteryA : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery A_to</Tooltip>}><td className="table-row-label">Battery A_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryA_to ? props.activeCar.BatteryA_to : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Cells</Tooltip>}><td className="table-row-label">Battery Cells</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryCells ? props.activeCar.BatteryCells : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Info</Tooltip>}><td className="table-row-label">Battery Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryInfo ? props.activeCar.BatteryInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery KWh</Tooltip>}><td className="table-row-label">Battery KWh</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryKWh ? props.activeCar.BatteryKWh : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery KWh_to</Tooltip>}><td className="table-row-label">Battery KWh_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryKWh_to ? props.activeCar.BatteryKWh_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Modules</Tooltip>}><td className="table-row-label">Battery Modules</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryModules ? props.activeCar.BatteryModules : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Packs</Tooltip>}><td className="table-row-label">Battery Packs</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryPacks ? props.activeCar.BatteryPacks : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery Type</Tooltip>}><td className="table-row-label">Battery Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryType ? props.activeCar.BatteryType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery V</Tooltip>}><td className="table-row-label">Battery V</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryV ? props.activeCar.BatteryV : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Battery V_to</Tooltip>}><td className="table-row-label">Battery V_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BatteryV_to ? props.activeCar.BatteryV_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bed Length IN</Tooltip>}><td className="table-row-label">Bed Length IN</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BedLengthIN ? props.activeCar.BedLengthIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bed Type</Tooltip>}><td className="table-row-label">Bed Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BedType ? props.activeCar.BedType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Blind Spot Intervention</Tooltip>}><td className="table-row-label">Blind Spot Intervention</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BlindSpotIntervention ? props.activeCar.BlindSpotIntervention : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Blind Spot Mon</Tooltip>}><td className="table-row-label">Blind Spot Mon</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BlindSpotMon ? props.activeCar.BlindSpotMon : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Body Cab Type</Tooltip>}><td className="table-row-label">Body Cab Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BodyCabType ? props.activeCar.BodyCabType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Body Class</Tooltip>}><td className="table-row-label">Body Class</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BodyClass ? props.activeCar.BodyClass : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Brake System Desc</Tooltip>}><td className="table-row-label">Brake System Desc</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BrakeSystemDesc ? props.activeCar.BrakeSystemDesc : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Brake System Type</Tooltip>}><td className="table-row-label">Brake System Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BrakeSystemType ? props.activeCar.BrakeSystemType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Floor Config Type</Tooltip>}><td className="table-row-label">Bus Floor Config Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BusFloorConfigType ? props.activeCar.BusFloorConfigType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Length</Tooltip>}><td className="table-row-label">Bus Length</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BusLength ? props.activeCar.BusLength : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Bus Type</Tooltip>}><td className="table-row-label">Bus Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.BusType ? props.activeCar.BusType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>CAN_AACN</Tooltip>}><td className="table-row-label">CAN_AACN</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CAN_AACN ? props.activeCar.CAN_AACN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>CIB</Tooltip>}><td className="table-row-label">CIB</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CIB ? props.activeCar.CIB : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Cash For Clunkers</Tooltip>}><td className="table-row-label">Cash For Clunkers</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CashForClunkers ? props.activeCar.CashForClunkers : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Charger Level</Tooltip>}><td className="table-row-label">Charger Level</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ChargerLevel ? props.activeCar.ChargerLevel : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Charger Power KW</Tooltip>}><td className="table-row-label">Charger Power KW</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ChargerPowerKW ? props.activeCar.ChargerPowerKW : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Cooling Type</Tooltip>}><td className="table-row-label">Cooling Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CoolingType ? props.activeCar.CoolingType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Curb Weight LB</Tooltip>}><td className="table-row-label">Curb Weight LB</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CurbWeightLB ? props.activeCar.CurbWeightLB : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Custom Motorcycle Type</Tooltip>}><td className="table-row-label">Custom Motorcycle Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.CustomMotorcycleType ? props.activeCar.CustomMotorcycleType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Daytime Running Light</Tooltip>}><td className="table-row-label">Daytime Running Light</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DaytimeRunningLight ? props.activeCar.DaytimeRunningLight : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Destination Market</Tooltip>}><td className="table-row-label">Destination Market</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DestinationMarket ? props.activeCar.DestinationMarket : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement CC</Tooltip>}><td className="table-row-label">Displacement CC</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DisplacementCC ? props.activeCar.DisplacementCC : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement CI</Tooltip>}><td className="table-row-label">Displacement CI</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DisplacementCI ? props.activeCar.DisplacementCI : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Displacement L</Tooltip>}><td className="table-row-label">Displacement L</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DisplacementL ? props.activeCar.DisplacementL : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Doors</Tooltip>}><td className="table-row-label">Doors</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Doors ? props.activeCar.Doors : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Drive Type</Tooltip>}><td className="table-row-label">Drive Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DriveType ? props.activeCar.DriveType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Driver Assist</Tooltip>}><td className="table-row-label">Driver Assist</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DriverAssist ? props.activeCar.DriverAssist : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Dynamic Brake Support</Tooltip>}><td className="table-row-label">Dynamic Brake Support</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.DynamicBrakeSupport ? props.activeCar.DynamicBrakeSupport : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>EDR</Tooltip>}><td className="table-row-label">EDR</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EDR ? props.activeCar.EDR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>ESC</Tooltip>}><td className="table-row-label">ESC</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ESC ? props.activeCar.ESC : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>EV Drive Unit</Tooltip>}><td className="table-row-label">EV Drive Unit</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EVDriveUnit ? props.activeCar.EVDriveUnit : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Electrification Level</Tooltip>}><td className="table-row-label">Electrification Level</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ElectrificationLevel ? props.activeCar.ElectrificationLevel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Configuration</Tooltip>}><td className="table-row-label">Engine Configuration</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineConfiguration ? props.activeCar.EngineConfiguration : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Cycles</Tooltip>}><td className="table-row-label">Engine Cycles</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineCycles ? props.activeCar.EngineCycles : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Cylinders</Tooltip>}><td className="table-row-label">Engine Cylinders</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineCylinders ? props.activeCar.EngineCylinders : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine HP</Tooltip>}><td className="table-row-label">Engine HP</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineHP ? props.activeCar.EngineHP : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine HP_to</Tooltip>}><td className="table-row-label">Engine HP_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineHP_to ? props.activeCar.EngineHP_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine KW</Tooltip>}><td className="table-row-label">Engine KW</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineKW ? props.activeCar.EngineKW : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Manufacturer</Tooltip>}><td className="table-row-label">Engine Manufacturer</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineManufacturer ? props.activeCar.EngineManufacturer : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Engine Model</Tooltip>}><td className="table-row-label">Engine Model</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EngineModel ? props.activeCar.EngineModel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Entertainment System</Tooltip>}><td className="table-row-label">Entertainment System</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.EntertainmentSystem ? props.activeCar.EntertainmentSystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Error Code</Tooltip>}><td className="table-row-label">Error Code</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ErrorCode ? props.activeCar.ErrorCode : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Error Text</Tooltip>}><td className="table-row-label">Error Text</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ErrorText ? props.activeCar.ErrorText : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Forward Collision Warning</Tooltip>}><td className="table-row-label">Forward Collision Warning</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ForwardCollisionWarning ? props.activeCar.ForwardCollisionWarning : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Injection Type</Tooltip>}><td className="table-row-label">Fuel Injection Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.FuelInjectionType ? props.activeCar.FuelInjectionType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Type Primary</Tooltip>}><td className="table-row-label">Fuel Type Primary</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.FuelTypePrimary ? props.activeCar.FuelTypePrimary : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Fuel Type Secondary</Tooltip>}><td className="table-row-label">Fuel Type Secondary</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.FuelTypeSecondary ? props.activeCar.FuelTypeSecondary : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GCWR</Tooltip>}><td className="table-row-label">GCWR</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.GCWR ? props.activeCar.GCWR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GCWR_to</Tooltip>}><td className="table-row-label">GCWR_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.GCWR_to ? props.activeCar.GCWR_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GVWR</Tooltip>}><td className="table-row-label">GVWR</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.GVWR ? props.activeCar.GVWR : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>GVWR_to</Tooltip>}><td className="table-row-label">GVWR_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.GVWR_to ? props.activeCar.GVWR_to : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Keyless Ignition</Tooltip>}><td className="table-row-label">Keyless Ignition</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.KeylessIgnition ? props.activeCar.KeylessIgnition : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Centering Assistance</Tooltip>}><td className="table-row-label">Lane Centering Assistance</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.LaneCenteringAssistance ? props.activeCar.LaneCenteringAssistance : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Departure Warning</Tooltip>}><td className="table-row-label">Lane Departure Warning</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.LaneDepartureWarning ? props.activeCar.LaneDepartureWarning : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lane Keep System</Tooltip>}><td className="table-row-label">Lane Keep System</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.LaneKeepSystem ? props.activeCar.LaneKeepSystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Lower Beam Headlamp Light Source</Tooltip>}><td className="table-row-label">Lower Beam Headlamp Light Source</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.LowerBeamHeadlampLightSource ? props.activeCar.LowerBeamHeadlampLightSource : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Make</Tooltip>}><td className="table-row-label">Make</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Make ? props.activeCar.Make : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Make ID</Tooltip>}><td className="table-row-label">Make ID</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.MakeID ? props.activeCar.MakeID : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Manufacturer</Tooltip>}><td className="table-row-label">Manufacturer</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Manufacturer ? props.activeCar.Manufacturer : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Manufacturer Id</Tooltip>}><td className="table-row-label">Manufacturer Id</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ManufacturerId ? props.activeCar.ManufacturerId : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model</Tooltip>}><td className="table-row-label">Model</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Model ? props.activeCar.Model : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model ID</Tooltip>}><td className="table-row-label">Model ID</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ModelID ? props.activeCar.ModelID : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Model Year</Tooltip>}><td className="table-row-label">Model Year</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ModelYear ? props.activeCar.ModelYear : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Motorcycle Chassis Type</Tooltip>}><td className="table-row-label">Motorcycle Chassis Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.MotorcycleChassisType ? props.activeCar.MotorcycleChassisType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Motorcycle Suspension Type</Tooltip>}><td className="table-row-label">Motorcycle Suspension Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.MotorcycleSuspensionType ? props.activeCar.MotorcycleSuspensionType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Body Type</Tooltip>}><td className="table-row-label">NCSA Body Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSABodyType ? props.activeCar.NCSABodyType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Make</Tooltip>}><td className="table-row-label">NCSA Make</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSAMake ? props.activeCar.NCSAMake : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Map Exc Approved By</Tooltip>}><td className="table-row-label">NCSA Map Exc Approved By</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSAMapExcApprovedBy ? props.activeCar.NCSAMapExcApprovedBy : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Map Exc Approved On</Tooltip>}><td className="table-row-label">NCSA Map Exc Approved On</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSAMapExcApprovedOn ? props.activeCar.NCSAMapExcApprovedOn : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Mapping Exception</Tooltip>}><td className="table-row-label">NCSA Mapping Exception</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSAMappingException ? props.activeCar.NCSAMappingException : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Model</Tooltip>}><td className="table-row-label">NCSA Model</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSAModel ? props.activeCar.NCSAModel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>NCSA Note</Tooltip>}><td className="table-row-label">NCSA Note</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NCSANote ? props.activeCar.NCSANote : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Non Land Use</Tooltip>}><td className="table-row-label">Non Land Use</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.NonLandUse ? props.activeCar.NonLandUse : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Note</Tooltip>}><td className="table-row-label">Note</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Note ? props.activeCar.Note : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Bus Info</Tooltip>}><td className="table-row-label">Other Bus Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.OtherBusInfo ? props.activeCar.OtherBusInfo : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Engine Info</Tooltip>}><td className="table-row-label">Other Engine Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.OtherEngineInfo ? props.activeCar.OtherEngineInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Motorcycle Info</Tooltip>}><td className="table-row-label">Other Motorcycle Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.OtherMotorcycleInfo ? props.activeCar.OtherMotorcycleInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Restraint System Info</Tooltip>}><td className="table-row-label">Other Restraint System Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.OtherRestraintSystemInfo ? props.activeCar.OtherRestraintSystemInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Other Trailer Info</Tooltip>}><td className="table-row-label">Other Trailer Info</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.OtherTrailerInfo ? props.activeCar.OtherTrailerInfo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Park Assist</Tooltip>}><td className="table-row-label">Park Assist</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ParkAssist ? props.activeCar.ParkAssist : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Pedestrian Automatic Emergency Braking</Tooltip>}><td className="table-row-label">Pedestrian Automatic Emergency Braking</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PedestrianAutomaticEmergencyBraking ? props.activeCar.PedestrianAutomaticEmergencyBraking : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant City</Tooltip>}><td className="table-row-label">Plant City</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PlantCity ? props.activeCar.PlantCity : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant Company Name</Tooltip>}><td className="table-row-label">Plant Company Name</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PlantCompanyName ? props.activeCar.PlantCompanyName : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant Country</Tooltip>}><td className="table-row-label">Plant Country</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PlantCountry ? props.activeCar.PlantCountry : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Plant State</Tooltip>}><td className="table-row-label">Plant State</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PlantState ? props.activeCar.PlantState : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Possible Values</Tooltip>}><td className="table-row-label">Possible Values</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.PossibleValues ? props.activeCar.PossibleValues : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Pretensioner</Tooltip>}><td className="table-row-label">Pretensioner</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Pretensioner ? props.activeCar.Pretensioner : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Automatic Emergency Braking</Tooltip>}><td className="table-row-label">Rear Automatic Emergency Braking</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.RearAutomaticEmergencyBraking ? props.activeCar.RearAutomaticEmergencyBraking : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Cross Traffic Alert</Tooltip>}><td className="table-row-label">Rear Cross Traffic Alert</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.RearCrossTrafficAlert ? props.activeCar.RearCrossTrafficAlert : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Rear Visibility System</Tooltip>}><td className="table-row-label">Rear Visibility System</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.RearVisibilitySystem ? props.activeCar.RearVisibilitySystem : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>SAE Automation Level</Tooltip>}><td className="table-row-label">SAE Automation Level</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SAEAutomationLevel ? props.activeCar.SAEAutomationLevel : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>SAE Automation Level_to</Tooltip>}><td className="table-row-label">SAE Automation Level_to</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SAEAutomationLevel_to ? props.activeCar.SAEAutomationLevel_to : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seat Belts All</Tooltip>}><td className="table-row-label">Seat Belts All</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SeatBeltsAll ? props.activeCar.SeatBeltsAll : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seat Rows</Tooltip>}><td className="table-row-label">Seat Rows</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SeatRows ? props.activeCar.SeatRows : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Seats</Tooltip>}><td className="table-row-label">Seats</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Seats ? props.activeCar.Seats : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Semiautomatic Headlamp Beam Switching</Tooltip>}><td className="table-row-label">Semiautomatic Headlamp Beam Switching</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SemiautomaticHeadlampBeamSwitching ? props.activeCar.SemiautomaticHeadlampBeamSwitching : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Series</Tooltip>}><td className="table-row-label">Series</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Series ? props.activeCar.Series : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Series2</Tooltip>}><td className="table-row-label">Series2</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Series2 ? props.activeCar.Series2 : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Steering Location</Tooltip>}><td className="table-row-label">Steering Location</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SteeringLocation ? props.activeCar.SteeringLocation : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Suggested VIN</Tooltip>}><td className="table-row-label">Suggested VIN</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.SuggestedVIN ? props.activeCar.SuggestedVIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>TPMS</Tooltip>}><td className="table-row-label">TPMS</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TPMS ? props.activeCar.TPMS : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Top Speed MPH</Tooltip>}><td className="table-row-label">Top Speed MPH</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TopSpeedMPH ? props.activeCar.TopSpeedMPH : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Track Width</Tooltip>}><td className="table-row-label">Track Width</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TrackWidth ? props.activeCar.TrackWidth : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Traction Control</Tooltip>}><td className="table-row-label">Traction Control</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TractionControl ? props.activeCar.TractionControl : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Body Type</Tooltip>}><td className="table-row-label">Trailer Body Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TrailerBodyType ? props.activeCar.TrailerBodyType : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Length</Tooltip>}><td className="table-row-label">Trailer Length</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TrailerLength ? props.activeCar.TrailerLength : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trailer Type</Tooltip>}><td className="table-row-label">Trailer Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TrailerType ? props.activeCar.TrailerType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Transmission Speeds</Tooltip>}><td className="table-row-label">Transmission Speeds</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TransmissionSpeeds ? props.activeCar.TransmissionSpeeds : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Transmission Style</Tooltip>}><td className="table-row-label">Transmission Style</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.TransmissionStyle ? props.activeCar.TransmissionStyle : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trim</Tooltip>}><td className="table-row-label">Trim</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Trim ? props.activeCar.Trim : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Trim2</Tooltip>}><td className="table-row-label">Trim2</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Trim2 ? props.activeCar.Trim2 : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Turbo</Tooltip>}><td className="table-row-label">Turbo</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Turbo ? props.activeCar.Turbo : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>VIN</Tooltip>}><td className="table-row-label">VIN</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.VIN ? props.activeCar.VIN : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Valve Train Design</Tooltip>}><td className="table-row-label">Valve Train Design</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.ValveTrainDesign ? props.activeCar.ValveTrainDesign : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Vehicle Type</Tooltip>}><td className="table-row-label">Vehicle Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.VehicleType ? props.activeCar.VehicleType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Long</Tooltip>}><td className="table-row-label">Wheel Base Long</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.WheelBaseLong ? props.activeCar.WheelBaseLong : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Short</Tooltip>}><td className="table-row-label">Wheel Base Short</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.WheelBaseShort ? props.activeCar.WheelBaseShort : "-"}</td>
					</tr>
					<tr>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Base Type</Tooltip>}><td className="table-row-label">Wheel Base Type</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.WheelBaseType ? props.activeCar.WheelBaseType : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Size Front</Tooltip>}><td className="table-row-label">Wheel Size Front</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.WheelSizeFront ? props.activeCar.WheelSizeFront : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheel Size Rear</Tooltip>}><td className="table-row-label">Wheel Size Rear</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.WheelSizeRear ? props.activeCar.WheelSizeRear : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Wheels</Tooltip>}><td className="table-row-label">Wheels</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Wheels ? props.activeCar.Wheels : "-"}</td>
						<OverlayTrigger overlay={<Tooltip id="button-tooltip" {...props}>Windows</Tooltip>}><td className="table-row-label">Windows</td></OverlayTrigger><td className="table-row-data">{ props.activeCar.Windows ? props.activeCar.Windows : "-"}</td>
					</tr>
				</tbody>
			</table>
			<hr/>
		</>
		)
	}

export default CarDetail;