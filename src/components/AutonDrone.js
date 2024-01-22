  import '../main.css'
  import { Link } from 'react-router-dom';

  function AutonDrone(){
    return(
        <div>
             <Link to ="/">Home</Link>
            <h1 className='text-center'>Autonomous Drone Flight Controller</h1>
            <br></br>
            <h2 className ='text-center'>Wind Resistance</h2>
            <p className='text-center text-container'>The drone is able to maintain a SONAR reading of within 1m of a desired altitude and GPS readings within 0.5 m of a desired position in the presence of winds up to 7 m/s</p>
            <iframe  className ='video' width="560" height="315" src="https://www.youtube.com/embed/4z-KRFUvbYg?si=5c2qrNG8AAyas88j" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br></br>
            <h2 className ='text-center'>Maze Traversal and Obstacle Avoidance</h2>
            <p className='text-center text-container'>The drone is able to move forward and avoid obstacles in a forest environment. It is also able to fly up inclines of 25 degrees</p>
            <iframe className ='video' width="560" height="315" src="https://www.youtube.com/embed/9-bYbpU4Pm4?si=927WA8a_ApMGvL8d" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br></br>
            <footer className='margin-left'>
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
       
    )
  }

  export default AutonDrone