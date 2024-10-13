import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Counter from "./Counter";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Counter></Counter>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;