import {createBrowserRouter} from 'react-router-dom'
import {Error404} from "../components/pages/Error404";
import {dataState} from "../data/dataState";
import App from "../App";
import {Page} from "../components/pages/Page";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

//НАЧИНКА createBrowserRouter ДОЛЖНА БЫТЬ В МАССИВЕ ОБЪЕКТОВ
export const router = createBrowserRouter([
    {
        // path: '/' означает корень, путь http://localhost:3000/
        path: '/',
        // в строке element: <App/> можно было написать element: <Site/>, чтобы заработало
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                // path: '/' означает путь http://localhost:3000/page/:id
                path: '/page/:id',
                element: (
                    <Page pages={dataState.pages}/>
                )
            },
            {
                path: '/page/protected',
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },

        ]
    },

])