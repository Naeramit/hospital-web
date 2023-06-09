import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import RegistryPage from '../pages/RegistryPage'
import CurrentHistory from '../pages/CurrentHistoryPage'


const router = createBrowserRouter([
    {
      path: '/login',
      element: (
          <LoginPage />
      )
    },
    {
      path: '/registry',
      element: (
        <RegistryPage/>
      )
    },
    {
      path: '/currenthistory',
      element: (
        <CurrentHistory/>
      )
    }


  ]);

  export default function Router() {
    return <RouterProvider router={router} />;
  }