import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Donations from "../../Components/Donations/Donations";

const Home = () => {

    const donations = useLoaderData();
    // console.log(donations);

    return (
        <div>
            <Banner></Banner>
            <div>
            <Donations donations = {donations}></Donations>
            </div>
        </div>
    );
};

export default Home;