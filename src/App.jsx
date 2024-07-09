import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layouts />,
    children : [
      {
        index: true,
        element: <Shop />,
      },

      {
        path: 'cart',
        element: <
        Cart />,
      },

    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />;
};
export default App