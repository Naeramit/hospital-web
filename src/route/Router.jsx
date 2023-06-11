import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistryPage from '../pages/RegistryPage';
import OpdCurrentHistory from '../pages/OpdCurrentHistoryPage';
import WorkspacePage from '../pages/WorkspacePage';
import OpdDoctorPage from '../pages/OpdDoctorPage'
import OpdDiagnosisPage from '../pages/OpdDiagnosisPage';
import OpdDischargePage from '../pages/OpdDischargePage';
import EditPassword from '../pages/EditPassword';


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
        <OpdCurrentHistory/>
      )
    },
    {
      path: '/workspace',
      element: (
        <WorkspacePage/>
      )
    },
    {
      path: '/opd/doctor',
      element: (
        <OpdDoctorPage/>
      )
    },
    {
      path: '/diagnosis',
      element: (
        <OpdDiagnosisPage/>
      )
    },
    {
      path: '/discharge',
      element: (
        <OpdDischargePage/>
      )
    },
    {
      path: '/editpassword',
      element: (
        <EditPassword/>
      )
    },

  ]);

  export default function Router() {
    return <RouterProvider router={router} />;
  }