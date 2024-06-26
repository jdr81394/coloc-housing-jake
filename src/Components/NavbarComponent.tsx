import { Link } from "react-router-dom"


const NavBar = ({children} : {children?: any}) => {

    return <nav>
        <Link to="/shopping"> shopping</Link> 
        <Link to="/dashboard"> dashboard</Link> 

        {children}</nav>

}

export default NavBar