import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoia2VsdmluMDMwNyIsImEiOiJjbG96a2dydmEwMXpmMnF0Y3Nkb3BxOWhvIn0.z7nmD4RAxMqnstX3cps3OA";

function App() {
	var containerRef = useRef();
	const [map, setMap] = useState(null);

	useEffect(() => {
		setMap(
			new mapboxgl.Map({
				container: containerRef?.current,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [-73.985664, 40.748514],
				zoom: 12,
			})
		);
	}, []);

	return (
		<>
			<div className="pageContainer">
				<div className="routingContainer">
					<div className="inputsContainer">
						<h1>Plan uw route</h1>
						<input placeholder="Huidige locatie"></input>
						<input placeholder="Bestemming"></input>
						<button>Zoek route</button>
					</div>
					<div className="mapContainer" ref={containerRef}></div>
				</div>
			</div>
			<div className="footerContainer">
				<div className="footerItem">
					<b>COMPANY</b>
					<p>How it works</p>
					<p>Pricing</p>
					<p>Demo</p>
				</div>
				<div className="footerItem">
					<b>RESOURCES</b>
					<p>Blog post...</p>
					<p>Blog post...</p>
					<p>Blog post...</p>
				</div>
				<div className="footerItem">
					<b>ABOUT</b>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</>
	);
}

export default App;
