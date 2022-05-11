import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import { SkillBars } from "../portfolio";
import { Progress } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";

import Proficiency from "../containers/Proficiency";

const Skills = () => {
	return (
		<Container className="text-center my-5 section section-lg">
			<h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-6" key={index}>
						<Col lg="6" className="order-2 order-lg-1">
							<Fade left duration={2000}>
								<DisplayLottie
									animationPath={section.lottieAnimationFile}
								/>
							</Fade>
						</Col>
						<Col lg="6" className="order-1 order-lg-2">
							<Fade right duration={2000}>
								<h3 className="h3 mb-4">{section.title}</h3>
								<div>
									{section.skills.map((skill, i) => {
										if (skill == "Der Elektroschrott Müll kommt größtenteils aus Industrieländern wie Deutschland, da es ständig neue Produkte auf dem Markt gibt. Durch so einen schnellen Fortschritt, werden die Elektronikartikel schnell veraltet in den Industrieländern und landen dann schneller im Müll. ") {
											return (
												<div>
													<p key={i}>{skill}</p>
													<Container className="section section-lg">
														<Fade bottom duration={2000} >
															<Row>
																<Col lg="6">
																	<h1 className="h1">Die größten Industrieländer stand 2014:</h1>
																	{SkillBars.map((skill) => {
																		return (
																			<div
																				className="progress-info"
																				key={skill.Stack}
																			>
																				<div className="progress-label">
																					<span>{skill.Stack}</span>
																				</div>
																				<div className="progress-percentage">
																					<span>{skill.progressPercentage}%</span>
																				</div>
																				<Progress
																					max="100"
																					value={skill.progressPercentage}
																					color="info"
																					role="progressbar"
																					aria-label={skill.Stack}
																				/>
																			</div>
																		);
																	})}
																</Col>
																<Col lg="6">
																	<GreetingLottie animationPath="/lottie/build.json" />
																</Col>
															</Row>
														</Fade>
													</Container>
												</div>
											);
										} else {
											return (
												<p key={i}>{skill}</p>
											);
										}
									})}
								</div>
							</Fade>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
};

export default Skills;
