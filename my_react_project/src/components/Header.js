import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="container ">
            <nav >
                <ul className="">
                    <li className="nav-item"> <NavLink exact className=".active" to="/"> Home </NavLink> </li>
                    <li className="nav-item"> <NavLink  className="" to="/note"> Note </NavLink> </li>
                    <li className="nav-item"> <NavLink  className="" to="/create"> Create </NavLink> </li>
                    <li className="nav-item"> <NavLink  className="" to="/about"> About </NavLink> </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;