import HomePage from "../Screens/HomePage";
import Login from "../Screens/Login";

export const authRoute = [
    { path: '/login', element: <Login /> },
    { path: '/', element: <HomePage /> },

]