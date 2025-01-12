import "./main.css";
import myImage from "./images/eric_zhang.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="wrapper">
      <header id="header" className="alt">
        <h1>Eric Zhang</h1>
        <p>Computer Science Student at the University of Michigan</p>
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/eric-zhang-75b165251/"
              target="_blank"
              className="icon"
            >
              <img
                src="linkedin.png"
                className="header-icon"
                alt="LinkedIn logo"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ericmzhang"
              target="_blank"
              className="icon"
            >
              <img
                src="github.png"
                className="header-icon"
                alt="GitHub logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="Eric_Zhang_Resume_26.pdf" target="_blank" className="icon">
              <img
                src="resume.png"
                className="header-icon"
                alt="PDF logo"
              ></img>
            </a>
          </li>
        </ul>
      </header>

      <nav id="nav">
        <ul>
          <li>
            <a href="#intro" className="active">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
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
              <p>
                I am an undergraduate computer science student at the University
                of Michigan expected to grauduate in May 2026.</p>
                <p> My interests include Operating Systems, Distributed Systems, and Computer Architecture.
                  </p>
                <p> 
                   My hobbies include soccer, basketball, and the saxophone
              </p>
              <h3>Relevant Coursework</h3>
              <ul className="two-column-list">
                <li>Data Structures and Algorithms</li>
                <li>Operating Systems</li>
                <li>Machine Learning</li>
                <li>Computer Architecture</li>
                <li>Distirbuted Systems</li>
                <li>Embedded Systems</li>
                <li>Computer Vision</li>
                <li>Computer Networks</li>
                <li>Theory of Computer Science</li>
                <li>Discrete Mathematics</li>
                <li>Linear Algebra</li>
              </ul>
              <ul className="actions">
                <li>
                  <a
                    href="Eric_Zhang_Resume_26.pdf"
                    className="button"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#projects" className="button">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="button">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <span className="image">
              <img src={myImage} alt="" />
            </span>
          </div>
        </section>

        <section id="skills" className="main special">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <ul className="features">
            <li>
              <img className="project-img" src="ISO_C++_Logo.svg.png"></img>
              <h3>C/C++</h3>
              <p></p>
            </li>
            <li>
              <img
                className="project-img"
                src="Python-logo-notext.svg.png"
              ></img>
              <h3>Python</h3>
              <p></p>
            </li>
            <li>
              <img className="project-img" src="html.jpg"></img>
              <h3>HTML/CSS/JavaScript</h3>
              <p></p>
            </li>
            <li>
              <img className="project-img" src="dflipflop.jpg"></img>
              <h3>Verilog</h3>
              <p></p>
            </li>
            <li>
              <img className="project-img" src="golang.png"></img>
              <h3>Golang</h3>
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
              <a href="risc_v_report.pdf">
                <img src="riscv_diagram.png" className="project-img"></img>
              </a>
              <div>
                <a href="risc_v_report.pdf">
                  <h3>Out-of-Order RISC-V Processor</h3>
                </a>
                <p className="languages">System Verilog</p>
				        <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>
              <p>
              A RISC-V processor with out-of-order & N-way superscalar execution, early tag broadcast, fast
              branch recovery, early branch resolution, store queue, non-blocking data cache, Gshare branch prediction,
              and instruction prefetching. Achieved 11.5ns clock period and average 1.3 CPI
              </p>
            </li>
		        <li>
              <Link to="/tbd">
                <img src="file_server.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tbd">
                  <h3>Multi-thread File Server</h3>
                </Link>
                <p className="languages">C++</p>
				        <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>

              <p>
                A thread-safe file server using upgradable reader/writer locks and TCP sockets. Allows users to manage files and directories via network messages.
              </p>
            </li>
            <li>
              <Link to="/tbd">
                <img src="virtual_mem.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tbd">
                  <h3>Virtual Memory Pager | C++</h3>
                </Link>
                <p className="languages">C++</p>
                <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>
              <p>
              A virtual memory pager in C++ that supports swap-backed and file-backed pages for multiple
              processes and manages page faults, process creation, forking, and process destruction
              </p>
            </li>
			<li>
              <Link to="/tbd">
                <img src="threads.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tbd">
                  <h3>Thread Library</h3>
                </Link>
                <p className="languages">C++</p>
                <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>
              <p>
              A kernel-level C++ thread library using UNIX contexts for thread lifecycle management, CPU
              booting, and interrupt handling, including synchronization primitives such as mutexes, condition
              variables, and spinlocks
              </p>
            </li>
            <li>
              <Link to="/tsp">
                <img src="tsp.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tsp">
                  <h3>TSP Visualizer</h3>
                </Link>
                <p className="languages">C++/HTML/CSS/JavaScript</p>
                <a
                  href="https://github.com/Ericmzhang/tsp_visualizer"
                  target="_blank"
                >
                  <img className="header-icon" src="github.png"></img>
                </a>
              </div>

              <p>
                An online visualization tool designed to tackle the Traveling
                Salesperson Problem (TSP). This tool plots both the optimal
                solution and a solution derived from a random insertion
                heuristic (work in progress), directly from (x,y) coordinate
                inputs. It supports manual entry or uploading text files.
              </p>
            </li>
            <li>
              <Link to="/tbd">
                <img src="piazza.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tbd">
                  <h3> Post Topic Identifier</h3>
                </Link>
                <p className="languages">C++</p>
                <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>

              <p>
                A Naive-Bayes classifier to identify the subject of
                posts in online question-answer forum Piazza, achieving an
                accuracy of over 85 percent
              </p>
            </li>
			<li>
              <Link to="/drone">
                <img src="drone.png" className="project-img"></img>
              </Link>
              <div>
                <Link to="/drone">
                  <h3>Autonomous Drone Controller</h3>
                </Link>
                <p className="languages">Python</p>
                <a
                  href="https://github.com/Ericmzhang/FlightController"
                  target="_blank"
                >
                  <img className="header-icon" src="github.png"></img>
                </a>
              </div>

              <p>
                Collaborated with a team to implement a PID flight controller
                capable of maintaining the drone’s altitude within a 1 meter
                margin and detecting and avoiding obstacles at a rate above 98
                percent
              </p>
            </li>
            <li>
              <Link to="/tbd">
                <img src="euchre.PNG" className="project-img"></img>
              </Link>
              <div>
                <Link to="/tbd">
                  <h3>Euchre</h3>
                </Link>
                <p className="languages">C++</p>
                <Link to="tbd">
                  <img className="header-icon" src="github.png"></img>
                </Link>
              </div>

              <p>
                A simple simulator of Euchre, a midwestern trick taking card
                game.
              </p>
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
            <dd>
              <a href="#">emzhang@umich.edu</a>
            </dd>
          </dl>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/eric-zhang-75b165251/"
                target="_blank"
                className="icon"
              >
                <img
                  src="linkedin.png"
                  className="header-icon"
                  alt="LinkedIn logo"
                ></img>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ericmzhang"
                target="_blank"
                className="icon"
              >
                <img
                  src="github.png"
                  className="header-icon"
                  alt="GitHub logo"
                ></img>
              </a>
            </li>
            <li>
              <a href="Eric_Zhang_Resume_26.pdf" target="_blank" className="icon">
                <img
                  src="resume.png"
                  className="header-icon"
                  alt="PDF logo"
                ></img>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
export default Home;
