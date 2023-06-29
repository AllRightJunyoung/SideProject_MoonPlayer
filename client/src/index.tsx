import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from 'common/store/store';
import App from 'common';

import { PersistGate } from 'redux-persist/integration/react';
import { DiaLogContextProvider } from 'common/context/dialog';
import { router } from 'routes/router';
import { persistor } from 'common/utils/redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DiaLogContextProvider>
          <RouterProvider router={router}></RouterProvider>
          <App />
        </DiaLogContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
