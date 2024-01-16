import './main.css';
import myImage from './images/eric_zhang.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
impor
function App() {
  return (
    <div id="wrapper">

					<Router>
						<Switch>
							<Route path="/about" component={AboutPage} />
							{/* Define other routes as needed */}
						</Switch>
						</Router>
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
											<li>Computer Architecture</li>
											<li>Theory of Computer Science</li>
											<li>Software Engineering</li>
											<li>Discrete Mathematics</li>
											<li>Linear Algebra</li>
										</ul>
										<ul className="actions">
											<li><a href="Eric_Zhang_Resume.pdf" className="button" target="_blank">Resume</a></li>
											<li><a href="#second" className="button">Projects</a></li>
											<li><a href="#cta" className="button">Contact</a></li>
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
										<span className="icon solid major style1 fa-code"></span>
										<h3>C/C++</h3>
										<p></p>
									</li>
									<li>
										<span className="icon major style3 fa-copy"></span>
										<h3>Python</h3>
										<p></p>
									</li>
									<li>
										<span className="icon major style5 fa-gem"></span>
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
										<a href ="https://www.w3schools.com/"><img src="tsp.png" className='project-img'></img></a>
										<h3>Traveling Salesperson Visualizer</h3>
										<p>An online visualizer that from (x,y) coordinates, graphs the optimal solution and a random insersetion heuristic solution to the traveling salesperson problem. Takes inputs in the form of manual inputs and txt files</p>
										<p className='languages'>C++/HTML/CSS/JavaScript</p>
									</li>
									<li>
										<span className="icon major style3 fa-copy"></span>
										<h3>Python</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
									<li>
										<span className="icon major style5 fa-gem"></span>
										<h3>HTML/CSS/JavaScript</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
								</ul>
								<footer className="major">
									<ul className="actions special">
										<li><a href="generic.html" className="button">Learn More</a></li>
									</ul>
								</footer>
							</section>

				
							

					</div>

			
					<footer id="contact ">
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
export default App;
