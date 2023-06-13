import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistryPage from '../pages/RegistryPage';
import OpdCurrentHistoryPage from '../pages/OpdCurrentHistoryPage';
import WorkspacePage from '../pages/WorkspacePage';
import OpdDoctorPage from '../pages/OpdDoctorPage'
import OpdDiagnosisPage from '../pages/OpdDiagnosisPage';
import OpdDischargePage from '../pages/OpdDischargePage';
import EditPassword from '../pages/EditPassword';
import ProtectedRoute from '../features/auth/components/ProtectedRoute'
import RedirectIfAuthenticated from '../features/auth/components/RedirectIfAuthenticated'
import Container from '../layouts/Container';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    )
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <RegistryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/newUser',
    element: (
      <ProtectedRoute>
        <EditPassword />
      </ProtectedRoute>

    )
  },
  {
    path: '/doctor',
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/doctor/',
        element: (
          <WorkspacePage />
        )
      },
      {
        path: '/doctor/workspace/:workspaceId',
        element: (
          <OpdDoctorPage />
        )
      },
      {
        path: '/doctor/CH/:consultationId',
        element: (
          <OpdCurrentHistoryPage />
        )
      },
      {
        path: '/doctor/diag/:consultationId',
        element: (
          <OpdDiagnosisPage />
        )
      },
      {
        path: '/doctor/dc/:consultationId',
        element: (
          <OpdDischargePage />
        )
      }
    ]
  },

]);

export default function Router() {
  return <RouterProvider router={router} />;
}