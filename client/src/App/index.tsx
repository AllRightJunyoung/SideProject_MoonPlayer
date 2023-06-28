import GlobalStyle from 'common/styles/GlobalStyle';

import { Outlet } from 'react-router-dom';
import Alarm from 'common/components/ui/Dialog/Alarm/Alarm';
import Confirm from 'common/components/ui/Dialog/Confirm/Confirm';
function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
