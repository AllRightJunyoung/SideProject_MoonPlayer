import React from 'react';
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
// function onRenderCallback(
//   id, // the "id" prop of the Profiler tree that has just committed
//   phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//   actualDuration, // time spent rendering the committed update
//   baseDuration, // estimated time to render the entire subtree without memoization
//   startTime, // when React began rendering this update
//   commitTime, // when React committed this update
//   interactions // the Set of interactions belonging to this update
// ) {
//   // Aggregate or log render timings...
//   console.log({
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     commitTime,
//     interactions,
//   });
// }
