import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from 'shared/store/store';
import App from 'shared';

import { PersistGate } from 'redux-persist/integration/react';
import { DiaLogContextProvider } from 'shared/context/dialog';
import { router } from 'routes/router';
import { persistor } from 'shared/utils/redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DiaLogContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <App />
      </DiaLogContextProvider>
    </PersistGate>
  </Provider>
);
