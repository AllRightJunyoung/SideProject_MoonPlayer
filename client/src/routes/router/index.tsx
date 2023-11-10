import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from 'routes/ProtectedRoute/ProtectedRoute';
import App from 'shared';
import { LoginPage, Redirect } from 'Login/page/';
import { MusicPage } from 'Music/page';

export const ROUTE_URL = {
  LOGIN: '/login',
  OAUTH: '/oauth',
  MUSIC: '/music',
  USER: '/user',
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: '/', element: <LoginPage /> },
      {
        path: ROUTE_URL.LOGIN,
        element: (
          <ProtectedRoute>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      { path: ROUTE_URL.OAUTH, element: <Redirect /> },
      {
        path: ROUTE_URL.MUSIC,
        element: (
          <ProtectedRoute>
            <MusicPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
