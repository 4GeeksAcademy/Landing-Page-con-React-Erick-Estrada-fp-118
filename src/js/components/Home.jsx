import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from './navbar';
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 bg-body-secondary mx-0">
			<Navbar />

			<div className="container my-3">
				<Jumbotron />
				<div className="row d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>

	);
}
export default Home;