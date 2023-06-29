import GlobalStyle from 'common/styles/GlobalStyle';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
