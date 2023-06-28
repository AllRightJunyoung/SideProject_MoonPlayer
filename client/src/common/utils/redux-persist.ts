import persistStore from 'redux-persist/lib/persistStore';
import { store } from 'common/store/store';

export const persistor = persistStore(store);

export const removeStoreItems = () => {
  persistor.purge();
};
