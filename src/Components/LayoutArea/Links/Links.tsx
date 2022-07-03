import { NavLink } from "react-router-dom";
import "./Links.css";

function Links(): JSX.Element {
    return (
        <div className="Links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/productsList">Products List</NavLink>
            <NavLink to="/successStories">Success Stories</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employees">Employees Names</NavLink>
        </div>
    );
}

export default Links;
