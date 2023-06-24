import { Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music/index';
import UserPage from 'pages/User/index';
import { LoginPage } from 'pages/Login';
import GlobalStyle from 'styles/GlobalStyle';
import { DiaLogContextProvider } from 'context/Dialog';
import ProtectedRoute from 'Route/ProtectedRoute';
import DiaLog from 'components/Global/UI/Dialog';
import { RedirectPage } from '../Redirect/index';

function App() {
  return (
    <DiaLogContextProvider>
      <GlobalStyle />
      <DiaLog />
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <MusicPage />
            </ProtectedRoute>
          }
          path="/music"
        ></Route>
        <Route
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
          path="/user"
        ></Route>
        <Route element={<LoginPage />} path="/"></Route>;<Route element={<RedirectPage />} path="/oauth"></Route>;
      </Routes>
    </DiaLogContextProvider>
  );
}

export default App;
