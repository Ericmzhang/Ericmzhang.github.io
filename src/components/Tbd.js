import { Link } from 'react-router-dom';
import '../main.css'
function Tbd()
{
    return(
        <div>
             <Link to ="/">Home</Link>
            <h1>Contact me for the code</h1>
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

export default Tbd