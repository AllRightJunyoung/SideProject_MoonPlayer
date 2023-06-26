import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, MusicPage, UserPage, RedirectPage } from 'pages';
import ProtectedRoute from 'routes/ProtectedRoute/ProtectedRoute';
import App from 'App';
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
      { path: ROUTE_URL.LOGIN, element: <LoginPage /> },
      { path: ROUTE_URL.OAUTH, element: <RedirectPage /> },
      {
        path: ROUTE_URL.USER,
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      },
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
