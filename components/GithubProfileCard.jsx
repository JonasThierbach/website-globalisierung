import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import imagee from './ff5.png'

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src="./ff5.png"
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">GLOBALISIERUNG</h2>
							<p className="lead text-white mt-3">
							<strong> Ersteller: </strong> <em> Chiara Landsberg, Alina Nuss</em>
							</p>
							<p className="lead text-white mt-3">
							Erreichbarkeit: <em>chiara.landsb@gmail.com</em>
							</p>
							<p className="text-white mt-3">Wir bitten ausdrücklich jegliche Fotos, Videos und Texte nicht zu kopieren. </p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								E 118° 45' 57.528" //
							</div>
							
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
