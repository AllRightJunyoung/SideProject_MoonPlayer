import { Route, Routes } from 'react-router-dom';
import { LoginPage, MusicPage, UserPage, RedirectPage } from 'pages';

import GlobalStyle from 'styles/GlobalStyle';
import { DiaLogContextProvider } from 'common/context/dialog';
import ProtectedRoute from 'Route/ProtectedRoute';

function App() {
  return (
    <>
      <DiaLogContextProvider>
        <GlobalStyle />
        {/* <DiaLog /> */}
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
    </>
  );
}

export default App;
