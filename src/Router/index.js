import LayoutDefault from "../Layout/LayoutDefault";
import DashBoard from "../Page/Dashboard";
import Book from "../Page/Book";
import CreateRoom from "../Page/CreateRoom";
import ListRoom from "../Page/ListRoom";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <DashBoard />
            },
            {
                path: "/book-room",
                element: <Book/>
            },
            {
                path: "/create-room",
                element: <CreateRoom/>
            },
            {
                path: "/list-room",
                element: <ListRoom/>
            }
        ]
    }
]