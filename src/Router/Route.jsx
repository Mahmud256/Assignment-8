import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=> fetch('/donation.json')
            },
            {
                path : "/favorites",
                element : <Donation></Donation>
            },
            {
                path : "/login",
                element : <Statistics></Statistics>
            }
        ]

    }
])

export default myCreatedRoute;