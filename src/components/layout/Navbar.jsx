
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


function Navbar({icon,title}){
    

        return(
            <nav className="header">
            
                    <h1 style={{display:"inline"}}><i className={icon} style={{paddingRight:"10px"}}></i>{title}</h1>
                    <ul style={{listStyleType:"none",display:"inline",float:"right"}}>
                        <li className="navbar-item"><Link to="/"  className="navbar-link">Home</Link></li>
                        <li className="navbar-item"><Link to="/about"  className="navbar-link">about</Link></li>
                    </ul>
            </nav>

        )

}
Navbar.defaultProps={
    title:"Github Users",
    icon:"fab fa-github"
};
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};
export default Navbar;