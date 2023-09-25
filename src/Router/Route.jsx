import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donate from "../Pages/Donate/Donate";



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
            path : "/donation",
            element : <Donation></Donation>
        },
        {
            path : "/statistics",
            element : <Statistics></Statistics>
        },
        {
            path: "/donate/:id",
            element: <Donate></Donate>,
            loader : ()=> fetch('/donation.json')
        }
    ]

    }
])

export default myCreatedRoute;