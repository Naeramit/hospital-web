import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import RegistryPage from '../pages/RegistryPage'
import CurrentHistory from '../pages/CurrentHistoryPage'
import WorkspacePage from '../pages/WorkspacePage';
import DoctorOpdPage from '../pages/DoctorOPDPage';
import DiagnosisPage from '../pages/DiagnosisPage';


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
    },
    {
      path: '/workspace',
      element: (
        <WorkspacePage/>
      )
    },
    {
      path: '/doctoropd',
      element: (
        <DoctorOpdPage/>
      )
    },
    {
      path: '/diagnosis',
      element: (
        <DiagnosisPage/>
      )
    }
  ]);

  export default function Router() {
    return <RouterProvider router={router} />;
  }