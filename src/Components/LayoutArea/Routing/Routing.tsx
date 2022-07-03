import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Employees from "../../EmployeesArea/Employees/Employees";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import SuccessStories from "../../SuccessStoriesArea/SuccessStories/SuccessStories";
import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            
        <Routes>

            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/productsList" element={<ProductsList />}/>
            <Route path="/successStories" element={<SuccessStories />}/>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="*" element={<PageNotFound />}/>


        </Routes>


        </div>
    );
}

export default Routing;
