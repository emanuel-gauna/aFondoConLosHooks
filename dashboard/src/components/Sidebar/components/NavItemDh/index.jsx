import { Link } from "react-router-dom";

export const NavItemDh = ({href ,icon ,name}) =>{
    return(
        <>
                      {/*<!-- Nav Item - Dashboard -->*/}
                      <li className="nav-item active">
                    <Link className="nav-link" to={href}>
                        <i className={`fas fa-fw ${icon}`}></i>
                        <span>{name}</span>
                        </Link>
                </li>
        </>
    )
}