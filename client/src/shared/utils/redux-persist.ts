import persistStore from 'redux-persist/lib/persistStore';
import { store } from 'shared/store/store';

export const persistor = persistStore(store);

export const removeStoreItems = () => {
  persistor.purge();
};
