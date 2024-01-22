import './main.css';
import myImage from './images/eric_zhang.png';

import { Link } from 'react-router-dom';


function Home() {
  return (
	
    <div id="wrapper">
					<header id="header" className="alt">
						<h1>Eric Zhang</h1>
						<p>Computer Science Student at the University of Michigan</p>
						<ul className="icons">
							<li><a href="https://www.linkedin.com/in/eric-zhang-75b165251/" target="_blank" className="icon"><img src="linkedin.png" className ="header-icon" alt="LinkedIn logo"></img></a></li>
							<li><a href="https://github.com/Ericmzhang" target="_blank" className="icon"><img src="github.png" className ="header-icon" alt="GitHub logo"></img></a></li>
							<li><a href="Eric_Zhang_Resume.pdf" target="_blank" className="icon"><img src="resume.png" className ="header-icon" alt="PDF logo"></img></a></li>
						</ul>
					</header>

		
					<nav id="nav">
						<ul>
							<li><a href="#intro" className="active">About Me</a></li>
							<li><a href="#skills">Skills</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>

				
					<div id="main">

					
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>About Me</h2>
										</header>
										<h3>Hi I'm Eric Zhang</h3>
										<p>I am an undergraduate computer science student at the University of Michigan expected to grauduate in spring 2025. I am passionate about new innovations and creating meaningful impact.
											 My hobbies include soccer, basketball, and the saxophone</p>
										<h3>Relevant Coursework</h3>
										<ul className ="two-column-list">
											<li>Data Structures and Algorithms</li>
											<li>Machine Learning</li>
											<li>Operating Systems</li>
											<li>Computer Architecture</li>
											<li>Theory of Computer Science</li>
											<li>Software Engineering</li>
											<li>Discrete Mathematics</li>
											<li>Linear Algebra</li>
										</ul>
										<ul className="actions">
											<li><a href="Eric_Zhang_Resume.pdf" className="button" target="_blank">Resume</a></li>
											<li><a href="#projects" className="button">Projects</a></li>
											<li><a href="#contact" className="button">Contact</a></li>
										</ul>
									</div>
									<span className="image"><img src={myImage} alt="" /></span>
								</div>
							</section>
							
					
							<section id="skills" className="main special">
								<header className="major">
									<h2>Skills</h2>
								</header>
								<ul className="features">
									<li>
										
										<img className = "project-img" src="ISO_C++_Logo.svg.png"></img>
										<h3>C/C++</h3>
										<p></p>
									</li>
									<li>
										
										<img className = "project-img" src ="Python-logo-notext.svg.png"></img>
										<h3>Python</h3>
										<p></p>
									</li>
									<li>
									
										<img className = "project-img" src = "html.jpg"></img>
										<h3>HTML/CSS/JavaScript</h3>
										<p></p>
									</li>
								</ul>
								{/* <footer className="major">
									<ul className="actions special">
										<li><a href="generic.html" className="button">Learn More</a></li>
									</ul>
								</footer> */}
							</section>

					
							<section id="projects" className="main special">
								<header className="major">
									<h2>Projects</h2>
									
								</header>
								<ul className="features">
									<li>
										<Link to ="/tsp"><img src="tsp.png" className='project-img'></img></Link>
										<div >
											<Link to ="/tsp"><h3>TSP Visualizer</h3></Link>
											<a href="https://github.com/Ericmzhang/tsp_visualizer" target ="_blank"><img className="header-icon" src="github.png"></img></a>
										</div>
										
										<p>An online visualizer that from (x,y) coordinates, graphs the optimal solution and a random insersetion heuristic solution to the traveling salesperson problem. Takes inputs in the form of manual inputs and txt files</p>
										<p className='languages'>C++/HTML/CSS/JavaScript</p>
									</li>
									<li>
										
										<Link to ="/drone"><img src="drone.png" className='project-img'></img></Link>
										<div>
											<Link to ="/drone"><h3>Autonomous Drone Controller</h3></Link>
											<a href="https://github.com/Ericmzhang/FlightController" target ="_blank"><img className="header-icon" src="github.png"></img></a>
										</div>
										
										
										<p>Collaborated with a team to implement a PID flight controller capable of maintaining the drone’s
altitude within a 1 meter margin and detecting and avoiding obstacles at a rate above 98 percent</p>
										<p className='languages'>Python</p>
									</li>
									<li>
										
<Link to ="/drone"><img src="piazza.png" className='project-img'></img></Link>
										<div>
											<Link to ="/tbd"><h3 > Post Topic Identifier</h3></Link>
											<a href="https://github.com/Ericmzhang/FlightController" target ="_blank"><img className="header-icon" src="github.png"></img></a>
											
										</div>
										
										
										<p>Implemented a Naive-Bayes classifier to identify the subject of posts in online question-answer
forum Piazza, achieving an accuracy of over 85 percent</p>
										<p className='languages'>C++</p>
									</li>
									<li>
										<Link to ="/tbd"><img src="euchre.PNG" className='project-img'></img></Link>
										<div>
											<Link to ="/tsp"><h3>Euchre</h3></Link>
											<a  target ="_blank"><img className="header-icon" src="github.png"></img></a>
										</div>
										
										<p>A simple simulator of Euchre, a midwestern trick taking card game.</p>
										<p className='languages'>C++</p>
									</li>
									
								</ul>

								
								
							</section>

				
							

					</div>

			
					<footer id="contact">
						<section>
							<h2>Contact Me</h2>
							<dl className="alt">
								<dt>Location</dt>
								<dd>Ann Arbor, MI</dd>
								<dt>Phone</dt>
								<dd>734-546-0902</dd>
								<dt>Email</dt>
								<dd><a href="#">emzhang@umich.edu</a></dd>
							</dl>
							<ul className="icons">
							<li><a href="https://www.linkedin.com/in/eric-zhang-75b165251/" target="_blank" className="icon"><img src="linkedin.png" className ="header-icon" alt="LinkedIn logo"></img></a></li>
							<li><a href="https://github.com/Ericmzhang" target="_blank" className="icon"><img src="github.png" className ="header-icon" alt="GitHub logo"></img></a></li>
							<li><a href="Eric_Zhang_Resume.pdf" target="_blank" className="icon"><img src="resume.png" className ="header-icon" alt="PDF logo"></img></a></li>
						</ul>
						</section>
						
					</footer>
					
					

			</div>
			
    
  );
}
export default Home;
